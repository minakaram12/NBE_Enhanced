import {StyleSheet} from 'react-native';
import {px} from '../../../constants/styles/layouts';
import {theme} from '../../../theme/theme';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '60%',
    height: px(30),
  },
  text: {
    paddingLeft: px(8),
    fontSize: px(14),
    fontFamily: 'Roboto-Regular',
    lineHeight: px(18.75),
    color: theme?.textColorBlue,
  },
});
