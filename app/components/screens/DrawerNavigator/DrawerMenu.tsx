import React, {ReactNode, useContext, useEffect, useRef, useState} from 'react';
import {
  Animated,
  Image,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import MenuContent from './MenuContent';
import IconCard from '../../atoms/IconCard/IconCard';
import MenuTogglerSvg from '../../../assets/svgs/MenuTogglerSvg';
import TopNavigator from '../../molecules/TopNavigator/TopNavigator';
import TopNavImg from '../../atoms/TopNavImg/TopNavImg';
import BellSvg from '../../../assets/svgs/BellSvg';
import {theme} from '../../../theme/theme';
import {ScrollView} from 'react-native-gesture-handler';
import {getUsername} from '../../../storage/mmkv';
import {getPhoneNumber} from './../../../storage/mmkv';
import BottomTabsNavigation from '../../atoms/BottomTabsNavigation/BottomTabNavigation.component';
import { NavigationContext, ParamListBase, getFocusedRouteNameFromRoute, useNavigation, useNavigationState, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

interface DrawerMenuProps {
  children: ReactNode;
}
// const getActiveRouteName :string= (route) => {
//   if (route.state) {
//     // Dive into the nested navigator
//     return getActiveRouteName(route.state.routes[route.state.index]);
//   }
//   // Return the name of the current screen
//   return route.name;
// };

const DrawerMenu: React.FC<DrawerMenuProps> = ({children }) => {
  const close = require('../../../assets/images/close.png');

  const [showMenu, setShowMenu] = useState(false);
  const [showTopNav, setShowTopNav] = useState(true);
  const navigation = useNavigation();
  // const currentScreenName = navigation.getState().routeNames[navigation.getState().index];
  const route = useRoute();
  const routeName = getFocusedRouteNameFromRoute(route)??'HomeScreen';

  
    // const stackNavigatorState = navigation.getState().routes.find(route => route.name === 'home')?.state;
    
    // // Get the current screen name within the stack navigator
    // const currentScreenName = stackNavigatorState ? stackNavigatorState.routes[2].name : '';
    // const hasNestedStack = stackNavigatorState?.routes[2]?.state ===undefined ;
    // console.log('nested', currentScreenName, 'hasNestedStack', hasNestedStack);

    // if(!hasNestedStack){
    //   const hasBeneficiaryStack= stackNavigatorState?.routes[2]?.state ;
    //   const Addbenef =hasBeneficiaryStack?.routes[1].name;
    //   console.log(Addbenef);
    // }
    // else{

    // }
    // const Addbenef =hasNestedStack?.routes[1].name
 
  console.log(routeName);
 
 
  //  const stackNavigatorState = navigation.getState().routes.find(route => route.name === 'home')?.state;

  //   // Get the current route within the stack navigator
  //   const currentRoute = stackNavigatorState?.routes[2];

  //   // Get the current screen name within the stack navigator
  //   const currentScreenName = currentRoute ? currentRoute.name : '';

  //   // Check if the current route has a nested stack navigator
  //   const hasNestedStack = currentRoute?.state !== undefined;
    
  //   console.log('nested', currentScreenName, 'hasNestedStack', hasNestedStack);
   
  

 

  const offsetValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;
  const ScaleBottomNav = useRef(new Animated.Value(0)).current;

  useEffect(()=>{
  
        // const stackNavigatorState = navigation.getState().routes.find(route => route.name === 'home')?.state;

        // const currentRoute = stackNavigatorState?.routes.find(route=>route.name==='Beneficiary')?.state
  
          // if (currentRoute?.routes[1]?.name === 'AddBeneficiaries') {
          //   setShowTopNav(false);
          // } else {
          //   setShowTopNav(true);
          // }
    // console.log("nested "+ currentRoute?.routes[1].name);
    if(routeName==="CashTransfer"){
      setShowTopNav(false);
     }
     else{
      setShowTopNav(true);
     }
  },[routeName ,navigation]);
 

  const handleMenuPress = () => {
    Animated.parallel([
      Animated.timing(scaleValue, {
        toValue: showMenu ? 1 : 0.88,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(offsetValue, {
        toValue: showMenu ? 0 : 380,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(closeButtonOffset, {
        toValue: showMenu ? 0 : -30,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(ScaleBottomNav, {
        toValue: showMenu ? 0 : 30,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  
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
          tintColor: theme?.BasicColor,
          // cant call usetheme(hooks)inside condition as it should always be called at the top level of your component
          // 'tintColor' : useTheme().isDarkMode.BasicColor
          margin: 10,
        }}
      />
    );
    // console.log('tintColor' + useTheme().isDarkMode.BasicColor);
  }

  return (
    //<ScrollView>
    <View
      style={styles.container}>
      {/* MenuItem */}
      <ScrollView>
      <MenuContent
        userName={getUsername() || 'Ahmed'}
        phoneNumber={getPhoneNumber() || '123456789'}
      />
      </ScrollView>
     

      <Animated.View
        style={{
          flexGrow: 1,
          backgroundColor: theme?.white,
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          // paddingHorizontal: showMenu ? 0 : 0,
          // paddingVertical: showMenu ? 20 : 0,
          borderRadius: showMenu ? 15 : 0,
          overflow: 'hidden',
          transform: [{scale: scaleValue}, {translateX: offsetValue} ],
        }}>
        <Animated.View
          style={{
            transform: [{translateY: closeButtonOffset},{translateY: ScaleBottomNav}],
            backgroundColor:theme?.BackgroundMenu,
            height:'100%',
          }}>
           
         {
          showTopNav && (  <TopNavigator
            onPressLeft={handleMenuPress}
            contentLeft={contentLeft}
            contentMiddle={
              <TopNavImg
                name={getUsername() || 'Ahmed'}
                imgUrl={require('../../../assets/images/dummyUser.png')}
              />
            }
            contentRight={<IconCard icon={BellSvg} Type="Notification" />}
          />)
         } 
       
         


         

            {/* homeScreen content */}
            {children}
        </Animated.View>
      </Animated.View>
    </View>
  // </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {

  flex:1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: theme?.BackgroundMenu,
  },
});

export default DrawerMenu;
