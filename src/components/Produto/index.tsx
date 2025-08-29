import { useDispatch } from 'react-redux';
import { Produto as ProdutoType } from '../../App';
import { adicionarAoCarrinho, adicionarAoFavorito, removerDoFavorito } from '../../store/reducers/cartSlice';
import * as S from './styles';

type Props = {
  produto: ProdutoType;
  estaNosFavoritos: boolean;
};

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(valor);

const Produto = ({ produto, estaNosFavoritos }: Props) => {
  const dispatch = useDispatch();

  const handleAdicionarCarrinho = () => {
    dispatch(adicionarAoCarrinho(produto));
  };

  const handleFavoritar = () => {
    if (estaNosFavoritos) {
      dispatch(removerDoFavorito(produto.id));
    } else {
      dispatch(adicionarAoFavorito(produto));
    }
  };

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
        onClick={handleFavoritar}
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
        onClick={handleAdicionarCarrinho}
        aria-label={`Adicionar ${produto.nome} ao carrinho`}
      >
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  );
};

export default Produto;
