import {View, FlatList, ListRenderItem, TouchableOpacity} from 'react-native';
import VisaCard from '../../atoms/VisaCard/VisaCard';

import layouts from '../../../constants/styles/layouts';
import React from 'react';
import {ExtendedCardProps} from '../SwipeableCardList/SwipeableCardListFaker';
import SimpleCard from '../../atoms/SimpleCard/SimpleCard.component';
interface SimpleCardListProp {
  cardsData: Array<ExtendedCardProps>;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SendMoneyList: React.FC<SimpleCardListProp> = ({cardsData}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const renderSimpleCard: ListRenderItem<ExtendedCardProps> = ({item}) => (
    <SimpleCard image={item.image} name={item.name} />
  );

  // const keyExtractor = (item: ExtendedCardProps) => {
  //  Math.random().toString();
  // };

  return (
    <View style={[layouts.allCentered, {paddingHorizontal: 5}]}>
      <FlatList
        data={cardsData}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderSimpleCard}
       
      />
    </View>
  );
};

export default SendMoneyList;
