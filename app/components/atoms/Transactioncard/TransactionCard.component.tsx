import React from 'react';
import {View, Text, Image} from 'react-native';
import {layouts} from '../../../constants/styles';
import styles from './TransactionCard.style';
export interface TransactionCardProp {
  transactionItem: String;
  date: Date | string;
  transactionValue: number;
  image?: number;
}
const TransactionCard: React.FC<TransactionCardProp> = ({
  transactionItem,
  date,
  transactionValue,
  image,
}) => {
  return (
    <View style={[layouts.row, layouts.justifyBetween, styles.container]}>
      <View style={[layouts.row, layouts.allCentered]}>
        {image !== undefined && (
          <Image source={image} style={styles.imageStyle} />
        )}
        <View style={layouts.xCentered}>
          <Text style={[styles.transactionItemStyle, layouts.mb.lg]}>
            {transactionItem}
          </Text>
          <Text style={styles.dateStyle}>{`${
            date instanceof Date ? date.getDate() : ''
          }-${date instanceof Date ? date.getMonth() + 1 : ''}-${
            date instanceof Date ? date.getFullYear() : ''
          }`}</Text>
        </View>
      </View>
      <View style={layouts.xCentered}>
        <Text style={[styles.transactionValue]}>{`$${transactionValue}`}</Text>
      </View>
    </View>
  );
};

export default TransactionCard;
