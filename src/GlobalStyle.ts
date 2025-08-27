import { createGlobalStyle } from 'styled-components';
import { cores } from './components/styles';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: ${cores.corFundo};
    color: ${cores.corTexto};
    line-height: 1.5;
  }

  a {
    color: ${cores.corPrincipal};
    text-decoration: none;

    &:hover {
      color: ${cores.corSecundaria};
    }
  }

  button {
    background-color: ${cores.corPrincipal};
    color: #fff;
    border: none;
    padding: 0.6rem 1.2rem;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
      background-color: ${cores.corSecundaria};
    }
  }
`;
