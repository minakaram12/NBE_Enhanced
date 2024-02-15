import {StyleSheet} from 'react-native';
import {px} from '../../../constants/styles/layouts';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: px(148),
    height: px(30),
  },
  text: {
    paddingLeft: px(8),
    fontSize: px(14),
    fontFamily: 'Roboto-Regular',
    lineHeight: px(18.75),
    color: '#1C2437',
  },
});
