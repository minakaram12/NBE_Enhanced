import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import layouts, {px} from '../../../constants/styles/layouts';
import InputField from '../../atoms/InputField/InputField';
import ValidationList from '../../atoms/Validation/ValidationList';
import {Formik, FormikProps} from 'formik';
import * as Yup from 'yup';
import MainBtn from '../../atoms/MainBtn/MainBtn';
import {validationList} from '../../../Faker';

interface FormValues {
  password: string;
  confirmPassword: string;
}

const PasswordForm = () => {
  const [validationListState, setValidationListState] =
    React.useState(validationList);

  const passwordSchema = Yup.object().shape({
    password: Yup.string()
      .min(8)
      .max(50)
      .required()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      ),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), undefined])
      .required(),
  });

  const passwordChangeHandler = (
    formikProps: FormikProps<FormValues>,
    fieldName: string,
    value: string,
  ) => {
    formikProps.setFieldValue(fieldName, value);
    const validations = [
      {regex: /^(?=.*[a-z])/, text: 'Lower case letter'},
      {regex: /.{8,}/, text: 'Minimum 8 characters'},
      {regex: /^(?=.*[@$!%*?&])/, text: 'Special character'},
      {regex: /^(?=.*[A-Z])/, text: 'Upper case letter'},
      {regex: /^(?=.*\d)/, text: 'Number'},
    ];

    const updatedValidationListState = validations.map(validation => {
      const match = value.match(validation.regex);
      return {
        text: validation.text,
        state: match ? true : false,
      };
    });

    setValidationListState(updatedValidationListState);
  };

  return (
    <Formik
      initialValues={{password: '', confirmPassword: ''}}
      validationSchema={passwordSchema}
      onSubmit={values => console.log(values)}>
      {formikProps => (
        <View style={[layouts.flexed]}>
          <View style={[layouts.flexed]}>
            <View style={[layouts.mt.xl]}>
              <Text style={[styles.title, layouts.my.sm]}>
                Set your password
              </Text>
              <Text style={styles.caption}>
                Enter a strong password for your online banking account
              </Text>
            </View>
            <View style={[layouts.flexed, layouts.my.lg]}>
              <InputField
                placeholder="Write your password here"
                label="Password"
                isPassword
                value={formikProps.values.password}
                onChangeText={value => {
                  passwordChangeHandler(formikProps, 'password', value);
                }}
                outerContainerStyle={layouts.mt.lg}
              />
              <InputField
                placeholder="Re-Write your password here"
                label="Confirm Password"
                isPassword
                value={formikProps.values.confirmPassword}
                onChangeText={formikProps.handleChange('confirmPassword')}
                outerContainerStyle={layouts.my.xl}
              />
              <ValidationList validationList={validationListState} />
            </View>
          </View>
          <View>
            <MainBtn
              buttonText="Submit"
              onPress={formikProps.handleSubmit}
              disabled={!(formikProps.isValid && formikProps.dirty)}
            />
          </View>
        </View>
      )}
    </Formik>
  );
};

export default PasswordForm;

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
