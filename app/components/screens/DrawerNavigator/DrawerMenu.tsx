import React, { ReactNode, useRef, useState } from 'react';
import { Animated, Image, TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import MenuContent from './MenuContent';
import IconCard from '../../atoms/IconCard/IconCard';
import MenuTogglerSvg from '../../../assets/svgs/MenuTogglerSvg';
import TopNavigator from '../../molecules/TopNavigator/TopNavigator';
import TopNavImg from '../../atoms/TopNavImg/TopNavImg';
import BellSvg from '../../../assets/svgs/BellSvg';
import{theme} from '../../../theme/theme'
import { useTheme } from '../../../ContextAPI/ThemeContext';
import { ScrollView } from 'react-native-gesture-handler';

interface DrawerMenuProps{
  children: ReactNode;
}

interface DrawerMenuProps{
  // isEnabledDark:boolean;
  // toggleSwitch:()=>void;
  
  children: ReactNode;
}

const DrawerMenu :React.FC<DrawerMenuProps>= ({children}) => {
  const close = require('../../../assets/images/close.png');

  const [showMenu, setShowMenu] = useState(false);
  const { isDarkMode, toggleSwitch } = useTheme();

  const offsetValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;


  const handleMenuPress = () => {
    Animated.timing(scaleValue, {
      toValue: showMenu ? 1 : 0.88,
      duration: 300,
      useNativeDriver: true,
    }).start();

    Animated.timing(offsetValue, {
      toValue: showMenu ? 0 : 380,
      duration: 300,
      useNativeDriver: true,
    }).start();

    Animated.timing(closeButtonOffset, {
      toValue: !showMenu ? -30 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();

    setShowMenu(!showMenu);
  };

  let contentLeft: any = <IconCard icon={MenuTogglerSvg}></IconCard>;
  if (showMenu) {
    contentLeft = (
      <Image
        source={close}
        style={{
          width: 20,
          height: 20,
          tintColor: useTheme().isDarkMode.BasicColor,
          margin: 10,
        }}
      />
    );
    console.log("tintColor"+useTheme().isDarkMode.BasicColor);

  }

  return (
    <ScrollView>
    <View style={[styles.container,{backgroundColor:isDarkMode.BackgroundMenu}]}>
      {/* MenuItem */}
      <MenuContent userName={'Ahmed'} phoneNumber={123456789} />

      <Animated.View
        style={{
          flexGrow: 1,
          backgroundColor: useTheme().isDarkMode.white,
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          // paddingHorizontal: showMenu ? 0 : 0,
          paddingVertical: showMenu ? 20 : 0,
          borderRadius: showMenu ? 15 : 0,
          overflow:"hidden",
          transform: [
            { scale: scaleValue },
            { translateX: offsetValue },
          ]
        }}
      >
        <Animated.View
          style={{
            transform: [{translateY: closeButtonOffset}],
            backgroundColor:useTheme().isDarkMode.BackgroundNav,
          }}>
          <TopNavigator
            onPressLeft={handleMenuPress}
            contentLeft={contentLeft}
            contentMiddle={
              <TopNavImg
                name="Ahmed"
                imgUrl={require('../../../assets/images/dummyUser.png')}
              />
            }
            contentRight={<IconCard icon={BellSvg} Type="Notification" />}
          />

          {/* homeScreen content */}
          {children}
        </Animated.View>
      </Animated.View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    // backgroundColor: useTheme().isDarkMode.BackgroundMenu,
    
  }
});

export default DrawerMenu;
