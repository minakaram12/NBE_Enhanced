import {View, Text, StyleSheet, Pressable} from 'react-native';
import {layouts} from '../../../constants/styles';

const HiddenItemWithActions = ({onDelete, onEdit}) => {
  return (
    <View
      style={[
        styles.container,
        layouts.yCentered,
        layouts.row,
        layouts.justifyBetween,
      ]}>
      <Pressable onPress={onEdit}>
        <View
          style={[
            styles.yellow,
            layouts.fullHeight,
            layouts.xCentered,
            styles.buttonsWidth,
            styles.curved,
            layouts.yCentered,
          ]}>
          <Text>hidden</Text>
        </View>
      </Pressable>
      <Pressable onPress={onDelete}>
        <View
          style={[
            styles.orange,
            layouts.fullHeight,
            layouts.xCentered,
            styles.buttonsWidth,
            styles.curved,
            layouts.yCentered,
          ]}>
          <Text>delete</Text>
        </View>
      </Pressable>
    </View>
  );
};
export default HiddenItemWithActions;
const styles = StyleSheet.create({
  bg: {backgroundColor: 'red'},
  yellow: {backgroundColor: 'yellow'},
  orange: {backgroundColor: 'orange'},
  container: {height: 89, borderRadius: 18, overflow: 'hidden'},
  buttonsWidth: {width: 100},
  curved: {borderRadius: 18},
});
