import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import layouts, {px} from '../../../constants/styles/layouts';
import InputField from '../../atoms/InputField/InputField';
import ValidationList from '../../atoms/Validation/ValidationList';
const Password = () => {
  return (
    <View style={[layouts.flexed, layouts.xCentered, layouts.mx.xl]}>
      <View style={[layouts.my.xl]}>
        <Text style={[styles.title, layouts.my.sm]}>Set your password</Text>
        <Text style={styles.caption}>
          Enter a strong password for your online banking account
        </Text>
      </View>
      <View style={[layouts.my.lg]}>
        <InputField placeholder="Write your password here" label="Password" />
        <InputField
          placeholder="Re-Write your password here"
          label="Confirm Password"
        />
      </View>
      <ValidationList />
    </View>
  );
};

export default Password;

const styles = StyleSheet.create({
  title: {
    fontSize: px(20),
    fontFamily: 'Roboto-Bold',
    color: '#1C2437',
    lineHeight: px(23.44),
  },
  caption: {
    fontSize: px(16),
    fontFamily: 'Roboto-Regular',
    color: '#B7B7B7',
    lineHeight: px(18.75),
  },
});
