import React from 'react';
import {ScrollView, View} from 'react-native';
import layouts from '../../../constants/styles/layouts';
import Header from '../../molecules/Header';
import MobileForm from '../../molecules/Signup/MobileForm';


const Mobile = () => {
  const backHandler = () => {
    console.log('Go to Login Screen');
  };

  return (
    <ScrollView
      contentContainerStyle={[layouts.flexGrow, layouts.mx.xl, layouts.my.xl]}>
      <Header
        back={true}
        addBeneficiar={false}
        login={false}
        onBack={backHandler}
      />
      <MobileForm />
    </ScrollView>
  );
};

export default Mobile;
