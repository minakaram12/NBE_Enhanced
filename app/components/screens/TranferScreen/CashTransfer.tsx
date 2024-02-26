import {createStackNavigator} from '@react-navigation/stack';
import Mobile from './Mobile';
import OTPScreen from '../OTPScreen/OTPScreen';
import TransferScreen from './TransferScreen';
import HomeScreen from '../HomeScreen/HomeScreen';

const CashTransfer = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="TransferScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="TransferScreen" component={TransferScreen} />

      <Stack.Screen
        name="OtpScreen"
        component={OTPScreen}
        initialParams={{otpTitle: 'OTP', displaySuccessModal: true}}
      />
      {/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
    </Stack.Navigator>
  );
};

export default CashTransfer;
