import React, {useState} from 'react';
import {Image, View, ScrollView, TouchableOpacity, Text} from 'react-native';
import {layouts} from '../../constants/styles';
import InputField from '../atoms/InputField/InputField';
import DropdownMenu from '../atoms/DropdownMenu/DropdownMenu';
import MainBtn from '../atoms/MainBtn/MainBtn';
import {Formik} from 'formik';

import * as yup from 'yup';
import {transferType} from '../../Faker/Faker';
import {useNavigation} from '@react-navigation/native';
import {launchCamera} from 'react-native-image-picker';
import {theme} from '../../theme/theme';
import {styles} from './AddBeneficiaryStyle';

const validationsSchema = yup.object().shape({
  firstName: yup.string().required('first name is required'),
  lastName: yup.string().required('last name is required'),
  accountNumber: yup
    .string()
    .matches(/^[0-9]{10,14}$/, 'Invalid account number')
    .required('account number is required')
    .min(10, 'minimum 10 numbers')
    .max(14, "you can't exceed 14 numbers"),
  phoneNumber: yup
    .string()
    .matches(/^[0-9]{10,14}$/, 'Invalid phone number')
    .required('phone number is required'),
  email: yup
    .string()
    .email('invalid email address')
    .required('Email is required'),
});

interface AddBeneficiariesProps {
  route: {
    params: {
      cards: any[];
      edit: boolean;
      item?: any;
      prevIndex?: number | undefined;
    };
  };
}

function AddBeneficiaries({route}: AddBeneficiariesProps) {
  const [imageUri, setImageUri] = useState<string | null | undefined>(null);
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
          const uri = response.assets?.[0]?.uri;
          if (uri) {
            setImageUri(uri);
          }
        }
      },
    );
  };

  const {cards, edit} = route.params;
  const {item, prevIndex} = route.params;
  const navigation = useNavigation();

  return (
    <View style={[layouts.fullHeight, styles.container]}>
      <Formik
        validationSchema={validationsSchema}
        initialValues={
          edit
            ? {
                firstName: item.name.split(' ')[0] || '',
                lastName: item.name.split(' ')[1] || '',
                accountNumber: item.accountNumber,
                phoneNumber: item.mobileNumber || '',
                email: item.email || '',
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
            navigation.navigate('BenefiiciaryListScreen', {newCards});
          } else {
            const newCards = [...cards];
            const index = prevIndex !== undefined ? prevIndex : 0;

            newCards[index] = {
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
                    {backgroundColor: theme?.InputBackgroundColor},
                  ]}>
                  {imageUri ? (
                    <Image source={{uri: imageUri}} style={styles.image} />
                  ) : (
                    <Image
                      source={require('../../assets/images/cam.png')}
                      style={styles.camImg}
                    />
                  )}
                </View>
              </TouchableOpacity>
              <View style={[layouts.row, styles.SiblingsInput]}>
                <InputField
                  label="First Name"
                  name="firstName"
                  showErrors={false}
                  outerContainerStyle={[
                    layouts.flexed,
                    layouts.me.sm,
                    styles.inputField,
                  ]}
                />
                <InputField
                  label="Last Name"
                  name="lastName"
                  showErrors={false}
                  outerContainerStyle={[
                    layouts.flexed,
                    layouts.ms.sm,
                    styles.inputField,
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
                outerContainerStyle={[layouts.my.lg, styles.inputField]}
              />
              <InputField
                label="Phone number"
                name="phoneNumber"
                showErrors={false}
                outerContainerStyle={[layouts.my.lg, styles.inputField]}
              />
              <InputField
                label="Email"
                name="email"
                showErrors={false}
                outerContainerStyle={[layouts.my.lg, styles.inputField]}
              />
              {Object.keys(formikProps.errors).length > 0 && (
                <Text style={styles.generalError}>
                  {Object.entries(formikProps.errors).map(
                    ([_, errorMessage], index) => (
                      <React.Fragment key={index}>
                        {typeof errorMessage === 'string' && (
                          <>
                            {errorMessage}
                            {index <
                              Object.keys(formikProps.errors).length - 1 &&
                              ', '}
                          </>
                        )}
                      </React.Fragment>
                    ),
                  )}
                </Text>
              )}

              {edit ? (
                <MainBtn
                  buttonStyle={styles.buttonStyle}
                  buttonText="Edit Beneficiar"
                  onPress={formikProps.handleSubmit}
                />
              ) : (
                <MainBtn
                  buttonStyle={styles.buttonStyle}
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

export default AddBeneficiaries;
