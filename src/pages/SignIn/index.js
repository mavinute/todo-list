import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from '../../services/firebaseConnection';

import { Container } from './style';

export function SignIn(){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const navigate = useNavigate();

    async function handleSignIn(e){
        e.preventDefault();

        if(email !== '' && senha !== ''){
            await signInWithEmailAndPassword(auth, email, senha)
            .then(() => {
                //console.log(value);
                navigate("/todoList");
            })
            .catch((err) => {
                console.log(err)
            })
        }else{
            toast.error("Preencha todos os campos corretamente")
        }

    }
    
    return(
        <Container>
            <form onSubmit={handleSignIn}>
                <h1>Faça seu login</h1>
                <input
                    placeholder='digite sua email'
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    placeholder='diggite sua senha'
                    type='password'
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />
                <button type='submit' >Acessar</button>
                
            </form>
            <Link to="/cadastro" >Fazer cadastro</Link>
        </Container>
    )
}