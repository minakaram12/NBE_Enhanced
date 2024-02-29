import {StyleSheet} from 'react-native';
import {px} from '../../../../constants/styles/layouts';
import {theme} from '../../../../theme/theme';

export default StyleSheet.create({
  title: {
    fontFamily: 'Roboto-Bold',
    fontSize: px(20),
    color: theme?.textColorBlue,
    lineHeight: px(23.44),
  },
  caption: {
    fontFamily: 'Roboto-Regular',
    fontSize: px(16),
    color: theme?.textColorGrey,
    lineHeight: px(18.75),
  },
  highlight: {
    fontFamily: 'Roboto-Bold',
    fontSize: px(14),
    color: theme?.textColorBlue,
    lineHeight: px(16.41),
    textAlign: 'center',
  },
  text: {
    fontFamily: 'Roboto-Regular',
    fontSize: px(14),
    color: theme?.Gray,
    lineHeight: px(16.41),
    textAlign: 'center',
  },
});
