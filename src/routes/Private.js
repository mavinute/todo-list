import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

import { auth } from '../services/firebaseConnection';

export function Private({children}){
    //console.log("Funciona");
    const [loading, setLoading] = useState(true);
    const [signed, setSigned] = useState(false);

    useEffect(() => {
        async function verifyUserSigned(){
            onAuthStateChanged(auth, (user) => {
                //console.log(user);

                if(user){
                    const dataUser = {
                        id: user.uid,
                        email: user.email
                    }

                    localStorage.setItem("@todoList", JSON.stringify(dataUser));

                    setLoading(false);
                    setSigned(true);
                }else{
                    setLoading(false);
                    setSigned(false);
                }
            })
        }

        verifyUserSigned()
    }, [])

    if(loading){
        return(
            <div></div>
        )
    }

    if(!signed){
        return(
            <Navigate to="/" />
        )
    }
    
    return children
}