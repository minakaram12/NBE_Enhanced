import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Pressable,
} from 'react-native';
import Sidebar from '../../molecules/SidebarMenu/SidebarMenu';
import IconCard from '../../atoms/IconCard/IconCard';
import { px } from '../../../constants/styles/layouts';
import LogoutSvg from '../../../assets/svgs/LogoutSvg';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { logout } from '../../../storage/mmkv';
import { theme } from '../../../theme/theme';

interface userInfo {
    userName: string;
    phoneNumber: string;
}
const MenuContent: React.FC<userInfo> = ({ userName, phoneNumber }) => {
    const logo = require('../../../assets/images/logoGreen.png');
    const AR = require('../../../assets/images/AR.png');
    const navigate = useNavigation<StackNavigationProp<ParamListBase>>();
    const LogOut = () => {
        logout();
        navigate.navigate('loginScreen')
    }
    return (
        <View >
            {/* AR button and logo */}
            <View style={styles.header}>
                <Image source={logo}></Image>
                <Image source={AR}></Image>
            </View>
            {/* sidebar menu */}
            <Sidebar />
            {/* LOGOOUT AND BOTTOM NAV */}
            <View style={styles.outerContainer}>
                <Pressable onPress={LogOut}>
                    <View style={styles.container}>
                        <IconCard
                            icon={LogoutSvg}
                            containerstyle={styles.icon}>
                        </IconCard>
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

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: px(8),
        marginBottom: px(5),
        marginLeft: px(10),
    },
    outerContainer: {
        marginTop: px(40),

    },
    container: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: px(5),
    },
    textStyle: {
        fontSize: px(18),
        flexDirection: "row",
        fontFamily: "Roboto-bold",
        color: theme?.RedCMYK,
        fontWeight: "bold",


    },
    icon: {
        backgroundColor: theme?.DunRose,
        width: px(30),
        height: px(30),
        marginRight: px(10),
    },
    userCard: {
        width: px(296),
        height: px(89),
        borderRadius: px(29),
        backgroundColor: theme?.white,
        padding: px(10),
        marginLeft: px(10),
        marginVertical: px(10),
        flexDirection: "row",
        alignItems: "center",

    },
    image: {
        width: px(50),
        height: px(50),
    },
    userinfo: {
        flexDirection: "column",
        paddingLeft: px(10),


    },
    userText: {
        color: theme?.black,
        fontSize: px(18),
        fontWeight: "500",

    },
    userPhone: {
        fontSize: px(14),

    },
    dots: {
        marginLeft: px(120),
    }

});

export default MenuContent;
