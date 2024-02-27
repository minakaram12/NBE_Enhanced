import React from 'react';
import TransactionCard from '../../atoms/Transactioncard/TransactionCard.component';
import {TransactionCardProp} from '../../atoms/Transactioncard/TransactionCard.component';
import {FlatList, StyleSheet, View} from 'react-native';

interface TransactionListProps {
  transactions: Array<TransactionCardProp>;
  showImage: boolean; // Optional prop to control image display
}

function TransactionList({transactions, showImage}: TransactionListProps) {
  const renderItem = ({item}: {item: TransactionCardProp}) => {
    return (
      <TransactionCard
        transactionItem={item.transactionItem}
        date={new Date(item.date)}
        transactionValue={item.transactionValue}
        // Conditionally pass the image prop based on displayImage prop
        image={showImage ? item.image : undefined}
      />
    );
  };

  const itemSepratorComponent = () => {
    return <View style={styles.separatorStyle} />;
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
  separatorStyle: {height: 1, backgroundColor: '#B7B7B7'},
});

export default TransactionList;
