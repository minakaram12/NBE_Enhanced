import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ViewStyle,
  Pressable,
} from 'react-native';
import {layouts} from '../../../constants/styles';

import IconDollar from 'react-native-vector-icons/FontAwesome';
import IconTelephone from 'react-native-vector-icons/Foundation';
import {useNavigation} from '@react-navigation/native';
import {TransactionCardProp} from '../Transactioncard/TransactionCard.component';

export interface DetailedCardProps {
  readonly name: string;
  mobileNumber: string; //mobile number isn't read only because we concat + to it later
  balance: string; //balance isn't read only because we concat $ later to it
  readonly image: number;
  color?: string;
  viewStyle?: ViewStyle;
}

const DetailedCard: React.FC<DetailedCardProps> = ({
  name,
  mobileNumber,
  balance,
  image,
  color,
  viewStyle,
}) => {
  if (mobileNumber[0] != '+') {
    mobileNumber = '+' + mobileNumber;
  }
  if (balance[0] != '$') {
    balance = '$' + balance;
  }
  const mobileNumberRegex: RegExp = /^\+[0-9]{10,13}$/;
  const accountBalanceRegex: RegExp = /^\$[0-9]+(\.[0-9]{1,2})?$/;
  if (
    !mobileNumberRegex.test(mobileNumber) ||
    !accountBalanceRegex.test(balance)
  ) {
    throw new Error('Invalid mobile or account balance format' + mobileNumber);
  }
  const viewBgColor: string = color ? color : '#ffffff';
  function getRandomTransactionArray(): TransactionCardProp[] {
    const randomNumber = Math.random();

    if (randomNumber < 0.5) {
      // Return an empty array
      return [];
    } else {
      // Return an array filled with 10 items
      const filledArray: TransactionCardProp[] = [];

      for (let i = 0; i < 10; i++) {
        filledArray.push({
          transactionItem: `Item ${i + 1}`,
          date: new Date(),
          transactionValue: Math.random() * 1000,
        });
      }

      return filledArray;
    }
  }
  const navigation = useNavigation();
  const detailedCardPressedHandler = () => {
    const transactions = getRandomTransactionArray();
    const user = {
      name: name,
      mobileNumber: mobileNumber,
      balance: balance,
      image: image,
      color: color,
      viewStyle: viewStyle,
    };
    navigation.navigate('BeneficiaryTransactionScreenComponent', {
      transactions,
      user,
    });
  };
  return (
    <View
      style={[
        layouts.row,
        layouts.px.mmlg,
        layouts.py.mmlg,
        styles.cardRadious,
        layouts.bordered,
        viewStyle,
        layouts.my.lg,
        {backgroundColor: viewBgColor},
      ]}>
      <Pressable onPress={detailedCardPressedHandler} style={layouts.row}>
        <Image
          source={image}
          style={[styles.detailedCardImage, layouts.me.md]}
          onError={() => {
            console.log('====================================');
            console.log('failed to load');
            console.log('====================================');
          }}
        />
        <View>
          <Text style={styles.cardTitle}>{name}</Text>
          <View style={[layouts.row, layouts.yCentered]}>
            <IconTelephone name="telephone" style={styles.innerIcon} />
            <Text>{mobileNumber}</Text>
          </View>
          <View style={[layouts.row, layouts.yCentered]}>
            <IconDollar name="dollar" style={styles.innerIcon} />
            <Text>{balance}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  detailedCardImage: {
    width: 59,
    height: 59,
  },
  innerIcon: {
    width: 12,
    height: 12,
  },
  cardTitle: {
    fontFamily: 'Roboto-Medium',
    fontWeight: '700',
    fontSize: 14,
    color: '#1C2437',
  },
  cardInformation: {
    fontFamily: 'Roboto-Medium',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 14.06,
    color: '#B7B7B7',
  },
  cardRadious: {
    borderRadius: 18,
  },
});
export default DetailedCard;
