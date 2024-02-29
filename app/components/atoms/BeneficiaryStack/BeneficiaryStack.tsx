import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Beneficiary from '../../screens/Benificiary/Benificiary';
import BenefiiciaryListScreen from '../../screens/BeneficiaryListScreen/BeneficiaryListScreen';
import BeneficiaryTransactionScreenComponent from '../../screens/BeneficiaryTransactionScreen/BeneficiaryTransactionScreen';

createStackNavigator;
function BeneficiaryStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="BenefiiciaryListScreen"
        component={BenefiiciaryListScreen}
      />
      <Stack.Screen name="AddBeneficiaries" component={Beneficiary} />
      <Stack.Screen
        name="BeneficiaryTransactionScreenComponent"
        component={BeneficiaryTransactionScreenComponent}
      />
    </Stack.Navigator>
  );
}

export default BeneficiaryStack;
