import React, { useRef, useState } from 'react';
import { Animated, Image, ImageProps, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MenuContent from './MenuContent';
import IconCard from '../../atoms/IconCard/IconCard';
import MenuTogglerSvg from '../../../assets/svgs/MenuTogglerSvg';

const DrawerMenu = ()=>{

  // const menu = require('../../../assets/svgs/MenuTogglerSvg');
  const close = require('../../../assets/images/close.png');



  // const [currentTab, setCurrentTab] = useState("Home");
  // To get the curretn Status of menu ...
  const [showMenu, setShowMenu] = useState(false);

  // Animated Properties...

  const offsetValue = useRef(new Animated.Value(0)).current;
  // Scale Intially must be One...
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;
  return(

  <View style={styles.container} >

    <MenuContent userName={'Ahmed'} phoneNumber={123456789}></MenuContent>

    {
      // Over lay View...
    }

    <Animated.View style={{
      flexGrow: 1,
      backgroundColor: 'white',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      paddingHorizontal: 15,
      paddingVertical: 20,
      borderRadius: showMenu ? 15 : 0,
      // Transforming View...
      transform: [
        { scale: scaleValue },
        { translateX: offsetValue }
      ]
    }}>

      {
        // Menu Button...
      }

      <Animated.View style={{
        transform: [{
          translateY: closeButtonOffset
        }]
      }}>
        <TouchableOpacity onPress={() => {
          // Do Actions Here....
          // Scaling the view...
          Animated.timing(scaleValue, {
            toValue: showMenu ? 1 : 0.88,
            duration: 300,
            useNativeDriver: true
          })
            .start()

          Animated.timing(offsetValue, {
            // YOur Random Value...
            toValue: showMenu ? 0 : 340,
            duration: 300,
            useNativeDriver: true
          })
            .start()

          Animated.timing(closeButtonOffset, {
            // YOur Random Value...
            toValue: !showMenu ? -30 : 0,
            duration: 300,
            useNativeDriver: true
          })
          //   .start()

          setShowMenu(!showMenu);
        }}>
          {showMenu && <Image source={close} style={{
            width: 20,
            height: 20,
            tintColor: 'black',
            marginTop: 40,

          }}></Image> }
          {!showMenu&&<IconCard icon={MenuTogglerSvg}></IconCard>}
          
        </TouchableOpacity>


      {/* homeScreen content */}
     <Text style={{fontSize:50}}>helllllllo</Text>
      
      </Animated.View>

    </Animated.View>

  </View>
  )

}
export default DrawerMenu ;


const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor:"#F1F3FB",
  },
});