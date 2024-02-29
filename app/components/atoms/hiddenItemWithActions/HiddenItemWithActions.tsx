import React from 'react';
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
            useTheme().isDarkMode.name === 'Dark'
              ? {backgroundColor: '#007236'}
              : {backgroundColor: '#007236'},
            layouts.fullHeight,
            layouts.xCentered,
            styles.buttonsWidth,
            styles.curved,
            layouts.yCentered,
          ]}>
          <Text
            style={
              useTheme().isDarkMode.name === 'Dark'
                ? {color: '#ffffff'}
                : {backgroundColor: '#000000'}
            }>
            Edit
          </Text>
        </View>
      </Pressable>
      <Pressable onPress={onDelete}>
        <View
          style={[
            useTheme().isDarkMode.name === 'Dark'
              ? {backgroundColor: '#7a1712'}
              : {backgroundColor: '#7a1712'},
            layouts.fullHeight,
            layouts.xCentered,
            styles.buttonsWidth,
            styles.curved,
            layouts.yCentered,
          ]}>
          <Text
            style={
              useTheme().isDarkMode.name === 'Dark'
                ? {color: '#ffffff'}
                : {backgroundColor: '#000000'}
            }>
            Delete
          </Text>
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
});
