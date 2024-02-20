import React from 'react';
import TransactionCard from '../../atoms/Transactioncard/TransactionCard.component';
import {TransactionCardProp} from '../../atoms/Transactioncard/TransactionCard.component';
import {FlatList, StyleSheet, View} from 'react-native';
export interface TransactionListProps {
  transactions: Array<TransactionCardProp>;
}
function TransactionList({transactions}: TransactionListProps) {
  const renderItem = ({item}: {item: TransactionCardProp}) => {
    return (
      <TransactionCard
        transactionItem={item.transactionItem}
        date={item.date}
        transactionValue={item.transactionValue}
      />
    );
  };
  const itemSepratorComponent = () => {
    return <View style={styles.sepratorStyle} />;
  };
  return (
    <FlatList
      data={transactions}
      renderItem={renderItem}
      ItemSeparatorComponent={itemSepratorComponent}
    />
  );
}

const styles = StyleSheet.create({
  sepratorStyle: {height: 1, backgroundColor: '#B7B7B7'},
});

export default TransactionList;
