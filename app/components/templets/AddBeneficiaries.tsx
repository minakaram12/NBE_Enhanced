import React, { useState } from 'react';
import {Image, StyleSheet, View, ScrollView, TouchableOpacity} from 'react-native';
import {layouts} from '../../constants/styles';
import InputField from '../atoms/InputField/InputField';
import DropdownMenu from '../atoms/DropdownMenu/DropdownMenu';
import MainBtn from '../atoms/MainBtn/MainBtn';
import {Formik} from 'formik';

import * as yup from 'yup';
import {transferType} from '../../Faker';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '../../ContextAPI/ThemeContext';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const validationsSchema = yup.object().shape({
  firstName: yup.string().required('first name is required'),
  lastName: yup.string().required('last name is required'),
  accountNumber: yup
    .string()
    .required('account number is required')
    .min(10, 'minimum 10 numbers')
    .max(14, "you can't exeed 14 number"),
  phoneNumber: yup.string().required('phone number is required'),
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
      (response) => {
        if (response.didCancel) {
          console.log('User cancelled camera');
        } else if (response.errorCode) {
          console.error('Camera Error:', response.errorCode, response.errorMessage);
        } else {
          setImageUri(response.assets[0].uri);
          console.log('====================================');
          console.log("the uri is "+ response.assets[0].uri);
          console.log('====================================');
          // Use the response.uri as the image source
        }
      }
    );
  };

  const {item, edit, cardsSetter, prevIndex} = route.params;

  const addNewBeneficiary = route.params;
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
                accountNumber: '', // You may need to update this based on the actual property in your `item`
                phoneNumber: item.mobileNumber || '',
                email: '', // You may need to update this based on the actual property in your `item`
                branch: '',
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
            addNewBeneficiary({
              name: values.firstName + ' ' + values.lastName,
              mobileNumber: values.phoneNumber,
              balance: '999',
              image: require('../../assets/images/profimg.jpg'),
              color: '#ffffff',
            });
          } else {
            //aktb al code bta3 al add beneficiary

            cardsSetter(prevCards => {
              const newArray = [...prevCards];
              newArray[prevIndex] = {
                name: values.firstName + ' ' + values.lastName,
                mobileNumber: values.phoneNumber,
                balance: '999',
                image: require('../../assets/images/profimg.jpg'),
                color: '#ffffff',
              };
              return newArray;
            });
          }
          navigation.goBack();

          console.log(values);
        }}>
        {formikProps => (
          <View
            style={[
              layouts.flexed,
              //   layouts.yCentered,
              //   layouts.fullWidth,
              {backgroundColor: useTheme().isDarkMode.BackgroundMenu},
            ]}>
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
                      style={{ width: 138, height: 138, borderRadius: 30 }}
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
                  outerContainerStyle={[
                    layouts.flexed,
                    layouts.me.sm,
                    {height: 65, elevation: 15},
                  ]}
                />
                <InputField
                  label="Last Name"
                  name="lastName"
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
                onSelectOption={(value)=>formikProps.setFieldValue('branch',value)}
                style={[{marginTop:10,marginLeft:0,marginRight:0}]}
              />

              <InputField
                label="Account number"
                name="accountNumber"
                outerContainerStyle={[
                  layouts.my.lg,
                  {height: 65, elevation: 15},
                ]}
              />
              <InputField
                label="Phone number"
                name="phoneNumber"
                outerContainerStyle={[
                  layouts.my.lg,
                  {height: 65, elevation: 15},
                ]}
              />
              <InputField
                label="Email"
                name="email"
                outerContainerStyle={[
                  layouts.my.lg,
                  {height: 65, elevation: 15},
                ]}
              />
              <MainBtn
                buttonStyle={{marginTop: 30, height: 50}}
                buttonText="Add Beneficiar"
                onPress={formikProps.handleSubmit}
              />
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
});

export default AddBeneficiaries;
