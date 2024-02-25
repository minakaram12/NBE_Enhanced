import {View, FlatList, ListRenderItem, TouchableOpacity} from 'react-native';
import VisaCard from '../../atoms/VisaCard/VisaCard';
import {VisaCardProps} from '../../atoms/VisaCard/VisaCard';
import {px} from '../../../constants/styles/layouts';
import layouts from '../../../constants/styles/layouts';
import React from 'react';
interface VisaCardData {
  id: string;
  amount: string;
  card_num: number;
  name: string;
  accType: string;
  date: string;
  cvv: string;
}

interface VisaCardListProps {
  VisaCardsData: VisaCardData[];
  onPress: () => void;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const VisaCardList: React.FC<VisaCardListProps> = ({
  VisaCardsData,
  onPress,
}) => {
  const renderVisaCard: ListRenderItem<VisaCardData> = ({item}) => (
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

  const keyExtractor = (item: VisaCardData) => item.id;

  return (
    <View style={[layouts.allCentered, {paddingHorizontal: 5}]}>
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
