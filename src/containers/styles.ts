import styled from 'styled-components'

export const Produtos = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
  padding: 16px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 2px;
    width: 100%;
  }
`
