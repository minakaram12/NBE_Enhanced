import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {layouts} from '../../../constants/styles';
import styles from './ReceivingZone.style';
import {visaCardsData} from '../../../Faker/Faker';
import VisaCard from '../../atoms/VisaCard/VisaCard';

interface ReceivingZoneProps {
  receiverCardIndex: number;
  setReceiverCardIndex: (index: number) => void;
}

const ReceivingZone = ({
  receiverCardIndex,
  setReceiverCardIndex,
}: ReceivingZoneProps) => {
  return (
    <View style={[styles.cardBox, layouts.allCentered]}>
      {receiverCardIndex !== -1 ? (
        <Pressable onPress={() => setReceiverCardIndex(-1)}>
          <VisaCard {...visaCardsData[receiverCardIndex]} />
        </Pressable>
      ) : (
        <Text style={styles.cardBoxText}>
          Touch & hold a card then drag it to this box
        </Text>
      )}
    </View>
  );
};

export default ReceivingZone;
