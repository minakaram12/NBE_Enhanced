import {StyleSheet} from 'react-native';
import {theme} from '../../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    height: 69,
    backgroundColor: theme?.BackgroundMenu,
  },
  imageStyle: {borderRadius: 10, width: 50, height: 50, marginRight: 10},
  transactionItemStyle: {
    fontFamily: 'Roboto',
    fontSize: 18,
    lineHeight: 21.09,
    fontWeight: '400',
    color: theme?.itemColor,
  },
  dateStyle: {
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 16.41,
    color: '#B7B7B7',
  },
  transactionValue: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 21.09,
    color: theme?.itemColor,
  },
});
