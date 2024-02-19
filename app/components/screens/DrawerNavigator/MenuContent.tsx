import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Sidebar from '../../molecules/SidebarMenu/SidebarMenu';
import IconCard from '../../atoms/IconCard/IconCard';
import { px } from '../../../constants/styles/layouts';
import LogoutSvg from '../../../assets/svgs/LogoutSvg';


interface userInfo {
    userName: string,
    phoneNumber: number,
}
const MenuContent: React.FC<userInfo> = ({ userName, phoneNumber }) => {
    const logo = require('../../../assets/images/logoGreen.png');
    const AR = require('../../../assets/images/AR.png');

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
                <View style={styles.container}>
                    <IconCard
                        icon={LogoutSvg}
                        containerstyle={styles.icon}>
                    </IconCard>
                    <Text style={styles.textStyle}>Log out </Text>
                </View>

                {/* <bottom navbar/> */}
                <View style={styles.userCard}>
                    <Image source={require("../../../assets/images/userImg.png")} style={styles.image}></Image>
                    <View style={styles.userinfo}>
                        <Text style={styles.userText}>{userName}</Text>
                        <Text style={styles.userPhone}>{phoneNumber}</Text>
                    </View>
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
        marginLeft:px(10),
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
        color: "#EB001B",
        fontWeight: "bold",


    },
    icon: {
        backgroundColor: '#EED1D4',
        padding: px(2),
        margin: px(3),
    },
    userCard: {
        width: px(250),
        height: px(80),
        borderRadius: px(30),
        backgroundColor: "white",
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
        color: "black",
        fontSize: px(25),
    },
    userPhone: {
        fontSize: px(15),
    },

});

export default MenuContent;
