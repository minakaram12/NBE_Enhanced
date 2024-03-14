import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import {layouts} from '../../../constants/styles';
import IconCard from '../../atoms/IconCard/IconCard';
import VisaCardList from '../../molecules/VisaCardList/VisaCardList';
import AccountsSvg from '../../../assets/svgs/AccountsSvg';
import CardsSvg from '../../../assets/svgs/CardsSvg';
import UtilitiesSvg from '../../../assets/svgs/UtilitiesSvg';
import HistorySvg from '../../../assets/svgs/HistorySvg';
import TransactionHistory from '../../templets/TransactionHistory/TransactionHistory.componet';
import styles from './HomeScreen.style';
import SendMoneyList from '../../molecules/SendMoneyList/SendMoneyList';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {px} from '../../../constants/styles/layouts';
import {theme} from '../../../theme/theme';
import {HistoryWithImg} from '../../../Faker/HistoryWithImg';
import {visaCardsData} from '../../../Faker/Faker';
import {detailedCardPropsArray} from '../../molecules/SwipeableCardList/SwipeableCardListFaker';

const HomeScreen = () => {
  const [showVisaCards, setShowVisaCards] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.outerContainer}>
      {!showVisaCards && (
        <View>
          <View style={styles.ph15}>
            {/* balaance */}
            <TouchableOpacity onPress={() => setShowVisaCards(true)}>
              <ImageBackground
                source={require('../../../assets/images/balance.png')}
                style={[styles.cardBackground]}
                imageStyle={styles.cardImage}>
                <View style={styles.cardView}>
                  <View style={styles.cardContent}>
                    <Text style={styles.CreditText}>Balance</Text>
                  </View>
                  <View style={styles.cardContent}>
                    <Text style={[styles.CreditText2]}>$1,568,983.25</Text>
                  </View>
                </View>
              </ImageBackground>
            </TouchableOpacity>
            {/* services */}
            <View style={[layouts.justifyBetween, layouts.row, layouts.my.xs]}>
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

            <View style={[styles.mt20]}>
              <View
                style={[
                  layouts.row,
                  layouts.justifyBetween,
                  layouts.alignedEnd,
                ]}>
                <Text style={[styles.titleText]}>Send Money</Text>
                <TouchableOpacity
                  onPress={() => {
                    setShowAll(!showAll);
                  }}>
                  {!showAll && (
                    <Text style={[styles.viewAllText]}>View All</Text>
                  )}
                  {showAll && (
                    <Text style={[styles.viewAllText]}>View less</Text>
                  )}
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={[styles.ml10]}>
            <SendMoneyList
              cardsData={detailedCardPropsArray}
              showAll={showAll}
            />
          </View>
        </View>
      )}
      <View style={styles.ph15}>
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
            {
              height: !showVisaCards ? px(260) : '65%',
              marginTop: !showVisaCards ? px(20) : px(15),
            },
          ]}>
          <TransactionHistory
            transactionitems={HistoryWithImg}
            displayImage={true}
            header="History"
            viewAll={showVisaCards ? false : true}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
