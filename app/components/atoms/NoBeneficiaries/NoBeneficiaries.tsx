import React from 'react';
import {Image, View} from 'react-native';
import {Pressable} from 'react-native';
import {layouts} from '../../../constants/styles';
import {useNavigation} from '@react-navigation/native';
import {Beneficiary} from '../../molecules/SwipeableCardList/SwipeableCardListFaker';
import {styles} from './NoBenef';
function NoBeneficiary() {
  const navigation = useNavigation();
  const cards: Array<Beneficiary> = [];
  const navigateToAddScreen = () => {
    navigation.navigate('AddBeneficiaries', {cards});
  };
  return (
    <View style={[styles.topMargin, layouts.yCentered, layouts.fullHeight]}>
      <Pressable onPress={navigateToAddScreen}>
        <Image
          source={require('../../../assets/images/noBeneficiaries.png')}
          style={styles.noBenfImg}
        />
      </Pressable>
    </View>
  );
}
export default NoBeneficiary;
