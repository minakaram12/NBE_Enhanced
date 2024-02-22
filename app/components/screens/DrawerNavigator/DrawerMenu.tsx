import React, { ReactNode, useRef, useState } from 'react';
import { Animated, Image, TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import MenuContent from './MenuContent';
import IconCard from '../../atoms/IconCard/IconCard';
import MenuTogglerSvg from '../../../assets/svgs/MenuTogglerSvg';
import TopNavigator from '../../molecules/TopNavigator/TopNavigator';
import TopNavImg from '../../atoms/TopNavImg/TopNavImg';
import BellSvg from '../../../assets/svgs/BellSvg';
import{theme} from '../../../theme/theme'


interface DrawerMenuProps{
  isEnabledDark:boolean;
  toggleSwitch:()=>void;
  children: ReactNode;
}

const DrawerMenu : React.FC<DrawerMenuProps> = ({ isEnabledDark, toggleSwitch ,children}) => {
  const close = require('../../../assets/images/close.png');

  const [showMenu, setShowMenu] = useState(false);

  const offsetValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

  const handleMenuPress = () => {
    Animated.timing(scaleValue, {
      toValue: showMenu ? 1 : 0.88,
      duration: 300,
      useNativeDriver: true
    }).start();

    Animated.timing(offsetValue, {
      toValue: showMenu ? 0 : 380,
      duration: 300,
      useNativeDriver: true
    }).start();

    Animated.timing(closeButtonOffset, {
      toValue: !showMenu ? -30 : 0,
      duration: 300,
      useNativeDriver: true
    }).start();

    setShowMenu(!showMenu);

  };


  let contentLeft:any = <IconCard icon={MenuTogglerSvg}></IconCard>
  if(showMenu){
    contentLeft = <Image
    source={close}
    style={{
      width: 20,
      height: 20,
      tintColor: 'black',
      margin:10,
    }}
  />
  }

  return (
    <View style={styles.container}>
      {/* MenuItem */}
      <MenuContent userName={'Ahmed'} phoneNumber={123456789} isEnabledDark={isEnabledDark} toggleSwitch={toggleSwitch} />

      <Animated.View
        style={{
          flexGrow: 1,
          backgroundColor: 'white',
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          paddingHorizontal: showMenu ? 15 : 0,
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
            transform: [{ translateY: closeButtonOffset }]
          }}
        >
          <TopNavigator
            onPressLeft={handleMenuPress}
            contentLeft={contentLeft}
            contentMiddle={
              <TopNavImg
                name="Ahmed"
                imgUrl={require('../../../assets/images/dummyUser.png')}
              />
            }
            contentRight={
              <IconCard
                icon={BellSvg}
                Type='Notification'
              />
            }
          /> 

          {/* Screen content */}
                {children}
        </Animated.View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: theme?.BackgroundMenu,
    
  }
});

export default DrawerMenu;
