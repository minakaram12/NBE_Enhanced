import React from 'react';
import {ScrollView} from 'react-native';
import layouts from '../../../../constants/styles/layouts';
import Header from '../../../molecules/Header/Header';
import PasswordForm from '../../../molecules/Signup/PasswordForm/PasswordForm';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import styles from './Password.style';

const Password = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const backHandler = () => {
    navigation.goBack();
  };

  return (
    <ScrollView
      contentContainerStyle={[
        layouts.flexGrow,
        layouts.px.xl,
        layouts.py.xl,
        styles.container,
      ]}>
      <Header back={true} login={false} onBack={backHandler} />
      <PasswordForm />
    </ScrollView>
  );
};

export default Password;
