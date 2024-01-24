import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    background-color: #0062be;

    h1 {
        margin: 30px;
    }

    form {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        background-color: #DDD;
        border-radius: 5px;
        padding: 20px;

        width: 50%;
        min-width: 50%;
        height: 300px;

        input {
            width: 90%;
            min-width: 90%;
            height: 40px;
            border: 0;
            border-radius: 5px;
            margin-bottom: 10px;
            padding: 10px;
            font-size: 17px;
        }

        button {
            width: 50%;
            min-width: 50%;
            height: 40px;
            background-color: #c0392b;
            color: white;
            border: 0;
            border-radius: 5px;
            font-size: 15px;
            font-weight: 500;

            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    a {
        margin-top: -10px;
        background-color: #DDD;
        border-radius: 5px;
        padding: 20px;

        width: 50%;
        min-width: 50%;
        height: 20px;

        display: flex;
        align-items: center;
        justify-content: end;
        flex-direction: column;
    }
`