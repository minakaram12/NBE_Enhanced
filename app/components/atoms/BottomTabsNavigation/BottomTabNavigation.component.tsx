import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, View} from 'react-native';

import {layouts} from '../../../constants/styles';
import BeneficiaryStack from '../BeneficiaryStack/BeneficiaryStack';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import AirPayScreen from '../../screens/AirPay/AirPayScreen';
import CashTransfer from '../../screens/TranferScreen/CashTransfer';
import Map from '../../screens/Map/Map';
import {theme} from '../../../theme/theme';
import {styles} from './BottomNavStyles';
import AirPaySvg from '../../../assets/svgs/AirPaySvg';
import FingerPrintSvg from '../../../assets/svgs/FingerPrintSvg';
import {px} from '../../../constants/styles/layouts';
import BeneficiariesSvg from '../../../assets/svgs/BeneficiariesSvg';
import ATMsSvg from '../../../assets/svgs/ATMsSvg';
import TransferSvg from '../../../assets/svgs/TransferSvg';
import HomeSvg from '../../../assets/svgs/HomeSvg';

interface BottomTabBarIconProps {
  focused: boolean;
  size: number;
  color: string;
}

function BottomTabsNavigation() {
  const Tab = createBottomTabNavigator();
  const addHomeIcon = {
    // eslint-disable-next-line react/no-unstable-nested-components
    tabBarIcon: ({focused, color}: BottomTabBarIconProps) => {
      return (
        <View style={focused ? styles.focusedStyle : styles.blurredStyle}>
          <HomeSvg fill={color} />
          <Text
            style={
              focused
                ? styles.NavigatorActiveTextStyle
                : styles.NavigatorInActiveTextStyle
            }>
            Home
          </Text>
        </View>
      );
    },
  };

  const addTransfer = {
    // eslint-disable-next-line react/no-unstable-nested-components
    tabBarIcon: ({focused, color}: BottomTabBarIconProps) => {
      return (
        <View style={focused ? styles.focusedStyle : styles.blurredStyle}>
          <TransferSvg fill={color} />
          <Text
            style={
              focused
                ? styles.NavigatorActiveTextStyle
                : styles.NavigatorInActiveTextStyle
            }>
            Transfer
          </Text>
        </View>
      );
    },
  };

  const addBeneficiariesIcon = {
    // eslint-disable-next-line react/no-unstable-nested-components
    tabBarIcon: ({focused, color}: BottomTabBarIconProps) => {
      return (
        <View style={focused ? styles.focusedStyle : styles.blurredStyle}>
          <BeneficiariesSvg fill={color} />
          <Text
            style={
              focused
                ? styles.NavigatorActiveTextStyle
                : styles.NavigatorInActiveTextStyle
            }>
            Beneficiaries
          </Text>
        </View>
      );
    },
  };

  const addAtms = {
    // eslint-disable-next-line react/no-unstable-nested-components
    tabBarIcon: ({focused, color}: BottomTabBarIconProps) => {
      return (
        <View style={focused ? styles.focusedStyle : styles.blurredStyle}>
          <ATMsSvg fill={color} />
          <Text
            style={
              focused
                ? styles.NavigatorActiveTextStyle
                : styles.NavigatorInActiveTextStyle
            }>
            ATMs
          </Text>
        </View>
      );
    },
  };

  const addAirPlay = {
    // eslint-disable-next-line react/no-unstable-nested-components
    tabBarIcon: ({focused, color}: BottomTabBarIconProps) => {
      return (
        <View style={focused ? styles.focusedStyle : styles.blurredStyle}>
          <View
            style={[
              layouts.allCentered,
              styles.smallIcon,
              focused ? styles.focusedFingerIcon : null,
            ]}>
            <FingerPrintSvg width={px(11)} height={px(11)} fill={color} />
          </View>
          <View style={layouts.xCentered}>
            <AirPaySvg fill={color} />
            <Text
              style={
                focused
                  ? styles.NavigatorActiveTextStyle
                  : styles.NavigatorInActiveTextStyle
              }>
              Air Pay
            </Text>
          </View>
        </View>
      );
    },
  };

  const globalStyle = {
    tabBarActiveBackgroundColor: theme?.BackgroundNav,
    tabBarInactiveBackgroundColor: theme?.BackgroundNav,
    tabBarActiveTintColor: '#ffffff',
    tabBarInactiveTintColor: '#B7B7B7',

    tabBarStyle: {
      height: 84,
    },
    tabBarItemStyle: {backgroundColor: theme.BottomTab},
    tabBarShowLabel: false,
    headerShown: false,
  };

  return (
    <Tab.Navigator initialRouteName="HomeScreen" screenOptions={globalStyle}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{...addHomeIcon}}
      />
      <Tab.Screen
        name="CashTransfer"
        component={CashTransfer}
        options={{...addTransfer}}
      />
      <Tab.Screen
        name="Beneficiary"
        component={BeneficiaryStack}
        options={{...addBeneficiariesIcon}}
      />
      <Tab.Screen name="Screen4" component={Map} options={{...addAtms}} />
      <Tab.Screen
        name="Screen5"
        component={AirPayScreen}
        options={{...addAirPlay}}
      />
    </Tab.Navigator>
  );
}

export default BottomTabsNavigation;
