import React from 'react';
import {View, Text, Pressable} from 'react-native';
import AddSvg from '../../../assets/svgs/AddSvg';
import {layouts} from '../../../constants/styles';
import {useNavigation} from '@react-navigation/native';

import styles from './Addbtn.style';

function AddButton({cards = []}) {
  const navigation = useNavigation();
  const addnewBenefHandler = () => {
    navigation.navigate('AddBeneficiaries', {cards});
  };
  return (
    <Pressable onPress={addnewBenefHandler}>
      <View style={[styles.container, layouts.row, layouts.justifyAround]}>
        <View style={[layouts.xCentered, layouts.yCentered]}>
          <AddSvg />
        </View>
        <View style={[layouts.xCentered, layouts.yCentered]}>
          <Text>Add</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default AddButton;
