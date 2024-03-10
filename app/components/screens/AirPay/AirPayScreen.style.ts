import {StyleSheet} from 'react-native';
import {px} from '../../../constants/styles/layouts';
import {theme} from '../../../theme/theme';

const styles = StyleSheet.create({
  pageContainer: {
    backgroundColor: theme?.BackgroundScreen,
  },
  cardsTitle: {
    fontSize: px(20),
    fontFamily: 'Roboto-Bold',
    color: theme?.textColorBlue,
  },
  draggableCardContainer: {
    height: px(250),
  },
  buttonText: {
    fontFamily: 'Roboto-Bold',
  },
});
export default styles;
