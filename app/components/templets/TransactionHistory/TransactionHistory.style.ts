import {StyleSheet} from 'react-native';
import {theme} from '../../../theme/theme';
import {px} from '../../../constants/styles/layouts';

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Roboto',
    fontSize: px(20),
    fontWeight: '700',
    lineHeight: 20,
    letterSpacing: 0,
    color: theme?.itemColor,
  },
  viewAllText: {
    color: theme?.silver,
    fontSize: px(15),
    fontFamily: 'Roboto',
    includeFontPadding: false,
  },
});

export default styles;
