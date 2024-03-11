import {FlatList, ListRenderItem} from 'react-native';

import React from 'react';
import {ExtendedCardProps} from '../SwipeableCardList/SwipeableCardListFaker';
import SimpleCard from '../../atoms/SimpleCard/SimpleCard.component';
interface SimpleCardListProp {
  cardsData: Array<ExtendedCardProps>;
  showAll: boolean;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SendMoneyList: React.FC<SimpleCardListProp> = ({cardsData, showAll}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const renderSimpleCard: ListRenderItem<ExtendedCardProps> = ({item}) => (
    <SimpleCard image={item.image} name={item.name} />
  );

  // const keyExtractor = (item: ExtendedCardProps) => {
  //  Math.random().toString();
  // };

  return (
    <FlatList
      data={showAll ? cardsData : cardsData.slice(0, 5)}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={renderSimpleCard}
      key={showAll ? 'showAll' : 'showLess'}
    />
  );
};

export default SendMoneyList;
