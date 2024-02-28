import React from 'react';
import DetailedCard from '../../atoms/DetailedCard/DetailedCard.component';
import TranactionHistory from '../../templets/TransactionHistory/TransactionHistory.componet';
import DrawerMenu from '../DrawerNavigator/DrawerMenu';
import {View} from 'react-native';
import {layouts} from '../../../constants/styles';
import {theme} from '../../../theme/theme';

function BeneficiaryTransactionScreenComponent({route}) {
  const {transactions, user} = route.params;
  return (
    <>
      {/* <DrawerMenu> */}
      <View
        style={[
          layouts.fullHeight,
          layouts.px.lg,
          {backgroundColor: theme?.BackgroundScreen},
        ]}>
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
          header="Transaction History"
          displayImage={false}
        />
      </View>
      {/* </DrawerMenu> */}
    </>
  );
}

export default BeneficiaryTransactionScreenComponent;
