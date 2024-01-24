import { Routes, Route } from 'react-router-dom';

import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';
import { Admin } from '../pages/Admin';

import { Private } from './Private';

export function RoutesApp(){
    return(
        <Routes>
            <Route path='/' element={<SignIn/>} />
            <Route path='/cadastro' element={<SignUp/>} />
            <Route path='/todoList' element={<Private><Admin/></Private>} />
        </Routes>
    )
}