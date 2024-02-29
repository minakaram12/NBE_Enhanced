import {StyleSheet} from 'react-native';
import {px} from '../../../../constants/styles/layouts';
import {theme} from '../../../../theme/theme';

export default StyleSheet.create({
  title: {
    fontSize: px(20),
    fontFamily: 'Roboto-Bold',
    color: theme?.textColorBlue,
    lineHeight: px(23.44),
  },
  caption: {
    fontSize: px(16),
    fontFamily: 'Roboto-Regular',
    color: theme?.textColorGrey,
    lineHeight: px(18.75),
  },
});
