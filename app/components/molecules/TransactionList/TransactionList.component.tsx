import React from 'react';
import TransactionCard from '../../atoms/Transactioncard/TransactionCard.component';
import {TransactionCardProp} from '../../atoms/Transactioncard/TransactionCard.component';
import {FlatList, View} from 'react-native';
import styles from './TransactionList.style';

interface TransactionListProps {
  transactions: Array<TransactionCardProp>;
  showImage: boolean;
}

function TransactionList({transactions, showImage}: TransactionListProps) {
  const renderItem = ({item}: {item: TransactionCardProp}) => {
    return (
      <TransactionCard
        transactionItem={item.transactionItem}
        date={new Date(item.date)}
        transactionValue={item.transactionValue}
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

export default TransactionList;
