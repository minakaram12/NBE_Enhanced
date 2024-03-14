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
    width: px(19),
    height: px(19),
    position: 'absolute',
    top: px(-2),
    left: px(-2),
    backgroundColor: '#DBDBDB',
    borderRadius: px(6),
    borderWidth: px(2),
    borderColor: 'white',
  },
  focusedFingerIcon: {
    backgroundColor: '#F6A721',
  },
});
