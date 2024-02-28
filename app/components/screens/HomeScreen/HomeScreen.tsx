import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import {layouts} from '../../../constants/styles';
import IconCard from '../../atoms/IconCard/IconCard';
import VisaCardList from '../../molecules/VisaCardList/VisaCardList';
import OutlinedFingerPrintSvg from '../../../assets/svgs/OutlinedFingerPrintSvg';
import AccountsSvg from '../../../assets/svgs/AccountsSvg';
import CardsSvg from '../../../assets/svgs/CardsSvg';
import UtilitiesSvg from '../../../assets/svgs/UtilitiesSvg';
import HistorySvg from '../../../assets/svgs/HistorySvg';
import TranactionHistory from '../../templets/TransactionHistory/TransactionHistory.componet';
import styles from './HomeScreen.style';
import {visaCardsData} from '../../../Faker';
import {simpleCardsArray} from '../../molecules/SimpleCardList/simpleCardListFaker';
import SendMoneyList from '../../molecules/SendMoneyList/SendMoneyList';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {px} from '../../../constants/styles/layouts';
import {theme} from '../../../theme/theme';
import {HistoryWithImg} from '../../../Faker/HistoryWithImg';

const HomeScreen = () => {
  const [showVisaCards, setShowVisaCards] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  return (
    <View style={styles.outerContainer}>
      {!showVisaCards && (
        <View>
          {/* balaance */}
          <TouchableOpacity onPress={() => setShowVisaCards(true)}>
            <ImageBackground
              source={require('../../../assets/images/home_card.png')} // Replace 'visa_card_bg.jpg' with the path to your image
              style={[styles.cardBackground]}
              imageStyle={styles.cardImage}>
              <View style={styles.cardView}>
                <View style={styles.cardContent}>
                  <Text style={styles.CreditText}>Balance</Text>
                  <View style={styles.svgView}>
                    <OutlinedFingerPrintSvg width={50} height={50} />
                  </View>
                </View>
                <View style={styles.cardContent}>
                  <Text style={[styles.CreditText, {textAlign: 'center'}]}>
                    $1,568,983.25
                  </Text>
                </View>
              </View>
            </ImageBackground>
          </TouchableOpacity>
          {/* services */}
          <View style={[layouts.justifyAround, layouts.row]}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Beneficiary');
              }}
              style={[layouts.allCentered]}>
              <IconCard
                icon={AccountsSvg}
                containerstyle={[
                  {
                    backgroundColor: theme?.EmeraldGreen,
                  },
                  styles.containerstyle,
                ]}
              />
              <Text style={[styles.servicesText]}>Accounts</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Beneficiary');
              }}
              style={[layouts.allCentered]}>
              <IconCard
                icon={CardsSvg}
                containerstyle={[
                  {
                    backgroundColor: theme?.PictonBlue,
                  },
                  styles.containerstyle,
                ]}
              />
              <Text style={[styles.servicesText]}>Cards</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Beneficiary');
              }}
              style={[layouts.allCentered]}>
              <IconCard
                icon={UtilitiesSvg}
                containerstyle={[
                  {
                    backgroundColor: theme?.orangeWeb,
                  },
                  styles.containerstyle,
                ]}
              />
              <Text style={[styles.servicesText]}>Utilities</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Beneficiary');
              }}
              style={[layouts.allCentered]}>
              <IconCard
                icon={HistorySvg}
                containerstyle={[
                  {
                    backgroundColor: theme?.ImperialRed,
                  },
                  styles.containerstyle,
                ]}
              />
              <Text style={[styles.servicesText]}>History</Text>
            </TouchableOpacity>
          </View>

          <View style={[layouts.mt.xxxl, layouts.ms.sm, layouts.px.mlg]}>
            <Text style={[styles.titleText]}>Send Money</Text>
          </View>
          <SendMoneyList cardsData={simpleCardsArray} />
        </View>
      )}

      {showVisaCards && (
        <View>
          <VisaCardList
            onPress={() => setShowVisaCards(false)}
            VisaCardsData={visaCardsData}
          />
        </View>
      )}

      <View
        style={[
          [layouts.mx.xl, layouts.mt.xl],
          {height: !showVisaCards ? px(140) : '65%'},
        ]}>
        <TranactionHistory
          transactionitems={HistoryWithImg}
          displayImage={true}
          header="History"
        />
      </View>
    </View>
  );
};

export default HomeScreen;
