import {createStackNavigator} from '@react-navigation/stack';
import SimpleOrDetailedList from '../../molecules/simpleOrDetailedList/simpleOrDetailedList';
import AddBeneficiaries from '../../templets/AddBeneficiaries';
import Beneficiary from '../../screens/Benificiary/Benificiary';
import BenefiiciaryListScreen from '../../screens/BeneficiaryListScreen/BeneficiaryListScreen';
import BeneficiaryTransactionScreenComponent from '../../screens/BeneficiaryTransactionScreen/BeneficiaryTransactionScreen';

createStackNavigator;
function BeneficiaryStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator  screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="BenefiiciaryListScreen"
        component={BenefiiciaryListScreen}
      />
      <Stack.Screen name="AddBeneficiaries" component={Beneficiary} />
      <Stack.Screen name="BeneficiaryTransactionScreenComponent" component={BeneficiaryTransactionScreenComponent} />
      {/* <Stack.Screen
        name="transactionHistoryPage"
        component={TranactionHistoryPage}
      /> */}
    </Stack.Navigator>
  );
}

export default BeneficiaryStack;
