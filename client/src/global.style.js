import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body{
        font-family: 'Metal Mania', cursive;
        padding: 20px 40px;

        @media screen and (max-width: 800px){
            padding: 5px;
        }
    }

    a{
        text-decoration: none;
        color: black;
    }

    *{
        box-sizing: border-box;
    }
`;