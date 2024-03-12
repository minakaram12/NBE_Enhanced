import React from 'react';
import {Text, View} from 'react-native';
import Toggler from '../../atoms/Toggler/Toogler.component';
import AddButton from '../../atoms/AddIcon/Addbtn';
import {layouts} from '../../../constants/styles';
import {styles} from './BenefControlerstyles';

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

export default BeneficiariesController;
