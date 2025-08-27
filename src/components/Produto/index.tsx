import { Produto as ProdutoType } from '../../App'
import * as S from './styles'

type Props = {
  produto: ProdutoType
  aoComprar: (produto: ProdutoType) => void
  favoritar: (produto: ProdutoType) => void
  estaNosFavoritos: boolean
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(valor)

const ProdutoComponent = ({
  produto,
  aoComprar,
  favoritar,
  estaNosFavoritos
}: Props) => {
  return (
    <S.Produto>
      <S.Capa>
        <img
          src={produto.imagem}
          alt={`Capa do produto ${produto.nome}`}
          loading="lazy"
        />
      </S.Capa>

      <S.Titulo>{produto.nome}</S.Titulo>

      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>

      <S.BtnFavorito
        onClick={() => favoritar(produto)}
        aria-label={
          estaNosFavoritos
            ? `Remover ${produto.nome} dos favoritos`
            : `Adicionar ${produto.nome} aos favoritos`
        }
      >
        {estaNosFavoritos
          ? '− Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </S.BtnFavorito>

      <S.BtnComprar
        onClick={() => aoComprar(produto)}
        aria-label={`Adicionar ${produto.nome} ao carrinho`}
      >
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
