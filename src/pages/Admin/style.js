import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 50px;
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    /* h1 {
        margin: 20px;
    } */

`

export const Form = styled.form`
    margin: 20px;
    width: 90%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    textarea {
        resize: none;

        margin-bottom: 10px;
        padding: 5px;
        font-size: 18px;
        
        width: 40%;
        min-width: 300px;
        height: 70px;

        border: 2px;
        border-radius: 5px;
    }

    button {
        width: 300px;
        height: 30px;
        background-color: #c0392b;
        color: #ecf0f1;
        border: 0;
        border-radius: 5px;
        font-size: 20px;
        font-weight: 500;
        transition: all 0.5s;
    }

    button:hover {
        background-color: #e74c3c;
    }
`

export const Todo = styled.div`
    margin: 10px;
    padding: 10px;
    border-radius: 5px;

    width: 35%;
    min-width: 300px;

    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    gap: 5px;
    
    background-color: #2980b9;

    p {
        font-size: 20px;
    }

    .btns {
        display: flex;
        gap: 5px;
    }

    .btn-edit {
        width: 50px;
        height: 20px;
        background-color: #3498db;
        color: white;

        border: 0;
        border-radius: 5px;
    }

    .btn-concluded {
        background-color: transparent;
        color: #d35400;
        border: 0;
    }
`

export const Logout = styled.button`
    position: absolute;
    bottom: 5%;
    left: 5%;

    width: 60px;
    height: 60px;
    border: 0;
    border-radius: 50%;
    color: white;
    background-color: #c0392b;
`