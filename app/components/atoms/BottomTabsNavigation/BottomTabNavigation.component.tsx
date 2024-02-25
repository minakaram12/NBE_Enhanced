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
import Beneficiary from '../../screens/Benificiary/Benificiary';
import BenefiiciaryListScreen from '../../screens/BeneficiaryListScreen/BeneficiaryListScreen';
import DrawerMenu from '../../screens/DrawerNavigator/DrawerMenu';
import BeneficiaryStack from '../BeneficiaryStack/BeneficiaryStack';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import TransferScreen from '../../screens/TranferScreen/TransferScreen';

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
              Air play
            </Text>
          </View>
        </View>
      );
    },
  };

  const globalStyle = {
    tabBarActiveBackgroundColor: '#ffffff',
    tabBarInactiveBackgroundColor: '#ffffff',
    tabBarActiveTintColor: '#ffffff',
    tabBarInactiveTintColor: '#B7B7B7',
    tabBarStyle: {
      height: 80,
      backgroundColor: 'blue',
    },
    tabBarShowLabel: false,
    headerShown: false,
  };

  const tabBarStyle = {
    style: {backgroundColor: '#e4e4e4'},
  };
  return (
    <Tab.Navigator initialRouteName="screen1" screenOptions={globalStyle}>
      <Tab.Screen
        name="Screen1"
        component={HomeScreen}
        options={{...addHomeIcon}}
      />
      <Tab.Screen
        name="Screen2"
        component={TransferScreen}
        options={{...addTransfer}}
      />
      <Tab.Screen
        name="Beneficiary"
        component={BeneficiaryStack}
        options={{...addBeneficiariesIcon}}
      />
      <Tab.Screen name="Screen4" component={Screen4} options={{...addAtms}} />
      <Tab.Screen
        name="Screen5"
        component={Screen5}
        options={{...addAirPlay}}
      />
    </Tab.Navigator>
  );
}

export default BottomTabsNavigation;

function Screen1() {
  return <Text>screen 1</Text>;
}
function Screen2() {
  return <Text>screen 2</Text>;
}
function Screen3() {
  return <Text>screen 3</Text>;
}
function Screen4() {
  return <Text>screen 4</Text>;
}
function Screen5() {
  return <Text>screen 5</Text>;
}

const styles = StyleSheet.create({
  container: {
    // Common styles for the container
    // You can set default background color, etc.
  },
  focusedStyle: {
    backgroundColor: '#007236',
    width: px(70),
    height: px(70),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: px(15),
    marginVertical: px(10),
    // Other styles for focused state
  },
  blurredStyle: {
    backgroundColor: '#F1F3FB',
    width: px(70),
    height: px(70),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: px(15),
    marginVertical: px(10),
    // Other styles for blurred state
  },
  NavigatorActiveTextStyle: {
    fontFamily: 'Roboto',
    fontSize: px(10),
    lineHeight: px(11.72),
    textAlign: 'center',

    color: '#F7F7F7',
  },
  NavigatorInActiveTextStyle: {
    fontFamily: 'Roboto',

    fontSize: px(10),
    lineHeight: px(11.72),
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
