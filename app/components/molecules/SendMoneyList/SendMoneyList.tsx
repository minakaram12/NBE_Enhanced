import React from 'react';
import SimpleCard, {
  SimpleCardProp,
} from '../../atoms/SimpleCard/SimpleCard.component';
import {FlatList, View} from 'react-native';
import {layouts} from '../../../constants/styles';
interface SimpleCardListProp {
  cards: Array<SimpleCardProp>;
}
const SendMoneyList: React.FC<SimpleCardListProp> = ({cards}) => {
  const keyExtractor = (item: SimpleCardProp) =>
    item.image + item.name + Math.random().toString();
  const renderItem = ({item}: {item: SimpleCardProp}) => {
    return <SimpleCard image={item.image} name={item.name} />;
  };

  return (
    <View style={[layouts.allCentered, {paddingHorizontal: 5, height:100, width:'100%'},]}>
      <FlatList
        data={cards}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </View>
  );
};
export default SendMoneyList;
