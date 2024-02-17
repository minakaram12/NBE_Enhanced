import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import layouts, {px} from '../../../constants/styles/layouts';
import InputField from '../../atoms/InputField/InputField';
import MainBtn from '../../atoms/MainBtn/MainBtn';
const Mobile = () => {
  return (
    <View
      style={[
        layouts.flexed,
        layouts.xCentered,
        layouts.mx.xl,
        layouts.justifyAround,
      ]}>
      <View>
        <View style={[layouts.mb.lg]}>
          <Text style={[styles.title, layouts.my.sm]}>Mobile number</Text>
          <Text style={styles.caption}>
            Enter the mobile number registred in the bank
          </Text>
        </View>
        <View style={[layouts.mt.lg]}>
          <InputField
            name="mobileNumber"
            placeholder="Write your number here"
            label="Mobile number"
            isPassword={false}
          />
        </View>
      </View>
      <View>
        <MainBtn buttonText="Next" onPress={() => console.log('1')} />
        <Text style={[styles.text, layouts.mt.xl]}>
          By signing up, you agree to our{' '}
          <Text style={styles.highlight}>Terms of Service</Text> and acknowledge
          that you have read our{' '}
          <Text style={styles.highlight}>Privacy Policy</Text>.
        </Text>
      </View>
    </View>
  );
};

export default Mobile;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Roboto-Bold',
    fontSize: px(20),
    color: '#1C2437',
    lineHeight: px(23.44),
  },
  caption: {
    fontFamily: 'Roboto-Regular',
    fontSize: px(16),
    color: '#B7B7B7',
    lineHeight: px(18.75),
  },
  highlight: {
    fontFamily: 'Roboto-Bold',
    fontSize: px(14),
    color: '#1C2437',
    lineHeight: px(16.41),
    textAlign: 'center',
  },
  text: {
    fontFamily: 'Roboto-Regular',
    fontSize: px(14),
    color: '#808080',
    lineHeight: px(16.41),
    textAlign: 'center',
  },
});
