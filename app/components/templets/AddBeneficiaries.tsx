import React from 'react';
import {Image, StyleSheet, View, ScrollView} from 'react-native';
import {layouts} from '../../constants/styles';
import InputField from '../atoms/InputField/InputField';
import DropdownMenu from '../atoms/DropdownMenu/DropdownMenu';
import MainBtn from '../atoms/MainBtn/MainBtn';
import {Formik} from 'formik';

import * as yup from 'yup';
import {transferType} from '../../Faker';
import {useNavigation} from '@react-navigation/native';

const validationsSchema = yup.object().shape({
  firstName: yup.string(),
  lastName: yup.string(),
  accountNumber: yup.string(),
  phoneNumber: yup.string(),
  email: yup.string(),
});
//

function AddBeneficiaries({route}) {
  const {item, edit, cardsSetter, prevIndex} = route.params;
  if (edit) {
    const addNewBeneficiary = route.params;
  }
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
              }
            : {
                firstName: '',
                lastName: '',
                accountNumber: '',
                phoneNumber: '',
                email: '',
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
              {backgroundColor: '#F1F3FB'},
            ]}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
              <View style={layouts.yCentered}>
                <View
                  style={[
                    styles.cameraView,
                    layouts.allCentered,
                    {backgroundColor: 'white'},
                  ]}>
                  <Image
                    source={require('../../assets/images/cam.png')}
                    style={styles.camImg}
                  />
                </View>
              </View>
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
                onChange={formikProps.handleChange('dropdownValue')}
                title="Bank Branch"
                options={transferType}
                style={[]}
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
