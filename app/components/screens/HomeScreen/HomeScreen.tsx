import React, {useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {layouts, shadows} from '../../../constants/styles';
import TopNavigator from '../../molecules/TopNavigator/TopNavigator';
import IconCard from '../../atoms/IconCard/IconCard';
import MenuTogglerSvg from '../../../assets/svgs/MenuTogglerSvg';
import TopNavImg from '../../atoms/TopNavImg/TopNavImg';
import BellSvg from '../../../assets/svgs/BellSvg';
import VisaCardList from '../../molecules/VisaCardList/VisaCardList';
import OutlinedFingerPrintSvg from '../../../assets/svgs/OutlinedFingerPrintSvg';
import AccountsSvg from '../../../assets/svgs/AccountsSvg';
import CardsSvg from '../../../assets/svgs/CardsSvg';
import UtilitiesSvg from '../../../assets/svgs/UtilitiesSvg';
import HistorySvg from '../../../assets/svgs/HistorySvg';
import TranactionHistory from '../../templets/TransactionHistory/TransactionHistory.componet';
import styles from './HomeScreen.style';

import {visaCardsData} from '../../../Faker';
import {GestureHandlerRootView, ScrollView} from 'react-native-gesture-handler';
import SimpleCardList from '../../molecules/SimpleCardList/SimpleCardList';
import {simpleCardsArray} from '../../molecules/SimpleCardList/simpleCardListFaker';
import SendMoneyList from '../../molecules/SendMoneyList/SendMoneyList';
import DrawerMenu from '../DrawerNavigator/DrawerMenu';
import TransactionCard from '../../atoms/Transactioncard/TransactionCard.component';
import {ThemeProvider, useTheme} from '../../../ContextAPI/ThemeContext';
// import {useTheme} from '../../../ContextAPI/ThemeContext';
const historyWithImg = [
  {
    transactionItem: 'Carrefour',
    date: new Date('2024-02-20'),
    transactionValue: 50.25,
    image: require('../../../assets/images/carrefour.png'),
  },
  {
    transactionItem: 'Amazon',
    date: new Date('2024-02-18'),
    transactionValue: 35.8,
    image: require('../../../assets/images/amazon.png'),
  },
  {
    transactionItem: 'Dinner',
    date: new Date('2024-02-15'),
    transactionValue: 70.5,
    image: require('../../../assets/images/profimg.jpg'),
  },
  {
    transactionItem: 'Jumia',
    date: new Date('2024-02-15'),
    transactionValue: 70.5,
    image: require('../../../assets/images/jumia.png'),
  },
  {
    transactionItem: 'Hala',
    date: new Date('2024-02-15'),
    transactionValue: 70.5,
    image: require('../../../assets/images/profimg.jpg'),
  },
  {
    transactionItem: 'Hala',
    date: new Date('2024-02-15'),
    transactionValue: 70.5,
    image: require('../../../assets/images/hala.png'),
  },
  {
    transactionItem: 'Hala',
    date: new Date('2024-02-15'),
    transactionValue: 70.5,
    image: require('../../../assets/images/profimg.jpg'),
  },
  {
    transactionItem: 'Hala',
    date: new Date('2024-02-15'),
    transactionValue: 70.5,
    image: require('../../../assets/images/profimg.jpg'),
  },
  {
    transactionItem: 'roshdy',
    date: new Date('2024-02-15'),
    transactionValue: 70.5,
    image: require('../../../assets/images/profimg.jpg'),
  },
];

const history = [
  {
    transactionItem: 'Carrefour',
    date: new Date('2024-02-20'),
    transactionValue: 50.25,
  },
  {
    transactionItem: 'Amazon',
    date: new Date('2024-02-18'),
    transactionValue: 35.8,
  },
  {
    transactionItem: 'Dinner',
    date: new Date('2024-02-15'),
    transactionValue: 70.5,
  },
  {
    transactionItem: 'Jumia',
    date: new Date('2024-02-15'),
    transactionValue: 70.5,
  },
  {
    transactionItem: 'Hala',
    date: new Date('2024-02-15'),
    transactionValue: 70.5,
  },
  {
    transactionItem: 'Hala',
    date: new Date('2024-02-15'),
    transactionValue: 70.5,
  },
  {
    transactionItem: 'Hala',
    date: new Date('2024-02-15'),
    transactionValue: 70.5,
  },
  {
    transactionItem: 'Hala',
    date: new Date('2024-02-15'),
    transactionValue: 70.5,
  },
  {
    transactionItem: 'roshdy',
    date: new Date('2024-02-15'),
    transactionValue: 70.5,
  },
];

const HomeScreen = () => {
  const [showVisaCards, setShowVisaCards] = useState(false);
  // const {isDarkMode, toggleSwitch} = useTheme();
  return (
    <DrawerMenu
      children={
        <View
          style={[
            {
              backgroundColor: useTheme().isDarkMode.BackgroundMenu,
              height: '100%',
            },
          ]}>
          {!showVisaCards && (
            <View>
              {/* balaance */}
              <TouchableOpacity onPress={() => setShowVisaCards(true)}>
                <ImageBackground
                  source={require('../../../assets/images/green_card.png')} // Replace 'visa_card_bg.jpg' with the path to your image
                  style={styles.cardBackground}
                  imageStyle={styles.cardImage}>
                  <View style={styles.cardView}>
                    <View style={styles.cardContent}>
                      <Text style={styles.CreditText}>Balance</Text>
                      <View style={styles.svgView}>
                        <OutlinedFingerPrintSvg />
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
                <TouchableOpacity style={[layouts.allCentered]}>
                  <IconCard
                    icon={AccountsSvg}
                    containerstyle={[
                      {
                        backgroundColor: '#00C974',
                      },
                      shadows(),
                      styles.containerstyle,
                    ]}
                  />
                  <Text style={styles.servicesText}>Accounts</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[layouts.allCentered]}>
                  <IconCard
                    icon={CardsSvg}
                    containerstyle={[
                      {
                        backgroundColor: '#00ADF8',
                      },
                      shadows(),
                      styles.containerstyle,
                    ]}
                  />
                  <Text style={styles.servicesText}>Cards</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[layouts.allCentered]}>
                  <IconCard
                    icon={UtilitiesSvg}
                    containerstyle={[
                      {
                        backgroundColor: '#F6A721',
                      },
                      shadows(),
                      styles.containerstyle,
                    ]}
                  />
                  <Text style={styles.servicesText}>Utilities</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[layouts.allCentered]}>
                  <IconCard
                    icon={HistorySvg}
                    containerstyle={[
                      {
                        backgroundColor: '#FF002E',
                      },
                      shadows(),
                      styles.containerstyle,
                    ]}
                  />
                  <Text style={styles.servicesText}>History</Text>
                </TouchableOpacity>
              </View>
              {/* {marginTop: 30,marginLeft:10} */}
              <View style={[layouts.mt.xxxl, layouts.ms.sm, layouts.px.mlg]}>
                <Text style={styles.titleText}>Send Money</Text>
                {/* <SimpleCardList cards={simpleCardsArray} />  */}
                {/* <SendMoneyList cards={simpleCardsArray} /> */}
              </View>
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

          {/* <View style={[layouts.mt.xxxl, layouts.ms.sm, layouts.px.mlg]}>
  <Text style={styles.titleText}>History</Text>
</View> */}
          {/* <GestureHandlerRootView style={{flex: 1}}>
        <ScrollView> */}
          <View style={[[layouts.mt.xxxl, layouts.mx.xl], {height: '100%'}]}>
            <TranactionHistory
              transactionitems={historyWithImg}
              displayImage={true}
            />
          </View>
          {/* </ScrollView>
      </GestureHandlerRootView> */}
        </View>
      }
    />
  );
};

export default HomeScreen;
