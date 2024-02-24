import {StyleSheet, Text, View} from 'react-native';
import Toggler from '../../atoms/Toggler/Toogler.component';
import AddButton from '../../atoms/AddIcon/Addbtn';
import {layouts} from '../../../constants/styles';
import { useTheme } from '../../../ContextAPI/ThemeContext';

function BeneficiariesController({style,changeViewSetter,addBeneficiary}) {
  return (
    <View style={[layouts.row, layouts.justifyBetween, {backgroundColor:useTheme().isDarkMode.BackgroundMenu},style]}>
      <View style={layouts.xCentered}>
        <Text style={{color: useTheme().isDarkMode.itemColor}}>Beneficiaries</Text>
      </View>
      <View style={[layouts.row]}>
        <Toggler changeViewSetter={changeViewSetter}/>
        <AddButton addBeneficiary={addBeneficiary} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {fontFamily: 'Roboto', fontWeight: '700', fontSize: 20,lineHeight:24,color:'#1C2437'},
});
export default BeneficiariesController;
