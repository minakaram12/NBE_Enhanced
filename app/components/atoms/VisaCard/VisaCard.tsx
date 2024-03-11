import {View, Text, ImageBackground} from 'react-native';
import VisaSvg from '../../../assets/svgs/VisaSvg';
import SimSvg from '../../../assets/svgs/SimSvg';
import styles from './VisaCard.style';
import SignalsSvg from '../../../assets/svgs/SignalsSvg';

import GreenCard from '../../../assets/images/green_card.png';
import RedCard from '../../../assets/images/red_card.png';

export interface VisaCardProps {
  amount: string;
  card_num: number;
  name: string;
  accType: string;
  date: string;
  cvv: string;
}

const VisaCard: React.FC<VisaCardProps> = ({
  amount,
  card_num,
  name,
  accType = 'normal',
  date,
  cvv,
}) => {
  return (
    <ImageBackground
      source={accType === 'normal' ? GreenCard : RedCard}
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
