import {StyleSheet} from 'react-native';
import {px} from '../../../constants/styles/layouts';
import {theme} from '../../../theme/theme';

export const styles = StyleSheet.create({
  title: {
    fontFamily: 'Roboto',
    fontSize: px(20),
    fontWeight: '700',
    lineHeight: 20,
    letterSpacing: 0,
    color: theme?.itemColor,
    // marginBottom: 5,
  },
  viewAllText: {
    color: theme?.silver,
    fontSize: px(15),
    fontFamily: 'Roboto',
    includeFontPadding: false,
  },
});
