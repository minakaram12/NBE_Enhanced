import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {layouts} from '../../../constants/styles';
import {useState} from 'react';
import ColViewSvg from '../../../assets/svgs/ColViewSvg';
import RowView from '../../../assets/svgs/RowViewSvg';

interface TogglerProps {
  activeColor?: string;
  inActiveColor?: string;
  backgroundColor?: string;
  changeViewSetter: React.Dispatch<React.SetStateAction<boolean>>;
}
function Toggler({
  activeColor = '#007236',
  inActiveColor = '#B7B7B7',
  backgroundColor = '#ffffff',
  changeViewSetter,
}: TogglerProps) {
  const [colView, setColView] = useState(true);
  const toggleView = () => {
    setColView(prevState => {
      return !prevState;
    });
    changeViewSetter((prevState: any) => {
      return !prevState;
    });
  };
  return (
    <View
      style={[
        styles.container,
        layouts.yCentered,
        layouts.xCentered,
        layouts.mx.lg,
      ]}>
      <Pressable
        style={[
          layouts.yCentered,
          layouts.xCentered,
          styles.container,
          layouts.row,
          {backgroundColor: backgroundColor},
          layouts.justifyBetween,
        ]}
        onPress={toggleView}>
        <View
          style={[
            layouts.yCentered,
            layouts.xCentered,
            {backgroundColor: colView ? activeColor : backgroundColor},
            styles.iconStyle,
          ]}>
          <ColViewSvg color={colView ? 'white' : inActiveColor} />
        </View>
        <View
          style={[
            layouts.yCentered,
            layouts.xCentered,
            {backgroundColor: !colView ? activeColor : backgroundColor},
            styles.iconStyle,
          ]}>
          <RowView color={colView ? inActiveColor : 'white'} />
        </View>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  iconStyle: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  container: {
    width: 61,
    borderRadius: 15,
    height: 30,
    padding: 5,
  },
});

export default Toggler;
