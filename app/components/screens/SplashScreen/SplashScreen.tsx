import React, {useRef, useEffect} from 'react';
import {View, Animated, Easing, StatusBar} from 'react-native';
import {layouts} from '../../../constants/styles';
import styles from './SplashScreen.style';
import Logo from '../../../assets/svgs/Logo';
import NamedLogo from '../../../assets/svgs/NamedLogo';
import {
  getPassword,
  getRememberMe,
  getUsername,
  logout,
} from '../../../storage/mmkv';

const SplashScreen = ({navigation}: {navigation: any}) => {
  const bounceValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(bounceValue, {
      toValue: 1.3,
      duration: 1000,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    }).start();

    const timer = setTimeout(() => {
      if (getRememberMe() && getUsername() && getPassword()) {
        navigation.replace('home');
      } else {
        navigation.replace('loginScreen');
      }
    }, 1550);

    return () => clearTimeout(timer);
  }, [bounceValue, navigation]);

  return (
    <>
      <StatusBar hidden />
      <View style={[layouts.flexed, layouts.allCentered, styles.container]}>
        <View style={[layouts.flexed, layouts.allCentered]}>
          <Animated.View style={{transform: [{scale: bounceValue}]}}>
            <Logo width={119} height={136} />
          </Animated.View>
        </View>
        <NamedLogo width={130} height={40} style={[layouts.my.xxl]} />
      </View>
    </>
  );
};

export default SplashScreen;
