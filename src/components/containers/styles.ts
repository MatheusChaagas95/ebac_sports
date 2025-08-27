import styled from 'styled-components'

export const Produtos = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Notebook */
  gap: 20px;
  padding: 16px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr); /* Tablet */
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Celular */
  }
`
