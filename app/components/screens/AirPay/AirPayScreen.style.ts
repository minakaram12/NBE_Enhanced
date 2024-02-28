import {StyleSheet} from 'react-native';
import {px} from '../../../constants/styles/layouts';
import { theme } from '../../../theme/theme';

const styles = StyleSheet.create({
  pageContainer: {
    backgroundColor: theme.BackgroundMenu,
  },
  cardsTitle: {
    fontSize: px(20),
    fontFamily: 'Roboto-Bold',
    color: theme?.textColorBlue,
  },
  draggableCardContainer: {
    height: px(280),
  },
});
export default styles;
