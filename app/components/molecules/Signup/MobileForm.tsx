import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import layouts, {px} from '../../../constants/styles/layouts';
import InputField from '../../atoms/InputField/InputField';
import MainBtn from '../../atoms/MainBtn/MainBtn';
import {Formik, FormikProps} from 'formik';
import * as Yup from 'yup';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faMobile} from '@fortawesome/free-solid-svg-icons/faMobile';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import { setPhoneNumber } from '../../../storage/mmkv';
library.add(faMobile);

const MobileForm = ({navigation}) => {
  //todo: use react-native-phone-number-input
  // const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const mobileSchema = Yup.object().shape({
    mobileNumber: Yup.string().required().length(16),
  });

  return (
    <Formik
      initialValues={{mobileNumber: ''}}
      validationSchema={mobileSchema}
      onSubmit={values => {
        setPhoneNumber(values.mobileNumber);
        navigation.navigate('OtpScreen');
      }}>
      {formikProps => (
        <View style={[layouts.flexed]}>
          <View style={[layouts.mt.xl]}>
            <Text style={[styles.title, layouts.my.sm]}>Mobile number</Text>
            <Text style={styles.caption}>
              Enter the mobile number registred in the bank
            </Text>
          </View>
          <View style={[layouts.flexed, layouts.my.xxl]}>
            <InputField
              name="mobileNumber"
              placeholder="Enter your mobile number"
              label="Mobile number"
              leftIcon="mobile"
              isPassword={false}
              showErrors={false}
              mask="+20 999 999 9999"
              keyboardType="phone-pad"
            />
          </View>
          <View>
            <MainBtn
              buttonText="Next"
              onPress={formikProps.handleSubmit}
              disabled={!(formikProps.isValid && formikProps.dirty)}
            />
            <Text style={[styles.text, layouts.mt.xl]}>
              By signing up, you agree to our{' '}
              <Text style={styles.highlight}>Terms of Service</Text> and
              acknowledge that you have read our{' '}
              <Text style={styles.highlight}>Privacy Policy</Text>.
            </Text>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default MobileForm;

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
