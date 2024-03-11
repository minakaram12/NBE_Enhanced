import {View, FlatList, ListRenderItem, TouchableOpacity} from 'react-native';
import VisaCard from '../../atoms/VisaCard/VisaCard';
import {VisaCardProps} from '../../atoms/VisaCard/VisaCard';
import {px} from '../../../constants/styles/layouts';
import layouts from '../../../constants/styles/layouts';

import React from 'react';
interface VisaCardListProps {
  VisaCardsData: VisaCardProps[];
  onPress: () => void;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const VisaCardList: React.FC<VisaCardListProps> = ({
  VisaCardsData,
  onPress,
}) => {
  const renderVisaCard: ListRenderItem<VisaCardProps> = ({item}) => (
    <TouchableOpacity onPress={onPress} style={{paddingHorizontal: 5}}>
      <VisaCard
        amount={item.amount}
        card_num={item.card_num}
        name={item.name}
        accType={item.accType}
        date={item.date}
        cvv={item.cvv}
      />
    </TouchableOpacity>
  );

  const keyExtractor = (item: VisaCardProps) => item.card_num + item.accType;

  return (
    <View style={[layouts.allCentered]}>
      <FlatList
        data={VisaCardsData}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={keyExtractor}
        renderItem={renderVisaCard}
      />
    </View>
  );
};

export default VisaCardList;
