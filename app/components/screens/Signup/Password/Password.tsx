import React from 'react';
import {ScrollView, View} from 'react-native';
import layouts from '../../../../constants/styles/layouts';
import Header from '../../../molecules/Header';
import PasswordForm from '../../../molecules/Signup/PasswordForm/PasswordForm';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {theme} from '../../../../theme/theme';

const Password = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const backHandler = () => {
    //console.log('Go to Login Screen');
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
        login={false}
        onBack={backHandler}
      />
      <PasswordForm navigation={navigation} />
    </ScrollView>
  );
};

export default Password;
