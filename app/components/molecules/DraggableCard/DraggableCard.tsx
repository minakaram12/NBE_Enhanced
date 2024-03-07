import React from 'react';
import {DraxView} from 'react-native-drax';
import VisaCard from '../../atoms/VisaCard/VisaCard';
import {layouts} from '../../../constants/styles';
import {visaCardsData} from '../../../Faker/Faker';
import styles from './DraggableCard.style';
import {View} from 'react-native';

interface DraggableCardProps {
  item: any;
  index: number;
  setReceiverCardIndex: Function;
}

const DraggableCard = ({
  item,
  index,
  setReceiverCardIndex,
}: DraggableCardProps) => {
  return (
    <View
      style={[
        layouts.mx.sm,
        layouts.allCentered,
        index === 0 ? layouts.ms.xl : null,
        index === visaCardsData.length - 1 ? layouts.me.xl : null,
        styles.draggableCardContainer,
        layouts.relative,
      ]}>
      <DraxView
        style={[layouts.absolute]}
        dragPayload={index}
        key={index}
        onDragStart={() => {
          setReceiverCardIndex(-1);
        }}
      />
      <VisaCard {...item} />
    </View>
  );
};

export default DraggableCard;
