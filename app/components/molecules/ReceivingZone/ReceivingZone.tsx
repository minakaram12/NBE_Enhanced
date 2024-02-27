import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {DraxView} from 'react-native-drax';
import {layouts} from '../../../constants/styles';
import styles from './ReceivingZone.style';
import {visaCardsData} from '../../../Faker';
import VisaCard from '../../atoms/VisaCard/VisaCard';

const ReceivingZone = ({receiverCardIndex, setReceiverCardIndex}) => {
  return (
    <DraxView
      renderContent={() => {
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
      }}
      onReceiveDragDrop={({dragged}) => {
        const {payload} = dragged;
        if (typeof payload === 'number') setReceiverCardIndex(payload);
        else setReceiverCardIndex(payload.index);
      }}
    />
  );
};

export default ReceivingZone;
