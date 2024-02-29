import React from 'react';
import SimpleCard from '../../atoms/SimpleCard/SimpleCard.component';
import {FlatList, StyleSheet} from 'react-native';
import {layouts} from '../../../constants/styles';
import NoBeneficiary from '../../atoms/NoBeneficiaries/NoBeneficiaries';
import {ExtendedCardProps} from '../SwipeableCardList/SwipeableCardListFaker';
import {theme} from '../../../theme/theme';

interface SimpleCardListProp {
  cards: Array<ExtendedCardProps>;
}

const SimpleCardList: React.FC<SimpleCardListProp> = ({cards = []}) => {
  const renderItem = ({item}: {item: ExtendedCardProps}) => {
    return (
      <SimpleCard
        image={item.image}
        name={item.name}
        style={{width: '23%', margin: '1%'}}
      />
    );
  };
  const isCardsExists = cards.length > 0;
  return (
    <>
      {isCardsExists ? (
        <FlatList
          data={cards}
          renderItem={renderItem}
          numColumns={4}
          style={[layouts.px.sm, styles.flasListStyle]}
        />
      ) : (
        <NoBeneficiary />
      )}
    </>
  );
};
const styles = StyleSheet.create({
  flasListStyle: {backgroundColor: theme?.BackgroundMenu},
})
export default SimpleCardList;
