import { useSelector } from 'react-redux';
import cesta from '../../assets/cesta.png';
import { RootState } from '../../store';
import { paraReal } from '../Produto';
import * as S from './styles';

const Header = () => {
  const itens = useSelector((state: RootState) => state.cart.itens);
  const favoritos = useSelector((state: RootState) => state.cart.favoritos);

  const valorTotal = itens.reduce((acc: number, item) => acc + item.preco, 0);

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favoritos.length} favoritos</span>
        <img src={cesta} />
        <span>
          {itens.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  );
};

export default Header;
