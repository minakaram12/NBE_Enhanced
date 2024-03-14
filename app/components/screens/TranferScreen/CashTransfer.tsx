import {createStackNavigator} from '@react-navigation/stack';
import OTPScreen from '../OTPScreen/OTPScreen';
import TransferScreen from './TransferScreen';

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
    </Stack.Navigator>
  );
};

export default CashTransfer;
