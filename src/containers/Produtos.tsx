import { useSelector } from 'react-redux';
import { Produto as ProdutoType } from '../App';
import Produto from '../components/Produto';
import { RootState } from '../store';
import * as S from './styles';

const Produtos = () => {
  const produtos = useSelector((state: RootState) => state.cart.itens);
  const favoritos = useSelector((state: RootState) => state.cart.favoritos);

  return (
    <S.Produtos>
      {produtos.map((produto: ProdutoType) => (
        <Produto
          key={produto.id}
          produto={produto}
          estaNosFavoritos={favoritos.some(f => f.id === produto.id)}
        />
      ))}
    </S.Produtos>
  );
};

export default Produtos;
