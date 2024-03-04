import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import NoHistory from '../../atoms/NoHistory/NoHistory.component';
import {TransactionCardProp} from '../../atoms/Transactioncard/TransactionCard.component';
import TransactionList from '../../molecules/TransactionList/TransactionList.component';
import {layouts} from '../../../constants/styles';
import {theme} from '../../../theme/theme';
import {px} from '../../../constants/styles/layouts';

interface TrasactionHistoryProps {
  transactionitems: Array<TransactionCardProp>;
  displayImage: boolean;
  header?: string;
  viewAll?: boolean;
}

function TranactionHistory({
  transactionitems,
  displayImage,
  header,
  viewAll,
}: TrasactionHistoryProps) {
  const isEmpty = transactionitems.length <= 0;
  const [showAll, setShowAll] = useState(false);
  let displayedTransactions = transactionitems;

  if (viewAll && !showAll) {
    displayedTransactions = transactionitems.slice(0, 5);
  }

  return (
    <View style={[layouts.flexed]}>
      <View style={[layouts.row, layouts.justifyBetween, layouts.alignedEnd]}>
        <Text style={[styles.title]}>{header}</Text>
        {viewAll && (
          <TouchableOpacity
            onPress={() => {
              setShowAll(!showAll);
            }}>
            {!showAll && <Text style={[styles.viewAllText]}>View All</Text>}
            {showAll && <Text style={[styles.viewAllText]}>View less</Text>}
          </TouchableOpacity>
        )}
      </View>
      <View style={[layouts.flexed]}>
        {isEmpty ? (
          <NoHistory />
        ) : (
          <TransactionList
            transactions={displayedTransactions}
            showImage={displayImage}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Roboto',
    fontSize: px(20),
    fontWeight: '700',
    lineHeight: 20,
    letterSpacing: 0,
    color: theme?.itemColor,
    // marginBottom: 5,
  },
  viewAllText: {
    color: theme?.silver,
    fontSize: px(15),
    fontFamily: 'Roboto',
    includeFontPadding: false,
  },
});

export default TranactionHistory;
