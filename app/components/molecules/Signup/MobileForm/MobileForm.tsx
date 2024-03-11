import React from 'react';
import {View, Text} from 'react-native';
import layouts from '../../../../constants/styles/layouts';
import InputField from '../../../atoms/InputField/InputField';
import MainBtn from '../../../atoms/MainBtn/MainBtn';
import {Formik} from 'formik';
import styles from './MobileForm.style';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faMobile} from '@fortawesome/free-solid-svg-icons/faMobile';
import {setPhoneNumber} from '../../../../storage/mmkv';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {mobileSchema} from '../../../../validations/mobile';

library.add(faMobile);

const MobileForm = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

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
          <View style={[layouts.flexed, layouts.my.xl]}>
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
