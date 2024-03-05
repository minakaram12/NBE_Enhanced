import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from './components/screens/SplashScreen/SplashScreen';
import LoginScreen from './components/screens/LoginScreen/LoginScreen';
import Signup from './components/screens/Signup/Signup';
import DefaultScreen from './components/templets/DefaultScreen';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="loginScreen" component={LoginScreen} />
        <Stack.Screen name="signupScreen" component={Signup} />
        <Stack.Screen name="home" component={DefaultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
