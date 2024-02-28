import React from 'react';
import SimpleCard, {
  SimpleCardProp,
} from '../../atoms/SimpleCard/SimpleCard.component';
import {FlatList} from 'react-native';
import {layouts} from '../../../constants/styles';
import NoBeneficiary from '../../atoms/NoBeneficiaries/NoBeneficiaries';
import {ExtendedCardProps} from '../SwipeableCardList/SwipeableCardListFaker';
import {useTheme} from '../../../ContextAPI/ThemeContext';
import {width} from '@fortawesome/free-solid-svg-icons/faEye';

interface SimpleCardListProp {
  cards: Array<ExtendedCardProps>;
}

const SimpleCardList: React.FC<SimpleCardListProp> = ({cards}) => {
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
          style={[
            layouts.px.sm,
            {backgroundColor: useTheme().isDarkMode.BackgroundMenu},
          ]}
        />
      ) : (
        <NoBeneficiary />
      )}
    </>
  );
};

export default SimpleCardList;
