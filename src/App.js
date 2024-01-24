import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { RoutesApp } from './routes';

import { GlobalStyle } from './global/style';

export function App(){
  return(
    <BrowserRouter>
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
      <RoutesApp />
    </BrowserRouter>
  )
}