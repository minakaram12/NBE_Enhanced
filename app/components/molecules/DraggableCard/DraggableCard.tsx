import React from 'react';
import {DraxView} from 'react-native-drax';
import VisaCard, {VisaCardProps} from '../../atoms/VisaCard/VisaCard';
import {layouts} from '../../../constants/styles';
import {visaCardsData} from '../../../Faker/Faker';
import styles from './DraggableCard.style';
import {View} from 'react-native';

interface DraggableCardProps {
  item: VisaCardProps;
  index: number;
}

const DraggableCard = ({item, index}: DraggableCardProps) => {
  return (
    <View
      style={[
        layouts.mx.sm,
        layouts.allCentered,
        index === 0 ? layouts.ms.xl : null,
        index === visaCardsData.length - 1 ? layouts.me.xl : null,
        styles.draggableCardContainer,
      ]}>
      <DraxView dragPayload={index} key={index} />
      <VisaCard {...item} />
    </View>
  );
};

export default DraggableCard;
