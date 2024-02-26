import {View, Text, StyleSheet, Pressable} from 'react-native';
import {layouts} from '../../../constants/styles';
import { useTheme } from '../../../ContextAPI/ThemeContext';

const HiddenItemWithActions = ({onDelete, onEdit}) => {
  return (
    <View
      style={[
        styles.container,
        layouts.yCentered,
        layouts.row,
        layouts.justifyBetween,
        layouts.my.lg,
      ]}>
      <Pressable onPress={onEdit}>
        <View
          style={[
           {backgroundColor: useTheme().isDarkMode.name === 'Dark' ? '#007236' : 'yellow'},
            layouts.fullHeight,
            layouts.xCentered,
            styles.buttonsWidth,
            styles.curved,
            layouts.yCentered,
          ]}>
          <Text style={   {color: useTheme().isDarkMode.name === 'Dark' ? '#ffffff' : '#000000'}}>Edit</Text>
        </View>
      </Pressable>
      <Pressable onPress={onDelete}>
        <View
          style={[
            {backgroundColor: useTheme().isDarkMode.name === 'Dark' ? '#CC0000' : 'yellow'},
            layouts.fullHeight,
            layouts.xCentered,
            styles.buttonsWidth,
            styles.curved,
            layouts.yCentered,
          ]}>
          <Text style={   {color: useTheme().isDarkMode.name === 'Dark' ? '#ffffff' : '#000000'}}>delete</Text>
        </View>
      </Pressable>
    </View>
  );
};
export default HiddenItemWithActions;

const styles = StyleSheet.create({
  bg: {backgroundColor: 'red'},
  // yellow: { backgroundColor: useTheme().isDarkMode.name === 'Dark' ? '#00FF00' : 'yellow' },
  orange: {backgroundColor: 'orange'},
  container: {height: 89, borderRadius: 18, overflow: 'hidden'},
  buttonsWidth: {width: 100},
  curved: {borderRadius: 18},
});
