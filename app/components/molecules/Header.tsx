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
  bell?: boolean;
  lang?: boolean;
  login?: boolean;
  onBack?(): void;
}
const Header = ({
  back = false,
  bell = false,
  lang = false,
  login = true,
  onBack,
}: HeaderProps) => {
  const backHandler = () => {
    if (onBack) onBack();
  };

  const bellHandler = () => {
    console.log('Go to Notifications');
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
        {lang && (
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
        {bell && (
          <Pressable onPress={bellHandler}>
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
