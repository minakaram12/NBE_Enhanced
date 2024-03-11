import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import Sidebar from '../../molecules/SidebarMenu/SidebarMenu';
import IconCard from '../../atoms/IconCard/IconCard';
import layouts, { screenHeight} from '../../../constants/styles/layouts';
import LogoutSvg from '../../../assets/svgs/LogoutSvg';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {logout} from '../../../storage/mmkv';
import styles from '../DrawerNavigator/MenuContent.style';

interface userInfo {
  userName: string;
  phoneNumber: string;
}
const MenuContent: React.FC<userInfo> = ({userName, phoneNumber}) => {
  const logo = require('../../../assets/images/logoGreen.png');
  const AR = require('../../../assets/images/AR.png');
  const navigate = useNavigation<StackNavigationProp<ParamListBase>>();
  const LogOut = () => {
    logout();
    navigate.navigate('loginScreen');
  };

  return (
    <View style={styles.MainComponent}>
      {/* AR button and logo */}
      <View>
        <View style={styles.header}>
          <Image source={logo}></Image>
          <Image source={AR}></Image>
        </View>
        {/* sidebar menu */}
        <Sidebar />
      </View>

      {/* LOGOOUT AND BOTTOM NAV */}
      <View style={layouts.mt.xxxl}>
        <Pressable onPress={LogOut}>
          <View style={styles.container}>
            <IconCard icon={LogoutSvg} containerstyle={styles.icon}></IconCard>
            <Text style={styles.textStyle}>Log out </Text>
          </View>
        </Pressable>

        {/* <bottom navbar/> */}

        <View style={styles.userCard}>
          <Image
            source={require('../../../assets/images/userImg.png')}
            style={styles.image}></Image>
          <View style={styles.userinfo}>
            <Text style={styles.userText}>{userName}</Text>
            <Text style={styles.userPhone}>{phoneNumber}</Text>
          </View>
          <Image
            source={require('../../../assets/images/threeDots.png')}
            style={styles.dots}></Image>
        </View>
      </View>
    </View>
  );
};



export default MenuContent;
