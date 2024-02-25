import React from 'react';
import {ScrollView, View} from 'react-native';
import layouts from '../../../constants/styles/layouts';
import Header from '../../molecules/Header';
import PasswordForm from '../../molecules/Signup/PasswordForm';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';


const Password = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const backHandler = () => {
    //console.log('Go to Login Screen');
    navigation.goBack();
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
      <PasswordForm navigation={navigation}/>
    </ScrollView>
  );
};

export default Password;
