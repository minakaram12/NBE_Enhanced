import {View, FlatList, ListRenderItem, TouchableOpacity} from 'react-native';
import VisaCard from '../../atoms/VisaCard/VisaCard';
import {VisaCardProps} from '../../atoms/VisaCard/VisaCard';
import layouts from '../../../constants/styles/layouts';

import React from 'react';
import styles from './VisaCardList.style';
interface VisaCardListProps {
  VisaCardsData: VisaCardProps[];
  onPress: () => void;
}

const VisaCardList: React.FC<VisaCardListProps> = ({
  VisaCardsData,
  onPress,
}) => {
  const renderVisaCard: ListRenderItem<VisaCardProps> = ({item}) => (
    <TouchableOpacity onPress={onPress} style={styles.card}>
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
