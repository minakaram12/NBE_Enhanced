import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import NoHistory from '../../atoms/NoHistory/NoHistory.component';
import {TransactionCardProp} from '../../atoms/Transactioncard/TransactionCard.component';
import TransactionList from '../../molecules/TransactionList/TransactionList.component';
import {layouts} from '../../../constants/styles';
import {styles} from './transactionhistorystyles';

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

export default TranactionHistory;
