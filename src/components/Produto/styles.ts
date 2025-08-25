import styled from 'styled-components';
import React from 'react';

export const Produto = styled.div`
  /* estilo do container do produto */
`;

export const Capa = styled.div`
  /* estilo da imagem */
`;

export const Titulo = styled.h2`
  /* estilo do título */
`;

export const Prices = styled.div`
  /* estilo dos preços */
`;

// Tipagem explícita para botão
export const BtnComprar = styled.button.attrs({
  type: 'button',
})<React.ButtonHTMLAttributes<HTMLButtonElement>>`
  background-color: #007bff;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  margin-top: 0.5rem;

  &:hover {
    background-color: #0056b3;
  }
`;

export const BtnFavorito = styled.button.attrs({
  type: 'button',
})<React.ButtonHTMLAttributes<HTMLButtonElement>>`
  background-color: #ffc107;
  color: black;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  margin-top: 0.5rem;
  margin-right: 0.5rem;

  &:hover {
    background-color: #e0a800;
  }
`;
