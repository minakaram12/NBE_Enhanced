import React from 'react';
import {View, Pressable} from 'react-native';
import layouts from '../../../constants/styles/layouts';
import BackSvg from '../../../assets/svgs/BackSvg';
import IconCard from '../../atoms/IconCard/IconCard';
import BellSvg from '../../../assets/svgs/BellSvg';
import shadows from '../../../constants/styles/shadows';
import ArSvg from '../../../assets/svgs/ArSvg';
import WhiteLogoSvg from '../../../assets/svgs/WhiteLogoSvg';
import GreenLogoSvg from '../../../assets/svgs/GreenLogoSvg';
import styles from './Header.style';

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
        layouts.yCentered,
        styles.container,
      ]}>
      <View style={[layouts.row]}>
        {lang && (
          <Pressable onPress={langHandler}>
            <IconCard
              icon={ArSvg}
              containerstyle={[styles.langCard, shadows()]}
            />
          </Pressable>
        )}
        {back && (
          <View>
            <Pressable onPress={backHandler}>
              <IconCard icon={BackSvg} containerstyle={[styles.backCard]} />
            </Pressable>
          </View>
        )}
        {bell && (
          <Pressable onPress={bellHandler}>
            <IconCard icon={BellSvg} containerstyle={[styles.bellCard]} />
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
