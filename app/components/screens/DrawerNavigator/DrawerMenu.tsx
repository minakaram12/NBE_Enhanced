import React, {ReactNode, useEffect, useRef, useState} from 'react';
import {Animated, Image, View, StyleSheet} from 'react-native';
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
import {
  getFocusedRouteNameFromRoute,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {screenWidth} from '../../../constants/styles/layouts';

interface DrawerMenuProps {
  children: ReactNode;
}

const DrawerMenu: React.FC<DrawerMenuProps> = ({children}) => {
  const close = require('../../../assets/images/close.png');

  const [showMenu, setShowMenu] = useState(false);
  const [showTopNav, setShowTopNav] = useState(true);
  const navigation = useNavigation();
  const route = useRoute();
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'HomeScreen';

  console.log(routeName);

  const offsetValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;
  const ScaleBottomNav = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const unsubscribe = navigation.addListener('state', () => {
      // Accessing the nested stack navigator named 'Beneficiary' within the 'home' stack navigator
      const stackNavigatorState = navigation
        .getState()
        .routes.find(route => route.name === 'home')?.state;
      const currentRoute = stackNavigatorState?.routes.find(
        route => route.name === 'Beneficiary',
      )?.state;

      // Check if the current route within the nested stack navigator is 'AddBeneficiaries'
      if (
        routeName === 'CashTransfer' ||
        currentRoute?.routes[1]?.name === 'AddBeneficiaries'
      ) {
        setShowTopNav(false); // Hide the top navigation
      } else {
        setShowTopNav(true); // Show the top navigation
      }
    });

    return unsubscribe;
  }, [routeName, navigation]);

  const handleMenuPress = () => {
    Animated.parallel([
      Animated.timing(scaleValue, {
        toValue: showMenu ? 1 : 0.88,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(offsetValue, {
        toValue: showMenu ? 0 : screenWidth * 0.9,
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
          margin: 10,
        }}
      />
    );
  }

  return (
    <View style={styles.container}>
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
          // backgroundColor: theme?.white,
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          borderRadius: showMenu ? 15 : 0,
          overflow: 'hidden',
          transform: [{scale: scaleValue}, {translateX: offsetValue}],
        }}>
        <Animated.View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            transform: [
              {translateY: closeButtonOffset},
              {translateY: ScaleBottomNav},
            ],
            backgroundColor: theme?.BackgroundMenu,
            height: '100%',
          }}>
          {showTopNav && (
            <TopNavigator
              onPressLeft={handleMenuPress}
              contentLeft={contentLeft}
              contentMiddle={
                <TopNavImg
                  name={getUsername() || 'Ahmed'}
                  imgUrl={require('../../../assets/images/dummyUser.png')}
                />
              }
              contentRight={<IconCard icon={BellSvg} Type="Notification" />}
            />
          )}
          {/* homeScreen content */}
          {children}
        </Animated.View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: theme?.BackgroundMenu,
  },
});

export default DrawerMenu;
