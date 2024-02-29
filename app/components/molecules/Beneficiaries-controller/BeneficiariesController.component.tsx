import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Toggler from '../../atoms/Toggler/Toogler.component';
import AddButton from '../../atoms/AddIcon/Addbtn';
import {layouts} from '../../../constants/styles';
import {theme} from '../../../theme/theme';

function BeneficiariesController({
  style,
  changeViewSetter,
  addBeneficiary,
  cards,
}) {
  return (
    <View
      style={[layouts.row, layouts.justifyBetween, styles.outerView, style]}>
      <View style={layouts.xCentered}>
        <Text style={styles.textStyle}>Beneficiaries</Text>
      </View>
      <View style={[layouts.row]}>
        <Toggler changeViewSetter={changeViewSetter} />
        <AddButton addBeneficiary={addBeneficiary} cards={cards} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerView:{
    backgroundColor: theme?.BackgroundMenu,
  },
  textStyle: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 24,
    color: theme.itemColor,
  },
});
export default BeneficiariesController;
