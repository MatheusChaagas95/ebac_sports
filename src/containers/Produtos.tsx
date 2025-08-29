import { useSelector } from 'react-redux';
import { Produto as ProdutoType } from '../App';
import Produto from '../components/Produto';
import { useGetProdutosQuery } from '../services/api';
import { RootState } from '../store';
import * as S from './styles';

const Produtos = () => {
  const { data: produtos = [], isLoading, error } = useGetProdutosQuery();
  const favoritos = useSelector((state: RootState) => state.cart.favoritos);

  if (isLoading) return <div>Carregando produtos...</div>;
  if (error) return <div>Erro ao carregar produtos</div>;

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
