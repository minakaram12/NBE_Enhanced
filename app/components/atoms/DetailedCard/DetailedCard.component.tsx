import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {layouts} from '../../../constants/styles';
import IconTelephone from 'react-native-vector-icons/Foundation';
import IconDollar from 'react-native-vector-icons/FontAwesome';

interface DetailedCardProps {
  readonly name: string;
  mobileNumber: string;
  balance: string;
  readonly image: string;
}

const DetailedCard: React.FC<DetailedCardProps> = ({
  name,
  mobileNumber,
  balance,
  image,
}) => {
  mobileNumber = '+' + mobileNumber;
  balance = '$' + balance;
  const mobileNumberRegex: RegExp = /^\+[0-9]{10,13}$/;
  const accountBalanceRegex: RegExp = /^\$[0-9]+(\.[0-9]{1,2})?$/;
  if (
    !mobileNumberRegex.test(mobileNumber) ||
    !accountBalanceRegex.test(balance)
  ) {
    throw new Error('Invalid mobile or account balance format');
  }

  return (
    <View style={[layouts.row, layouts.px.mmlg, layouts.py.mmlg]}>
      <Image source={{uri: image}} style={styles.detailedCardImage} />
      <View>
        <Text style={styles.cardTitle}>{name}</Text>
        <View style={layouts.row}>
          <IconTelephone
            name="telephone"
            style={[styles.innerIcon, layouts.me.sm]}
          />
          <Text>{mobileNumber}</Text>
        </View>
        <View style={layouts.row}>
          <IconDollar name="dollar" style={styles.innerIcon} />
          <Text>{balance}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailedCardImage: {
    width: 59,
    height: 59,
  },
  innerIcon: {
    width: 6,
    height: 6,
  },
  cardTitle: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 14,
    color: '#1C2437',
  },
  cardInformation: {
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 14.06,
    color: '#B7B7B7',
  },
});
export default DetailedCard;
