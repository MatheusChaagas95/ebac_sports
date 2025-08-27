import styled from 'styled-components'

export const Produto = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 6rem;
  align-items: center;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  max-width: 250px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

  /* garante altura uniforme */
  min-height: 420px;

  /* distribui o conteúdo verticalmente */
  justify-content: space-between;
`

export const Capa = styled.div`
  width: 100%;
  height: 200px;
  margin-bottom: 1rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
`

export const Titulo = styled.h2`
  font-size: 1.1rem;
  margin: 0 0 0.5rem 0;
  text-align: center;

  /* controla quebras de linha */
  line-height: 1.4;
  min-height: 3rem; /* espaço fixo pros títulos */
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Prices = styled.div`
  font-size: 1rem;
  margin-bottom: 1rem;
  text-align: center;

  strong {
    color: #007bff;
  }
`
type BtnProps = {
  tipo?: 'favorito' | 'comprar'
}

export const BtnComprar = styled.button.attrs({
  type: 'button'
})<BtnProps & React.ButtonHTMLAttributes<HTMLButtonElement>>`
  background-color: ${({ tipo }) =>
    tipo === 'favorito' ? '#ffc107' : '#007bff'};
  color: ${({ tipo }) => (tipo === 'favorito' ? 'black' : 'white')};
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  width: 100%;
  margin-bottom: 0.5rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ tipo }) =>
      tipo === 'favorito' ? '#e0a800' : '#0056b3'};
  }
`

export const BtnFavorito = styled.button.attrs({
  type: 'button'
})<BtnProps & React.ButtonHTMLAttributes<HTMLButtonElement>>`
  background-color: #ffc107;
  color: black;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  width: 100%;
  margin-bottom: 0.5rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: #e0a800;
  }
`

export const GridProdutos = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  justify-items: center;
  padding: 1rem;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`
