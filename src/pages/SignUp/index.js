import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

import { auth, db } from '../../services/firebaseConnection';

import { Container } from './style';

export function SignUp(){
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    async function handleSignUp(e){
        e.preventDefault();
        setLoading(false);
        //console.log(e);

        if(nome !== '' && email !== '' && senha !== ''){
            await createUserWithEmailAndPassword(auth, email, senha)
            .then(async(value) => {
                //console.log(value);
                const id = value.user.uid;

                const docRef = doc(db, "users", id);
                await setDoc(docRef, {
                    name: nome,
                    email: email,
                    avatarUrl: null,
                    admin: false
                })
                // .then(() => {

                //     navigate("/todoList");
                // })

                setNome("");
                setEmail("");
                setSenha("");
                navigate("/todoList");
                toast.success("Cadastrado realizado com sucesso")
            })
            .catch((err) => {
                //console.log(err);
                if(err.code === 'auth/email-already-in-use'){
                    toast.error('Email já cadastrado')
                }else if(err.code === 'auth/weak-password'){
                    toast.error('A senha deve contrer pelo menos 6 digitos')
                }
            })
        }else{
            toast.error("Preencha todos os campos corretamente")
        } 
    }
    
    return(
        <Container>
            <form onSubmit={handleSignUp}>
                <h1>Faça seu login</h1>
                <input
                    placeholder='digite seu nome'
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
                <input
                    placeholder='digite sua email'
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    placeholder='digite sua senha'
                    type='password'
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />
                <button type='submit'>{loading ? "Cadastrar" : "Carregando..."}</button>
                
            </form>
            <Link to="/" >Já tenho cadastro</Link>
        </Container>
    )
}