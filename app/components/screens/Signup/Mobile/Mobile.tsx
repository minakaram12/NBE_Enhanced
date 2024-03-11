import React from 'react';
import {ScrollView} from 'react-native';
import layouts from '../../../../constants/styles/layouts';
import Header from '../../../molecules/Header/Header';
import MobileForm from '../../../molecules/Signup/MobileForm/MobileForm';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import styles from './Mobile.style';

const Mobile = () => {
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
      <MobileForm />
    </ScrollView>
  );
};

export default Mobile;
