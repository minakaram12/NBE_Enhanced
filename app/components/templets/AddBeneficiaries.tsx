import {Image, StyleSheet, View} from 'react-native';
import {layouts} from '../../constants/styles';
import InputField from '../atoms/InputField/InputField';
import DropdownMenu from '../atoms/DropdownMenu/DropdownMenu';
import MainBtn from '../atoms/MainBtn/MainBtn';
import {Formik} from 'formik';

import * as yup from 'yup';

const validationsSchema = yup.object().shape({
  firstName:yup.string(),
  lastName: yup.string(),
  accountNumber: yup.string(),
  phoneNumber: yup.string(),
  email: yup.string(),
});

function AddBeneficiaries() {
  return (
    <View
      style={[

        layouts.fullHeight,
        {backgroundColor: 'red'},
      ]}>
      <Formik
      validationSchema={validationsSchema}
        initialValues={{
          firstName: '',
          lastName: '',
          accountNumber: '',
          phoneNumber: '',
          email: '',
        }}
        onSubmit={values => {
          // Handle form submission with the values
          console.log(values);
        }}>
        {formikProps => (
          <View
            style={[
              layouts.flexed,
            //   layouts.yCentered,
            //   layouts.fullWidth,
              {backgroundColor: 'orange'},
            ]}>
            <View style={layouts.yCentered}>
                <View
                  style={[
                    styles.cameraView,
                    layouts.allCentered,
                    {backgroundColor: 'red'},
                
                  ]}>
                  <Image
                    source={require('../../assets/images/cam.png')}
                    style={styles.camImg}
                  />
                </View>
            </View>
            <View
              style={[
                layouts.row,
                {backgroundColor: 'green'},
              ]}>
              <InputField label="First Name" name="firstName" outerContainerStyle={[layouts.flexed,layouts.me.sm]}/>
              <InputField label="Last Name" name="lastName"  outerContainerStyle={[layouts.flexed,layouts.ms.sm]}/>
            </View>
            <DropdownMenu
              onChange={formikProps.handleChange('dropdownValue')}
              title='fewhvf'
            />
            <InputField label="Account number" name="accountNumber" />
            <InputField label="Phone number" name="phoneNumber" />
            <InputField label="Email" name="email" />
            <MainBtn
              buttonText="Add Beneficiar"
              onPress={formikProps.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  cameraView: {width: 138, height: 138, borderRadius: 30},
  camImg: {width: 40, height: 40},
});

export default AddBeneficiaries;
