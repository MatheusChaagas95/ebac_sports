import styled from 'styled-components';

export const cores = {
  corTexto: '#121714',
  corFundo: '#eee',
  corPrincipal: '#0c2461',
  corSecundaria: '#4a69bd',
};

export const BtnComprar = styled.button.attrs({ type: 'button' })<
  React.ButtonHTMLAttributes<HTMLButtonElement>
>`
  display: block;
  width: 100%;
  background-image: linear-gradient(45deg, ${cores.corPrincipal}, ${cores.corSecundaria});
  font-weight: bold;
  font-size: 16px;
  padding: 12px 0;
  text-transform: capitalize;
  color: #eee;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  margin-bottom: 8px;

  &:hover {
    background-image: linear-gradient(-45deg, ${cores.corPrincipal}, ${cores.corSecundaria});
  }
`;
