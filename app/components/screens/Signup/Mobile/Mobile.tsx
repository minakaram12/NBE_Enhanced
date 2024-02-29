import React from 'react';
import {ScrollView, View} from 'react-native';
import layouts from '../../../../constants/styles/layouts';
import Header from '../../../molecules/Header';
import MobileForm from '../../../molecules/Signup/MobileForm/MobileForm';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {theme} from '../../../../theme/theme';

const Mobile = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const backHandler = () => {
    // console.log('Go to Login Screen');
    navigation.goBack();
  };

  return (
    <ScrollView
      contentContainerStyle={[
        layouts.flexGrow,
        layouts.px.xl,
        layouts.py.xl,
        {backgroundColor: theme.BackgroundMenu},
      ]}>
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
