import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet} from 'react-native';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import IconFontAwsome from 'react-native-vector-icons/FontAwesome';
import IconUserFriends from 'react-native-vector-icons/FontAwesome5';
import IconAtm from 'react-native-vector-icons/EvilIcons';
import IconCreditCard from 'react-native-vector-icons/AntDesign';
import IconFingerPrint from 'react-native-vector-icons/FontAwesome5';

import {layouts} from '../../../constants/styles';
import {px} from '../../../constants/styles/layouts';
import BeneficiaryStack from '../BeneficiaryStack/BeneficiaryStack';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import AirPayScreen from '../../screens/AirPay/AirPayScreen';
import CashTransfer from '../../screens/TranferScreen/CashTransfer';
import Map from '../../screens/Map/Map';
import {theme} from '../../../theme/theme';

function BottomTabsNavigation() {
  const Tab = createBottomTabNavigator();
  const addHomeIcon = {
    tabBarIcon: ({focused, size, color}) => {
      return (
        <View style={focused ? styles.focusedStyle : styles.blurredStyle}>
          <Icon name="home" color={color} size={size} />
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
    tabBarIcon: ({focused, size, color}) => {
      return (
        <View style={focused ? styles.focusedStyle : styles.blurredStyle}>
          <IconFontAwsome name="paper-plane-o" color={color} size={size} />
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
    tabBarIcon: ({focused, size, color}) => {
      return (
        <View style={focused ? styles.focusedStyle : styles.blurredStyle}>
          <IconUserFriends name="user-friends" color={color} size={size} />
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
    tabBarIcon: ({focused, size, color}) => {
      return (
        <View style={focused ? styles.focusedStyle : styles.blurredStyle}>
          <IconAtm name="location" color={color} size={size * 1.5} />
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
    tabBarIcon: ({focused, size, color}) => {
      return (
        <View style={focused ? styles.focusedStyle : styles.blurredStyle}>
          <IconFingerPrint
            name="fingerprint"
            style={styles.smallIcon}
            color={color}
          />
          <View style={layouts.xCentered}>
            <IconCreditCard name="creditcard" color={color} size={size} />
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

const styles = StyleSheet.create({
  focusedStyle: {
    backgroundColor: '#007236',
    width: px(70),
    height: px(70),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: px(15),
    marginVertical: px(10),
  },
  blurredStyle: {
    backgroundColor: theme?.blurredTabColor,
    width: px(70),
    height: px(70),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: px(15),
    marginVertical: px(10),
  },
  NavigatorActiveTextStyle: {
    fontFamily: 'Roboto',
    fontSize: px(10),
    lineHeight: px(16),
    textAlign: 'center',
    color: '#F7F7F7',
  },
  NavigatorInActiveTextStyle: {
    fontFamily: 'Roboto',

    fontSize: px(10),
    lineHeight: px(16),
    textAlign: 'center',
    color: '#B7B7B7',
  },
  smallIcon: {
    width: px(11),
    height: px(11),
    position: 'absolute',
    top: px(4),
    left: px(4),
  },
});
