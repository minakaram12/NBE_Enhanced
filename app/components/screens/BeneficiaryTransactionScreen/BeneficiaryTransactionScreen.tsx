import React from 'react';
import DetailedCard from '../../atoms/DetailedCard/DetailedCard.component';
import TranactionHistory from '../../templets/TransactionHistory/TransactionHistory.componet';
import {Text, View} from 'react-native';
import {layouts} from '../../../constants/styles';
import {Beneficiary} from '../../molecules/SwipeableCardList/SwipeableCardListFaker';
import {styles} from './benefTransStyles';

interface BeneficiaryTransactionScreenComponentProp {
  route: {params: {transactions: Array<any>; user: Beneficiary}};
}

function BeneficiaryTransactionScreenComponent({
  route,
}: BeneficiaryTransactionScreenComponentProp) {
  const {transactions, user} = route.params || {};

  if (!user) {
    return <Text>User data not available.</Text>;
  }

  return (
    <>
      <View style={[layouts.fullHeight, layouts.px.lg, styles.outerView]}>
        <DetailedCard
          name={user.name || ''}
          balance={user.balance || ''}
          image={user.image}
          mobileNumber={user.mobileNumber || ''}
          color={user.color}
          key={user.color}
          viewStyle={user.ViewStyle || undefined}
        />
        <TranactionHistory
          transactionitems={transactions ? transactions : []}
          header="Transaction History"
          displayImage={false}
        />
      </View>
    </>
  );
}

export default BeneficiaryTransactionScreenComponent;
