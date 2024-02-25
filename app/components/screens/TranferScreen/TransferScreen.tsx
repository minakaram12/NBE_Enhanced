import React, {useState} from 'react';
import {View, Image, Text} from 'react-native';
import styles from './TransferScreen.style';
import {layouts, shadows} from '../../../constants/styles';

//atoms
import DropdownMenu from '../../atoms/DropdownMenu/DropdownMenu';
import MainBtn from '../../atoms/MainBtn/MainBtn';
import IconCard from '../../atoms/IconCard/IconCard';
import InputField from '../../atoms/InputField/InputField';
import AppModal from '../../atoms/AppModal/AppModal';
import TopNavigator from '../../molecules/TopNavigator/TopNavigator';
import {Formik, FormikProps} from 'formik';
import {transferFrom, transferTo, transferType} from '../../../Faker';

//svg
import BackSvg from '../../../assets/svgs/BackSvg';
import {transferValidationSchema} from '../../../validations/Transfer';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

interface FormValues {
  amount: string;
  reason: string;
}

const TransferScreen = () => {
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const [selectedTransferFrom, setSelectedTransferFrom] = useState('');
  const [showFailedModal, setShowFailedModal] = useState(false);
  const [selectedType, setSelectedType] = useState('');
  const [selectedTransferTo, setSelectedTransferTo] = useState('');
  
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const textChangeHandler = (
    formikProps: FormikProps<FormValues>,
    fieldName: string,
    value: string,
  ) => {
    formikProps.setFieldValue(fieldName, value);
    // Check if all dropdowns have selected values and both amount and reason fields are not empty
    setSubmitDisabled(
   selectedType === '' ||
      selectedTransferFrom === '' ||
      selectedTransferTo === '' ||
      formikProps.values.amount === '' ||
      formikProps.values.reason === '' ||
      // Check if any input field becomes empty again
      (fieldName === 'amount' && value === '') ||
      (fieldName === 'reason' && value === ''),
  );
    
  };

  const handleTransferFromChange = (optionValue: string) => {
    setSelectedTransferFrom(optionValue);
  };

  const handleFormChange = (values: FormValues) => {
    // Check if all dropdowns have selected values and both amount and reason fields are not empty
    const hasValues =
      selectedType !== '' &&
      selectedTransferFrom !== '' &&
      selectedTransferTo !== '' &&
      values.amount !== '' &&
      values.reason !== '' &&
      transferValidationSchema.isValidSync({amount: parseFloat(values.amount)});
    setSubmitDisabled(!hasValues);

    // Extract amount from selectedTransferFrom
    const amountFromTransferFrom = parseFloat(
      selectedTransferFrom.split('$')[1].replace(',', ''),
    );
    const enteredAmount = parseFloat(values.amount);

    // Compare entered amount with amount from transferFrom
    if (enteredAmount > amountFromTransferFrom || enteredAmount <= 0) {
      setShowFailedModal(true);
    } else {
      // go to otp
     // console.log('go to otp screen');
     navigation.navigate('OtpScreen');
    }
  };
  const HandleGoBack=()=>{
    navigation.goBack();
   };

  return (
    <View style={styles.container}>
      <TopNavigator
       onPressLeft={HandleGoBack}
        contentLeft={<IconCard icon={BackSvg} Type="back" />}
        contentRight={
          <Image
            source={require('../../../assets/images/GreenLogo.png')}></Image>
        }
      />

      <Text style={styles.headrStyle}>Transfer</Text>
      <View style={[layouts.px.md, layouts.py.md]}>
        <DropdownMenu
          options={transferType}
          title="Type of transfer"
          onSelectOption={(value: string) => setSelectedType(value)}
        />
        <DropdownMenu
          options={transferFrom}
          title="Transfer from "
          onSelectOption={handleTransferFromChange}
        />
        <DropdownMenu
          options={transferTo}
          title="Transfer to"
          onSelectOption={(value: string) => setSelectedTransferTo(value)}
        />
      </View>
      <Formik
        initialValues={{
          amount: '',
          reason: '',
        }}
        
        validationSchema={transferValidationSchema}
        onSubmit={values => {
          handleFormChange(values);
          console.log(values);
        }}>
        {formikProps => (
          <View>
            <View style={[layouts.px.xl, layouts.py.md]}>
              <InputField
                name="amount"
                label="Amount to transfer"
                placeholder="$"
                outerContainerStyle={[layouts.mb.xl]}
                innerContainerStyle={shadows()}
                keyboardType="numeric"
                onChangeText={text => {
                  formikProps.setFieldValue('amount', text);
                  textChangeHandler(formikProps, 'amount', text);
                }}
              />
              <InputField
                name="reason"
                placeholder="Reason of transfer"
                outerContainerStyle={[layouts.mb.xxl]}
                innerContainerStyle={shadows()}
                onChangeText={text => {
                  formikProps.setFieldValue('reason', text);
                  textChangeHandler(formikProps, 'reason', text);
                }}
              />
            </View>
            <View style={[layouts.row, layouts.allCentered, layouts.px.xl]}>
              <AppModal
                modalVisible={showFailedModal}
                setModalVisible={setShowFailedModal}
                errorTitle={true}
                titleText="Invalid Transfer"
                descriptionText={
                  'The entered amount is greater than the available  account amount or equal to zero'
                }
                confirmButtonText={'Try Again'}
                onConfirmPress={() => setShowFailedModal(false)}
                cancelButtonText="Cancel"
                onCancelPress={() => setShowFailedModal(false)}
              />
              <MainBtn
                buttonText="Transfer"
                onPress={formikProps.handleSubmit}
                buttonStyle={[layouts.flexed, layouts.px.md]}
                disabled={submitDisabled}
              />
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default TransferScreen;
