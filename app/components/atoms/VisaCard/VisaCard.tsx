import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import {screenHeight} from '../../../constants/styles/layouts';
import shadows from '../../../constants/styles/shadows';
import VisaSvg from '../../../assets/svgs/VisaSvg';
import SimSvg from '../../../assets/svgs/SimSvg';
import styles from './VisaCard.style';
import SignalsSvg from '../../../assets/svgs/SignalsSvg';

const VisaCard = ({amount, card_num, name, date, cvv, imgName}) => {
  return (
    <ImageBackground
    source={require(`../../../assets/images/green_card.png`)} // Replace 'visa_card_bg.jpg' with the path to your image
      style={styles.cardBackground}
      imageStyle={styles.cardImage}>
      <View style={styles.cardView}>
        <View style={styles.cardContent}>
          <Text style={styles.CreditText}>${amount}</Text>
          <View style={styles.svgView}>
            <VisaSvg />
            
          </View>
        </View>
        <View style={styles.cardContent}>
          <Text style={styles.CreditText2}>**** **** **** {card_num}</Text>
          <View style={styles.simWithSignalView}>
            <SimSvg style={styles.simView} />
            <SignalsSvg/>
          </View>
        </View>
        <View style={styles.cardContent}>
          <View style={styles.detailsView}>
            <Text style={styles.greyText}>CARD HOLDER</Text>
            <Text style={styles.detailsText}>{name}</Text>
          </View>
          <View style={styles.detailsView}>
            <Text style={styles.greyText}>EXPIRES</Text>
            <Text style={styles.detailsText}>{date}</Text>
          </View>
          <View style={styles.detailsView}>
            <Text style={styles.greyText}>CVV</Text>
            <Text style={styles.detailsText}>{cvv}</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};



export default VisaCard;
