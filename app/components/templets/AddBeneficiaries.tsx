import {Image, StyleSheet, View} from 'react-native';
import {layouts} from '../../constants/styles';
import InputField from '../atoms/InputField/InputField';
import DropdownMenu from '../atoms/DropdownMenu/DropdownMenu';
import MainBtn from '../atoms/MainBtn/MainBtn';
import { useState } from 'react';

function AddBeneficiaries() {
    const [info,setInfo] = useState({});
//handlers
const handleFirstNameChange = (value) => {
    setInfo((prevInfo) => ({ ...prevInfo, firstName: value }));
  };

  const handleLastNameChange = (value) => {
    setInfo((prevInfo) => ({ ...prevInfo, lastName: value }));
  };

  const handleDropdownChange = (selectedValue) => {
    setInfo((prevInfo) => ({ ...prevInfo, dropdownValue: selectedValue }));
  };

  const handleAccountNumberChange = (value) => {
    setInfo((prevInfo) => ({ ...prevInfo, accountNumber: value }));
  };

  const handlePhoneNumberChange = (value) => {
    setInfo((prevInfo) => ({ ...prevInfo, phoneNumber: value }));
  };

  const handleEmailChange = (value) => {
    setInfo((prevInfo) => ({ ...prevInfo, email: value }));
  };
//
  return (
    <View style={layouts.yCentered}>
      <View style={[styles.cameraView, layouts.yCentered]}>
        <Image
          source={require('../../assets/images/cam.png')}
          style={styles.camImg}
        />
      </View>
      <View style={[layouts.row, layouts.justifyBetween]}>
        <InputField label="First Name" onChangeText={handleFirstNameChange}  />
        <InputField label="Last Name" onChangeText={handleLastNameChange} />
      </View>
      <DropdownMenu  />
      <InputField label="Account number" onChangeText={handleAccountNumberChange} />
      <InputField label="Phone number" onChangeText={handlePhoneNumberChange}/>
      <InputField label="Email" onChangeText={handleEmailChange} />
      <MainBtn buttonText="Add Beneficiar"/>
    </View>
  );
}
const styles = StyleSheet.create({
  cameraView: {width: 138, height: 138, borderRadius: 30},
  camImg: {width: 40, height: 40},
});
export default AddBeneficiaries;
