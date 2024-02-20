import {View, Text, StyleSheet, Pressable} from 'react-native';
import AddSvg from '../../../assets/svgs/AddSvg';
import {layouts} from '../../../constants/styles';

function AddButton() {
  return (
    <Pressable>
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
  container: {width: 63, backgroundColor: 'red', borderRadius: 15},
});
export default AddButton;
