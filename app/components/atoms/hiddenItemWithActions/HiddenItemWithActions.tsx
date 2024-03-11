import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {layouts} from '../../../constants/styles';
import {RowMapType} from '../../molecules/SwipeableCardList/SwipeableCardList';
import {styles} from './hiddenItemStyles';
interface HiddenItemProps {
  onDelete: () => void;
  onEdit: () => void;
  data?: any;
  rowMap?: RowMapType;
}
const HiddenItemWithActions = ({onDelete, onEdit}: HiddenItemProps) => {
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
