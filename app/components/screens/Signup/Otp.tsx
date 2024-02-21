import React from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import layouts from '../../../constants/styles/layouts';
import Header from '../../molecules/Header';
import { px } from '../../../constants/styles/layouts';

const Otp = () => {
  const backHandler = () => {
    console.log('Go to Mobile Screen');
  };

  return (
    <ScrollView
      contentContainerStyle={[layouts.flexGrow, layouts.mx.xl, layouts.my.xl]}>
      <Header
        back={true}
        addBeneficiar={false}
        login={false}
        onBack={backHandler}
      />
      <View style={[layouts.mt.xl]}>
        <Text style={[styles.title, layouts.my.sm]}>Verification</Text>
        <Text style={styles.caption}>
          Enter 5 digit code we sent to {'+20 101 131 5412'}
        </Text>
      </View>
      {/* <OtpForm /> */}
    </ScrollView>
  );
};

export default Otp;

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
