import {StyleSheet} from 'react-native';
import {theme} from '../../../theme/theme';
import {px} from '../../../constants/styles/layouts';
const styles = StyleSheet.create({
  container: {
    paddingVertical: px(9),
    paddingHorizontal: px(3),
  },

  OuterContainer: {
    backgroundColor: theme?.BackgroundScreen,
    paddingHorizontal: px(9),
    justifyContent: 'space-between',
    flexGrow: 1,
    paddingVertical: px(14),
  },

  pinCodeContainer: {
    backgroundColor: theme?.InputBackgroundColor,
    marginBottom: px(9),
  },

  activePinCodeContainer: {
    borderColor: theme?.DarkSpringGreen,
    borderWidth: px(2),
  },

  pinCodeText: {
    color: theme?.InputTextColor,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
  timerText: {
    color: theme?.textColor,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: px(16),
  },

  infoText: {
    fontFamily: 'Roboto-Regular',
    fontSize: px(16),
    color: theme?.textColorGrey,
    lineHeight: px(18),
  },

  otpTitle: {
    fontFamily: 'Roboto-Bold',
    fontSize: px(20),
    color: theme?.textColorBlue,
    lineHeight: px(23),
  },
});

export default styles;
