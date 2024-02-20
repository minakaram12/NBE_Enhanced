import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { screenHeight } from '../../../constants/styles/layouts';
import shadows from '../../../constants/styles/shadows';
import VisaSvg from '../../../assets/svgs/VisaSvg';
import SimSvg from '../../../assets/svgs/SimSvg';
import styles from './VisaCard.style';
import SignalsSvg from '../../../assets/svgs/SignalsSvg';

interface VisaCardProps {
  amount: string;
  card_num: number;
  name: string;
  accType: string;
  date: string;
  cvv: string;
}

// eslint-disable-next-line prettier/prettier
const VisaCard: React.FC<VisaCardProps> = ({
  amount,
  card_num,
  name,
  accType,
  date,
  cvv,
}) => {
  let imgUrl = require('../../../assets/images/green_card.png');
  if (accType === 'premium') {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    imgUrl = require('../../../assets/images/red_card.png');
  } else if (accType === 'normal') {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    imgUrl = require('../../../assets/images/green_card.png');
  }
  return (
    <ImageBackground
      source={imgUrl} // Replace 'visa_card_bg.jpg' with the path to your image
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
            <SignalsSvg />
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
