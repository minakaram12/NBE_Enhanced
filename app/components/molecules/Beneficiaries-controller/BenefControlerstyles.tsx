import {StyleSheet} from 'react-native';
import {theme} from '../../../theme/theme';

export const styles = StyleSheet.create({
  outerView: {
    backgroundColor: theme?.BackgroundMenu,
  },
  textStyle: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 24,
    color: theme.itemColor,
  },
});
