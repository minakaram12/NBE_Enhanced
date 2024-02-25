import React from 'react';
import {ScrollView, View} from 'react-native';
import layouts from '../../../constants/styles/layouts';
import Header from '../../molecules/Header';
import MobileForm from '../../molecules/Signup/MobileForm';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';


const Mobile = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const backHandler = () => {
  // console.log('Go to Login Screen');
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
      <MobileForm navigation={navigation} />
    </ScrollView>
  );
};

export default Mobile;
