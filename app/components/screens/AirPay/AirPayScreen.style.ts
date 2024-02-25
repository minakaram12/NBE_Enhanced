import {StyleSheet} from 'react-native';
import {px} from '../../../constants/styles/layouts';

const styles = StyleSheet.create({
  pageContainer: {
    backgroundColor: '#F1F3FB',
  },
  cardsTitle: {
    fontSize: px(20),
    fontFamily: 'Roboto-Bold',
    color: '#1C2437',
  },
  draggableCardContainer: {
    height: px(280),
  },
});
export default styles;
