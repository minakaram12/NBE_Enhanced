import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {layouts} from '../../../constants/styles';
import {theme} from '../../../theme/theme';

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
            styles.leftBtn,
            layouts.fullHeight,
            layouts.xCentered,
            styles.buttonsWidth,
            styles.curved,
            layouts.yCentered,
          ]}>
          <Text style={styles.textStyle}>Edit</Text>
        </View>
      </Pressable>
      <Pressable onPress={onDelete}>
        <View
          style={[
            styles.righBtn,
            layouts.fullHeight,
            layouts.xCentered,
            styles.buttonsWidth,
            styles.curved,
            layouts.yCentered,
          ]}>
          <Text style={styles.textStyle}>Delete</Text>
        </View>
      </Pressable>
    </View>
  );
};
export default HiddenItemWithActions;
const styles = StyleSheet.create({
  container: {height: 89, borderRadius: 18, overflow: 'hidden'},
  buttonsWidth: {width: 100},
  curved: {borderRadius: 18},
  leftBtn: {backgroundColor: '#007236'},
  righBtn: {backgroundColor: '#7a1712'},
  textStyle: {color: theme.textColor},
});
