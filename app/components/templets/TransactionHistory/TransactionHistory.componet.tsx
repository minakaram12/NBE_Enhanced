import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import NoHistory from '../../atoms/NoHistory/NoHistory.component';
import {TransactionCardProp} from '../../atoms/Transactioncard/TransactionCard.component';
import TransactionList from '../../molecules/TransactionList/TransactionList.component';
import {layouts} from '../../../constants/styles';
import {useTheme} from '../../../ContextAPI/ThemeContext';

interface TrasactionHistoryProps {
  transactionitems: Array<TransactionCardProp>;
  displayImage: boolean;
  header?: string;
}

function TranactionHistory({
  transactionitems,
  displayImage,
  header,
}: TrasactionHistoryProps) {
  const isEmpty = transactionitems.length <= 0;

  return (
    <View style={[layouts.flexed]}>
      <View>
        <Text style={[styles.title, {color: useTheme().isDarkMode.itemColor}]}>
          {header}
        </Text>
      </View>
      <View style={[layouts.flexed]}>
        {isEmpty ? (
          <NoHistory />
        ) : (
          <TransactionList
            transactions={transactionitems}
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
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 23,
    letterSpacing: 0,
    color: '#1C2437',
    marginBottom: 15,
  },
});

export default TranactionHistory;
