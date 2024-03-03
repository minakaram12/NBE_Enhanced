import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import {layouts} from '../../constants/styles';
import InputField from '../atoms/InputField/InputField';
import DropdownMenu from '../atoms/DropdownMenu/DropdownMenu';
import MainBtn from '../atoms/MainBtn/MainBtn';
import {Formik} from 'formik';

import * as yup from 'yup';
import {transferType} from '../../Faker';
import {useNavigation} from '@react-navigation/native';
import {launchCamera} from 'react-native-image-picker';
import {theme} from '../../theme/theme';

const validationsSchema = yup.object().shape({
  firstName: yup.string().required('first name is required'),
  lastName: yup.string().required('last name is required'),
  accountNumber: yup
    .string()
    .matches(/^[0-9]{10,14}$/, 'Invalid account number') // Regex for valid account numbers
    .required('account number is required')
    .min(10, 'minimum 10 numbers')
    .max(14, "you can't exceed 14 numbers"),
  phoneNumber: yup
    .string()
    .matches(/^[0-9]{10,14}$/, 'Invalid phone number') // Adjust the regex based on your requirements
    .required('phone number is required'),
  email: yup
    .string()
    .email('invalid email address')
    .required('Email is required'),
});
//

function AddBeneficiaries({route}) {
  const [imageUri, setImageUri] = useState(null);
  const openCamera = () => {
    launchCamera(
      {
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 200,
        maxWidth: 200,
      },
      response => {
        if (response.didCancel) {
          console.log('User cancelled camera');
        } else if (response.errorCode) {
          console.error(
            'Camera Error:',
            response.errorCode,
            response.errorMessage,
          );
        } else {
          setImageUri(response.assets[0].uri);
        }
      },
    );
  };

  const {cards, edit} = route.params;
  const {item, prevIndex} = route.params;
  const navigation = useNavigation();

  return (
    <View style={[layouts.fullHeight, {paddingBottom: 80}]}>
      <Formik
        validationSchema={validationsSchema}
        initialValues={
          edit
            ? {
                firstName: item.name.split(' ')[0] || '',
                lastName: item.name.split(' ')[1] || '',
                accountNumber: item.accountNumber, // You may need to update this based on the actual property in your `item`
                phoneNumber: item.mobileNumber || '',
                email: item.email || '', // You may need to update this based on the actual property in your `item`
                branch: item.branch || '',
              }
            : {
                firstName: '',
                lastName: '',
                accountNumber: '',
                phoneNumber: '',
                email: '',
                branch: '',
              }
        }
        onSubmit={values => {
          // Handle form submission with the values

          if (!edit) {
            const newCards = [
              ...cards,
              {
                name: values.firstName + ' ' + values.lastName,
                mobileNumber: values.phoneNumber,
                balance: '999',
                image: require('../../assets/images/profimg.jpg'),
                color: '#ffffff',
                key: values.firstName + ' ' + values.lastName,
                accountNumber: values.accountNumber,
                phoneNumber: values.phoneNumber,
                email: values.email,
              },
            ];
            console.log('====================================n');
            console.log(newCards);
            console.log('====================================n');
            navigation.navigate('BenefiiciaryListScreen', {newCards});
          } else {
            const newCards = [...cards];
            console.log(newCards);
            console.log(prevIndex);
            newCards[prevIndex] = {
              name: values.firstName + ' ' + values.lastName,
              mobileNumber: values.phoneNumber,
              balance: '999',
              image: require('../../assets/images/profimg.jpg'),
              color: '#ffffff',
              key: values.firstName + ' ' + values.lastName,
              accountNumber: values.accountNumber,
              phoneNumber: values.phoneNumber,
              email: values.email,
            };
            navigation.navigate('BenefiiciaryListScreen', {newCards});
          }
        }}>
        {formikProps => (
          <View style={[layouts.flexed, styles.formicContainer]}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
              <TouchableOpacity style={layouts.yCentered} onPress={openCamera}>
                <View
                  style={[
                    styles.cameraView,
                    layouts.allCentered,
                    {backgroundColor: 'white'},
                  ]}>
                  {imageUri ? (
                    <Image
                      source={{uri: imageUri}}
                      style={{width: 138, height: 138, borderRadius: 30}}
                    />
                  ) : (
                    <Image
                      source={require('../../assets/images/cam.png')}
                      style={styles.camImg}
                    />
                  )}
                </View>
              </TouchableOpacity>
              <View style={[layouts.row, {marginTop: 20}]}>
                <InputField
                  label="First Name"
                  name="firstName"
                  showErrors={false}
                  outerContainerStyle={[
                    layouts.flexed,
                    layouts.me.sm,
                    {height: 65, elevation: 15},
                  ]}
                />
                <InputField
                  label="Last Name"
                  name="lastName"
                  showErrors={false}
                  outerContainerStyle={[
                    layouts.flexed,
                    layouts.ms.sm,
                    {height: 65, elevation: 15},
                  ]}
                />
              </View>

              <DropdownMenu
                title="Bank Branch"
                options={transferType}
                onSelectOption={value =>
                  formikProps.setFieldValue('branch', value)
                }
                style={[styles.dropDownCustomStyle]}
              />

              <InputField
                label="Account number"
                name="accountNumber"
                showErrors={false}
                outerContainerStyle={[
                  layouts.my.lg,
                  {height: 65, elevation: 15},
                ]}
              />
              <InputField
                label="Phone number"
                name="phoneNumber"
                showErrors={false}
                outerContainerStyle={[
                  layouts.my.lg,
                  {height: 65, elevation: 15},
                ]}
              />
              <InputField
                label="Email"
                name="email"
                showErrors={false}
                outerContainerStyle={[
                  layouts.my.lg,
                  {height: 65, elevation: 15},
                ]}
              />
              {Object.keys(formikProps.errors).length > 0 && (
                <Text style={styles.generalError}>
                  check your inputs and try again
                </Text>
              )}
              {edit ? (
                <MainBtn
                  buttonStyle={{marginTop: 30, height: 50}}
                  buttonText="Edit Beneficiar"
                  onPress={formikProps.handleSubmit}
                />
              ) : (
                <MainBtn
                  buttonStyle={{marginTop: 30, height: 50}}
                  buttonText="Add Beneficiar"
                  onPress={formikProps.handleSubmit}
                />
              )}
            </ScrollView>
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  cameraView: {width: 138, height: 138, borderRadius: 30},
  camImg: {width: 40, height: 40},
  scrollViewContent: {flexGrow: 1},
  formicContainer: {backgroundColor: theme.BackgroundMenu},
  generalError: {
    color: 'red',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  dropDownCustomStyle: {
    marginTop: 15,
    marginLeft: 0,
    marginRight: 0,
    elevation: 0,
  },
});
export default AddBeneficiaries;
