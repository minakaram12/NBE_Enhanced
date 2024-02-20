import React from 'react';
import {View, StyleSheet, Image, Pressable} from 'react-native';
import layouts, {px} from '../../constants/styles/layouts';
import BackSvg from '../../assets/svgs/BackSvg';
import IconCard from '../atoms/IconCard/IconCard';
import BellSvg from '../../assets/svgs/BellSvg';
import shadows from './../../constants/styles/shadows';
import ArSvg from '../../assets/svgs/ArSvg';
import WhiteLogoSvg from '../../assets/svgs/WhiteLogoSvg';
import GreenLogoSvg from '../../assets/svgs/GreenLogoSvg';

interface HeaderProps {
  back?: boolean;
  addBeneficiar?: boolean;
  login?: boolean;
  onBack?(): void;
}
const Header = ({
  back = false,
  addBeneficiar = false,
  login = true,
  onBack,
}: HeaderProps) => {
  const backHandler = () => {
    if (onBack) onBack();
  };

  const beneficiarHandler = () => {
    console.log('Go to Add Beneficiaries Screen');
  };

  const langHandler = () => {
    console.log('Change Language');
  };

  return (
    <View
      style={[
        layouts.row,
        layouts.justifyBetween,
        {height: 60, alignItems: 'center'},
      ]}>
      <View style={[layouts.row]}>
        {login && (
          <Pressable onPress={langHandler}>
            <IconCard
              icon={ArSvg}
              containerstyle={[
                {
                  backgroundColor: '#FFFFFF',
                  borderRadius: 10,
                  marginLeft: px(0),
                },
                shadows(),
              ]}
            />
          </Pressable>
        )}
        {back && (
          <View>
            <Pressable onPress={backHandler}>
              <IconCard
                icon={BackSvg}
                containerstyle={{
                  backgroundColor: '#007236',
                  borderRadius: 10,
                  marginLeft: px(0),
                }}
              />
            </Pressable>
          </View>
        )}
        {addBeneficiar && (
          <Pressable onPress={beneficiarHandler}>
            <IconCard
              icon={BellSvg}
              containerstyle={{
                backgroundColor: '#E5E5E5',
                borderRadius: 10,
                marginLeft: px(0),
              }}
            />
          </Pressable>
        )}
      </View>
      <View style={[layouts.row, layouts.justifyEnd]}>
        {login ? <WhiteLogoSvg /> : <GreenLogoSvg />}
      </View>
    </View>
  );
};

export default Header;
