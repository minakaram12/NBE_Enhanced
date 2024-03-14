import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import Sidebar from '../../molecules/SidebarMenu/SidebarMenu';
import IconCard from '../../atoms/IconCard/IconCard';
import layouts from '../../../constants/styles/layouts';
import LogoutSvg from '../../../assets/svgs/LogoutSvg';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {logout} from '../../../storage/mmkv';
import styles from '../DrawerNavigator/MenuContent.style';
import NamedLogo from '../../../assets/svgs/NamedLogo';
import Logo from '../../../assets/svgs/Logo';
import VerticalDotsSvg from '../../../assets/svgs/VerticalDotsSvg';

interface userInfo {
  userName: string;
  phoneNumber: string;
}
const MenuContent: React.FC<userInfo> = ({userName, phoneNumber}) => {
  const navigate = useNavigation<StackNavigationProp<ParamListBase>>();
  const LogOut = () => {
    logout();
    navigate.navigate('loginScreen');
  };

  return (
    <View style={styles.MainComponent}>
      {/* AR button and logo */}
      <View>
        <View style={[layouts.row, layouts.my.xl]}>
          <View style={[layouts.flexed, layouts.row, layouts.ms.xl]}>
            <NamedLogo
              width={130}
              height={40}
              containerStyle={[layouts.me.md]}
            />
            <Logo width={34} height={40} />
          </View>

          <Pressable>
            <View style={[styles.languageButtonContainer]}>
              <Text style={[styles.languageButtonText]}>AR</Text>
            </View>
          </Pressable>
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

        <View style={[styles.userCard]}>
          <Image
            source={require('../../../assets/images/userImg.png')}
            style={styles.image}
          />
          <View style={styles.userinfo}>
            <Text style={styles.userText}>{userName}</Text>
            <Text style={styles.userPhone}>{phoneNumber}</Text>
          </View>
          <View style={styles.dots}>
            <VerticalDotsSvg />
          </View>
        </View>
      </View>
    </View>
  );
};

export default MenuContent;
