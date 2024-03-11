import {StyleSheet} from 'react-native';
import {px} from '../../../../constants/styles/layouts';
import {theme} from '../../../../theme/theme';

export default StyleSheet.create({
  container: {backgroundColor: theme?.DarkSpringGreen},
  title: {
    fontFamily: 'Roboto-Bold',
    fontSize: px(30),
    color: theme?.SeasaltWhite,
    lineHeight: px(35.16),
  },
  caption: {
    fontFamily: 'Roboto-Regular',
    fontSize: px(16),
    color: theme?.SeasaltWhite,
    lineHeight: px(18.75),
  },
});
