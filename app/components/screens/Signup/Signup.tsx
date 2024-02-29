import {createStackNavigator} from '@react-navigation/stack';
import Mobile from './Mobile/Mobile';
import OTPScreen from '../OTPScreen/OTPScreen';
import Password from './Password/Password';
import Finish from './Finish/Finish';

const Signup = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="MobileScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="MobileScreen" component={Mobile} />

      <Stack.Screen
        name="OtpScreen"
        component={OTPScreen}
        initialParams={{otpTitle: 'Verification', displaySuccessModal: false}}
      />
      <Stack.Screen name="PasswordScreen" component={Password} />
      <Stack.Screen name="FinishScreen" component={Finish} />
    </Stack.Navigator>
  );
};

export default Signup;
