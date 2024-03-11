import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
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
        <View style={[layouts.relative, layouts.allCentered]}>
          <View style={[layouts.absolute]}>
            <VisaCard {...visaCardsData[receiverCardIndex]} />
          </View>
          <Pressable
            onPress={() => setReceiverCardIndex(-1)}
            style={[layouts.absolute, styles.closeIconContainer]}>
            <Image
              source={require('../../../assets/images/close.png')}
              style={[styles.closeIcon]}
            />
          </Pressable>
        </View>
      ) : (
        <Text style={styles.cardBoxText}>
          Touch & hold a card then drag it to this box
        </Text>
      )}
    </View>
  );
};

export default ReceivingZone;
