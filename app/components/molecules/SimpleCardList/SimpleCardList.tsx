import React from 'react';
import SimpleCard, {
  SimpleCardProp,
} from '../../atoms/SimpleCard/SimpleCard.component';
import { FlatList } from 'react-native';
import { layouts } from '../../../constants/styles';
import NoBeneficiary from '../../atoms/NoBeneficiaries/NoBeneficiaries';

interface SimpleCardListProp {
  cards: Array<SimpleCardProp>;
}

const SimpleCardList: React.FC<SimpleCardListProp> = ({ cards }) => {
  const keyExtractor = (item: SimpleCardProp) => item.image + item.name;
  const renderItem = ({ item }: { item: SimpleCardProp }) => {
    return <SimpleCard image={item.image} name={item.name} />;
  };

  const isCardsExists = cards.length > 0;

  return (
    <>
      {isCardsExists ? (
        <FlatList
          data={cards}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          numColumns={4}
          style={[layouts.px.sm, { backgroundColor: '#F1F3FB' }]}
        />
      ) : (
        <NoBeneficiary />
      )}
    </>
  );
};

export default SimpleCardList;
