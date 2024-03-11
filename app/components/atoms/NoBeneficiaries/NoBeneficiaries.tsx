import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Pressable} from 'react-native';
import {layouts} from '../../../constants/styles';
import {useNavigation} from '@react-navigation/native';

function NoBeneficiary() {
  const navigation = useNavigation();
  const cards = [];
  const navigateToAddScreen = () => {
    navigation.navigate('AddBeneficiaries', {cards});
  }; 
  return (
    <View style={[{marginTop: 140}, layouts.yCentered, layouts.fullHeight]}>
      <Pressable onPress={navigateToAddScreen}>
        <Image
          source={require('../../../assets/images/noBeneficiaries.png')}
          style={styles.noBenfImg}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({noBenfImg: {width: 240, height: 259}});
export default NoBeneficiary;
