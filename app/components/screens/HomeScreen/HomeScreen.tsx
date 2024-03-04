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

import {visaCardsData} from '../../../Faker/Faker';
import {simpleCardsArray} from '../../molecules/SimpleCardList/simpleCardListFaker';
import SendMoneyList from '../../molecules/SendMoneyList/SendMoneyList';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {px} from '../../../constants/styles/layouts';
import {theme} from '../../../theme/theme';
import {HistoryWithImg} from '../../../Faker/HistoryWithImg';
import {ScrollView} from 'react-native-gesture-handler';
import {width} from '@fortawesome/free-solid-svg-icons/faEye';

const HomeScreen = () => {
  const [showVisaCards, setShowVisaCards] = useState(false);
  const [showAll, setShowAll] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  return (
    <View style={styles.outerContainer}>
      {/* <ScrollView> */}
      {!showVisaCards && (
        <View>
          {/* balaance */}
          <TouchableOpacity onPress={() => setShowVisaCards(true)}>
            <ImageBackground
              source={require('../../../assets/images/balance.png')} // Replace 'visa_card_bg.jpg' with the path to your image
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
          <View
            style={[
              layouts.justifyAround,
              layouts.row,
              {width: '100%'},
              layouts.my.xs,
              layouts.px.lg,
            ]}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Beneficiary');
              }}
              style={[layouts.allCentered]}>
              <IconCard
                icon={AccountsSvg}
                containerstyle={[
                  {
                    backgroundColor: theme?.IconAccountBackground,
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
                    backgroundColor: theme?.IconCardstBackground,
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
                    backgroundColor: theme?.IconutilitiesBackground,
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
                    backgroundColor: theme?.IconHistoryBackground,
                  },
                  styles.containerstyle,
                ]}
              />
              <Text style={[styles.servicesText]}>History</Text>
            </TouchableOpacity>
          </View>

          <View style={[layouts.ms.sm, layouts.px.lg, {marginTop: px(10)}]}>
            <View
              style={[layouts.row, layouts.justifyBetween, layouts.alignedEnd]}>
              <Text style={[styles.titleText]}>Send Money</Text>
              <TouchableOpacity
                onPress={() => {
                  setShowAll(!showAll);
                }}>
                {!showAll && <Text style={[styles.viewAllText]}>View All</Text>}
                {showAll && <Text style={[styles.viewAllText]}>View less</Text>}
              </TouchableOpacity>
            </View>

            <SendMoneyList cardsData={simpleCardsArray} showAll={showAll} />
          </View>
        </View>
      )}
      {/* </ScrollView> */}
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
          [layouts.mx.xl],
          {
            height: !showVisaCards ? px(260) : '65%',
            marginTop: !showVisaCards ? 10 : 15,
          },
          // {height: '100%'},
          // {flex: 1},
        ]}>
          
        <TranactionHistory
          transactionitems={HistoryWithImg}
          displayImage={true}
          header="History"
          viewAll={true}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
