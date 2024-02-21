import {StyleSheet, Text, View} from 'react-native';
import Toggler from '../../atoms/Toggler/Toogler.component';
import AddButton from '../../atoms/AddIcon/Addbtn';
import {layouts} from '../../../constants/styles';

function BeneficiariesController({style,changeViewSetter}) {
  return (
    <View style={[layouts.row, layouts.justifyBetween, {backgroundColor:'#F1F3FB'},style]}>
      <View>
        <Text style={styles.textStyle}>Beneficiaries</Text>
      </View>
      <View style={[layouts.row]}>
        <Toggler changeViewSetter={changeViewSetter}/>
        <AddButton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {fontFamily: 'Roboto', fontWeight: '700', fontSize: 20,lineHeight:24,color:'#1C2437'},
});
export default BeneficiariesController;