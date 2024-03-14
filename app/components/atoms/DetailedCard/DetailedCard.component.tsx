import React from 'react';
import {View, Text, Image, ViewStyle, Pressable} from 'react-native';
import {layouts} from '../../../constants/styles';

import IconDollar from 'react-native-vector-icons/FontAwesome';
import IconTelephone from 'react-native-vector-icons/Foundation';
import {useNavigation} from '@react-navigation/native';
import {TransactionCardProp} from '../Transactioncard/TransactionCard.component';
import styles from './DetailedCard.style';
import PhoneSvg from '../../../assets/svgs/PhoneSvg';
export interface DetailedCardProps {
  readonly name: string;
  mobileNumber: string;
  balance: string;
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
  function getRandomTransactionArray(): TransactionCardProp[] {
    const randomNumber = Math.random();

    if (randomNumber < 0.5) {
      return [];
    } else {
      const filledArray: TransactionCardProp[] = [];

      for (let i = 0; i < 10; i++) {
        filledArray.push({
          transactionItem: `Item ${i + 1}`,
          date: new Date().toISOString(),
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
        layouts.bordered,
        styles.cardRadious,
        viewStyle,
        layouts.my.md,
      ]}>
      <Pressable onPress={detailedCardPressedHandler} style={layouts.row}>
        <Image
          source={image}
          style={[styles.detailedCardImage, layouts.me.md]}
          onError={() => {
            console.log('failed to load');
          }}
        />
        <View>
          <Text style={[styles.cardTitle, styles.itemColor]}>{name}</Text>
          <View style={[layouts.row, layouts.yCentered, layouts.mt.sm]}>
            <View style={[styles.innerIconContainer, layouts.allCentered]}>
              <IconTelephone name="telephone" style={styles.innerIcon} />
            </View>
            <Text style={styles.itemColor}>{mobileNumber}</Text>
          </View>
          <View style={[layouts.row, layouts.yCentered, layouts.mt.sm]}>
            <View style={[styles.innerIconContainer, layouts.allCentered]}>
              <IconDollar name="dollar" style={styles.innerIcon} />
            </View>
            <Text style={styles.itemColor}>{balance}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default DetailedCard;
