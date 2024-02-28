import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {layouts} from '../../../constants/styles';
import {theme} from '../../../theme/theme';
export interface TransactionCardProp {
  transactionItem: String;
  date: Date | string;
  transactionValue: number;
  image?: number; // Optional image prop
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
          <Text style={styles.dateStyle}>{`${date.getDate()}-${
            date.getMonth() + 1
          }-${date.getFullYear()}`}</Text>
        </View>
      </View>
      <View style={layouts.xCentered}>
        <Text style={[styles.transactionValue]}>{`$${transactionValue}`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 69,
    backgroundColor: theme?.BackgroundMenu,
  },
  imageStyle: {borderRadius: 10, width: 50, height: 50, marginRight: 10},
  transactionItemStyle: {
    fontFamily: 'Roboto',
    fontSize: 18,
    lineHeight: 21.09,
    fontWeight: '400',
    color: theme?.itemColor,
  },
  dateStyle: {
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 16.41,
    color: '#B7B7B7',
  },
  transactionValue: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 21.09,
    color: theme?.itemColor,
  },
});
export default TransactionCard;
