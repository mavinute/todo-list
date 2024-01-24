import { useState, useEffect, cloneElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

import { auth, db } from '../../services/firebaseConnection';

import { Container, Form, Todo, Logout } from './style';
import { addDoc, doc, collection, onSnapshot, orderBy, query, where, deleteDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';

export function Admin(){
    const [todo, setTodo] = useState('');
    const [userDetail, setUserDetail] = useState({});
    const [todosUser, setTodosUser] = useState([]);
    
    const navigate = useNavigate();

    useEffect(() => {
        async function loadUser(){
            const userInfor = localStorage.getItem("@todoList");
            setUserDetail(JSON.parse(userInfor));

            if(userInfor){
                //console.log(userInfor);
                const data = JSON.parse(userInfor);

                const collectionRef = collection(db, "todos");
                const q = query(collectionRef, orderBy("created", "desc"),  where("id", "==", data?.id));

                onSnapshot(q, (snapshot) => {
                    //console.log(snapshot)
                    let lista = [];

                    snapshot.forEach((doc) => {
                        console.log(doc)
                        lista.push({
                            id: doc.id,
                            todo: doc.data().todo
                        })
                    })

                    setTodosUser(lista);
                })
            }
        }

        loadUser()
    }, [])

    async function handleTodo(e){
        e.preventDefault();
        const collectionRef = collection(db, "todos");

        if(todo !== ''){
            await addDoc(collectionRef, {
                id: userDetail.id,
                todo: todo,
                created: new Date()
            })

            toast.success("A fazer cadastrado com sucesso")
            setTodo("");
        }else{
            toast.error("Escreva o a fazer corretamente")
        }
    }

    async function signOutAccount(){
        await signOut(auth);
        localStorage.clear("@todoList");
        navigate("/");
    }

    function editTodo(doc){
        //console.log(doc);

        setTodo(doc.todo);
    }

    async function conclutedTodo(id){
        const docRef = doc(db, "todos", id);

        await deleteDoc(docRef)
        .then(() => {
            setTodo("");
            toast.info("Todo finalizado")
        })
        .catch((err) => {
            console.log(err)
        })
    }
    
    return(
        <Container>
            <h1>Pagina de afazeres.</h1>
            <Form onSubmit={handleTodo}>
                <textarea
                    placeholder='digite aqui'
                    type='text'
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                />
                <button type='submit' >Salvar</button>
            </Form>
            <Todo>
                {todosUser.map((doc) => {
                    //console.log(doc)
                    return(
                        <>
                            <p key={doc.id}>{doc.todo}</p>
                            <div className='btns'>
                                <button onClick={() => editTodo(doc)} className='btn-edit'>Editar</button>
                                <button onClick={() => conclutedTodo(doc.id)} className='btn-concluded'>Concluir</button>
                            </div>
                        </>
                    )
                })}
            </Todo>
            <Logout onClick={() => signOutAccount()}>Sair</Logout>
        </Container>
    )
}