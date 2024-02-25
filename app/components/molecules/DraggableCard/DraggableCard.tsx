import React from 'react';
import {DraxView} from 'react-native-drax';
import VisaCard from '../../atoms/VisaCard/VisaCard';
import {layouts} from '../../../constants/styles';
import {visaCards} from '../../../Faker/VisaCards';
import styles from './DraggableCard.style';

const DraggableCard = ({item, index, setReceiverCardIndex}) => {
  return (
    <DraxView
      style={[
        layouts.mx.sm,
        layouts.allCentered,
        index === 0 ? layouts.ms.xl : null,
        index === visaCards.length - 1 ? layouts.me.xl : null,
        styles.draggableCardContainer,
      ]}
      dragPayload={index}
      // longPressDelay={150}
      key={index}
      onDragStart={() => {
        setReceiverCardIndex(-1);
      }}
      onDragEnd={({dragged}) => {
        console.log(dragged.payload);
      }}>
      <VisaCard {...item} />
    </DraxView>
  );
};

export default DraggableCard;
