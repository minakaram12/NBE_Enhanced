import React from 'react';
import Logo from '../../../assets/svgs/Logo';
import {View} from 'react-native';
import {layouts} from '../../../constants/styles';

import styles from './SplashScreen.style';
import NamedLogo from '../../../assets/svgs/NamedLogo';

const SplashScreen = () => {
  return (
    <View style={[layouts.flexed, layouts.allCentered, styles.container]}>
      <View style={[layouts.flexed, layouts.allCentered]}>
        <Logo width={119} height={136} />
      </View>
      <NamedLogo width={130} height={40} style={[layouts.my.xxl]} />
    </View>
  );
};

export default SplashScreen;
