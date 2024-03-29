import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import AddSvg from '../../../assets/svgs/AddSvg';
import {layouts} from '../../../constants/styles';
import {useNavigation} from '@react-navigation/native';

function AddButton({cards = []}) {
  const navigation = useNavigation();
  const addnewBenefHandler = ()=>{
    navigation.navigate('AddBeneficiaries', {cards});
  }
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
const styles = StyleSheet.create({
  container: {
    width: 63,
    height: 30,
    backgroundColor: 'white',
    borderRadius: 15,
  },
});
export default AddButton;
