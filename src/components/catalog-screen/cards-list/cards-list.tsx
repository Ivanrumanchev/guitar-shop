import CardItem from '../card-item/card-item';

const cardsMocks = [
  {
    'id': 1,
    'name': 'Честер Bass',
    'vendorCode': 'SO757575',
    'type': 'electric',
    'description': 'Вариант для настоящих профессионалов. Двенадцатиструнный инструмент оснащён карбоновыми струнами и корпусом из массива ели.',
    'previewImg': 'img/guitar-2.jpg',
    'stringCount': 7,
    'rating': 2,
    'price': 56331,
  },
  {
    'id': 2,
    'name': 'fvvv Bass',
    'vendorCode': 'SO757575',
    'type': 'electric',
    'description': 'Вариант для настоящих профессионалов. Двенадцатиструнный инструмент оснащён карбоновыми струнами и корпусом из массива ели.',
    'previewImg': 'img/guitar-3.jpg',
    'stringCount': 7,
    'rating': 5,
    'price': 542123,
  },
  {
    'id': 3,
    'name': 'Честер sss',
    'vendorCode': 'SO757575',
    'type': 'electric',
    'description': 'Вариант для настоящих профессионалов. Двенадцатиструнный инструмент оснащён карбоновыми струнами и корпусом из массива ели.',
    'previewImg': 'img/guitar-1.jpg',
    'stringCount': 7,
    'rating': 4,
    'price': 123111,
  },
];

function CardsList(): JSX.Element {
  return (
    <div className="cards catalog__cards">
      { cardsMocks.map((card) => (
        <CardItem guitar={ card } key={ card.id } />
      )) }
    </div>
  );
}

export default CardsList;
