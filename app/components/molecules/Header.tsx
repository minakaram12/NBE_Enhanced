import React from 'react';
import {View, StyleSheet, Image, Pressable} from 'react-native';
import layouts, {px} from '../../constants/styles/layouts';
import BackSvg from '../../assets/svgs/BackSvg';
import IconCard from '../atoms/IconCard/IconCard';
import BellSvg from '../../assets/svgs/BellSvg';
import shadows from './../../constants/styles/shadows';
import ArSvg from '../../assets/svgs/ArSvg';

interface HeaderProps {
  back: boolean;
  addBeneficiar: boolean;
  login: boolean;
  onBack(): void;
}
const Header = (props: HeaderProps) => {
  const backHandler = () => {
    props.onBack();
  };

  const beneficiarHandler = () => {
    console.log('Go to Add Beneficiaries Screen');
  };

  const langHandler = () => {
    console.log('Change Language');
  };

  let logo = require('../../assets/images/GreenLogo.png');
  if (!props.back) logo = require('../../assets/images/WhiteLogo.png');

  return (
    <View
      style={[
        layouts.row,
        layouts.justifyBetween,
        {height: 60, alignItems: 'center'},
      ]}>
      <View style={[layouts.row]}>
        {props.login && (
          <Pressable onPress={langHandler}>
            <IconCard
              icon={ArSvg}
              containerstyle={[
                {backgroundColor: '#FFFFFF', borderRadius: 10},
                shadows(),
              ]}
            />
          </Pressable>
        )}
        {props.back && (
          <View>
            <Pressable onPress={backHandler}>
              <IconCard
                icon={BackSvg}
                containerstyle={{backgroundColor: '#007236', borderRadius: 10}}
              />
            </Pressable>
          </View>
        )}
        {props.addBeneficiar && (
          <Pressable onPress={beneficiarHandler}>
            <IconCard
              icon={BellSvg}
              containerstyle={{backgroundColor: '#E5E5E5', borderRadius: 10}}
            />
          </Pressable>
        )}
      </View>
      <View style={[layouts.row, layouts.justifyEnd]}>
        <Image source={logo} resizeMode="contain" />
      </View>
    </View>
  );
};

export default Header;
