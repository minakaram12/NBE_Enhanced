import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {DraxView} from 'react-native-drax';
import VisaCard from '../../atoms/VisaCard/VisaCard';
import {visaCards} from '../../../Faker/VisaCards';
import {layouts} from '../../../constants/styles';
import styles from './ReceivingZone.style';

const ReceivingZone = ({receiverCardIndex, setReceiverCardIndex}) => {
  return (
    <DraxView
      renderContent={({viewState}) => {
        return (
          <View style={[styles.cardBox, layouts.allCentered]}>
            {receiverCardIndex !== -1 ? (
              <Pressable onPress={() => setReceiverCardIndex(-1)}>
                <VisaCard {...visaCards[receiverCardIndex]} />
              </Pressable>
            ) : (
              <Text style={styles.cardBoxText}>
                Touch & hold a card then drag it to this box
              </Text>
            )}
          </View>
        );
      }}
      onReceiveDragEnter={({dragged}) => {
        console.log(`hello ${dragged.payload}`);
      }}
      onReceiveDragExit={({dragged}) => {
        console.log(`goodbye ${dragged.payload}`);
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
