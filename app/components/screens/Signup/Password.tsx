import React from 'react';
import {View} from 'react-native';
import layouts from '../../../constants/styles/layouts';
import Header from '../../molecules/Header';
import PasswordForm from '../../molecules/Signup/PasswordForm';

const Password = () => {
  const backHandler = () => {
    console.log('Go to Login Screen');
  };

  return (
    <View style={[layouts.flexed, layouts.mx.xl, layouts.my.xl]}>
      <Header
        back={true}
        addBeneficiar={false}
        login={false}
        onBack={backHandler}
      />
      <PasswordForm />
    </View>
  );
};

export default Password;
