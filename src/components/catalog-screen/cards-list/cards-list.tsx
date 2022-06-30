import CardItem from '../card-item/card-item';
import LoadingScreen from '../../loading-screen/loading-screen';
import { useAppSelector } from '../../../hooks/store';
import { loadingGuitarsSelector } from '../../../store/selectors';
import { LoadingStatus } from '../../../constants/const';
import { GuitarDTO } from '../../../types/guitar';

type CardsListProps = {
  guitars: GuitarDTO[];
}

function CardsList({ guitars }: CardsListProps): JSX.Element {
  const isLoading = useAppSelector(loadingGuitarsSelector);

  if (isLoading === LoadingStatus.Pending) {
    return <LoadingScreen />;
  }

  return (
    <div className="cards catalog__cards">
      { guitars.length !== 0
        ? guitars.map((card) => (
          <CardItem guitar={ card } key={ card.id } />
        ))
        : 'Выбранные гитары отсутствуют, выберите другие условия поиска' }
    </div>
  );
}

export default CardsList;
