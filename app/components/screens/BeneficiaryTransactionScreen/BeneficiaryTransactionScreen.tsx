import React from 'react';
import DetailedCard from '../../atoms/DetailedCard/DetailedCard.component';
import TranactionHistory from '../../templets/TransactionHistory/TransactionHistory.componet';
import DrawerMenu from '../DrawerNavigator/DrawerMenu';
import {View} from 'react-native';
import { layouts } from '../../../constants/styles';

function BeneficiaryTransactionScreenComponent({route}) {
  const {transactions, user} = route.params;
  return (
    <>
      <DrawerMenu>
        <View style={layouts.fullHeight}>
          <DetailedCard
            name={user.name}
            balance={user.balance}
            image={user.image}
            mobileNumber={user.mobileNumber}
            color={user.color}
            key={user.color}
            viewStyle={user.viewStyle}
          />
          <TranactionHistory
            transactionitems={transactions ? transactions : []}
          />
        </View>
      </DrawerMenu>
    </>
  );
}

export default BeneficiaryTransactionScreenComponent;
