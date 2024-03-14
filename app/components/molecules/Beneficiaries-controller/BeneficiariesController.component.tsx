import React from 'react';
import {Text, View, ViewStyle} from 'react-native';
import Toggler from '../../atoms/Toggler/Toogler.component';
import AddButton from '../../atoms/AddIcon/Addbtn';
import {layouts} from '../../../constants/styles';
import styles from './BeneficiariesController.style';

interface BeneficiariesControllerProps {
  style?: ViewStyle;
  changeViewSetter: (setter: any) => void;
  cards: [];
}

function BeneficiariesController({
  style,
  changeViewSetter,
  cards,
}: BeneficiariesControllerProps) {
  return (
    <View
      style={[layouts.row, layouts.justifyBetween, styles.outerView, style]}>
      <View style={layouts.xCentered}>
        <Text style={styles.textStyle}>Beneficiaries</Text>
      </View>
      <View style={[layouts.row]}>
        <Toggler changeViewSetter={changeViewSetter} />
        <AddButton cards={cards} />
      </View>
    </View>
  );
}

export default BeneficiariesController;
