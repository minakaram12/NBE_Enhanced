import React from 'react';
import {StyleSheet, View, Text, Image, ImageSourcePropType} from 'react-native';
import {layouts} from '../../../constants/styles';
import {useTheme} from '../../../ContextAPI/ThemeContext';
export interface TransactionCardProp {
  transactionItem: String;
  date: Date;
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
    <View
      style={[
        layouts.row,
        layouts.justifyBetween,
        styles.container,
        {backgroundColor: useTheme().isDarkMode.BackgroundMenu},
      ]}>
      <View style={[layouts.row, layouts.allCentered]}>
        {image !== undefined && (
          <Image
            source={image}
            style={{borderRadius: 10, width: 50, height: 50, marginRight: 10}}
          />
        )}
        <View style={layouts.xCentered}>
          {/* Render image if provided */}
          <Text
            style={[
              styles.transactionItemStyle,
              layouts.mb.lg,
              {color: useTheme().isDarkMode.itemColor},
            ]}>
            {transactionItem}
          </Text>
          <Text style={styles.dateStyle}>{`${date.getDate()}-${
            date.getMonth() + 1
          }-${date.getFullYear()}`}</Text>
        </View>
      </View>
      <View style={layouts.xCentered}>
        <Text
          style={[
            styles.transactionValue,
            {color: useTheme().isDarkMode.itemColor},
          ]}>{`$${transactionValue}`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 69,
    backgroundColor: '#F1F3FB',
  },
  transactionItemStyle: {
    fontFamily: 'Roboto',
    fontSize: 18,
    lineHeight: 21.09,
    fontWeight: '400',
    color: '#1C2437',
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
    color: '#1C2437',
  },
});
export default TransactionCard;
