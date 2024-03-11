import {StyleSheet} from 'react-native';
import {px} from '../../../constants/styles/layouts';
import {theme} from '../../../theme/theme';

export const styles = StyleSheet.create({
  focusedStyle: {
    backgroundColor: '#007236',
    width: px(70),
    height: px(70),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: px(15),
    marginVertical: px(10),
  },
  blurredStyle: {
    backgroundColor: theme?.blurredTabColor,
    width: px(70),
    height: px(70),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: px(15),
    marginVertical: px(10),
  },
  NavigatorActiveTextStyle: {
    fontFamily: 'Roboto',
    fontSize: px(10),
    lineHeight: px(16),
    textAlign: 'center',
    color: '#F7F7F7',
  },
  NavigatorInActiveTextStyle: {
    fontFamily: 'Roboto',

    fontSize: px(10),
    lineHeight: px(16),
    textAlign: 'center',
    color: '#B7B7B7',
  },
  smallIcon: {
    width: px(11),
    height: px(11),
    position: 'absolute',
    top: px(4),
    left: px(4),
  },
});
