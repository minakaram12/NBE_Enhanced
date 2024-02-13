/* eslint-disable prettier/prettier */
import React, {ReactNode} from 'react';
import {ViewStyle, TouchableOpacity, Text} from 'react-native';
import styles from './MainBtn.style';
interface MainBtnProps {
  children?: JSX.Element | ReactNode;
  style?: ViewStyle | Array<ViewStyle>;
  onPress?: () => void;
}
const MainBtn = ({children, style}: MainBtnProps) => {
  return (
    <TouchableOpacity style={[styles.card]}>
    <Text style={[styles.cardContainer, style]}>{children}</Text> 
   </TouchableOpacity>
  );
};

export default MainBtn;
