import {StyleSheet} from 'react-native';
import {theme} from '../../../theme/theme';
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },

  OuterContainer: {
    backgroundColor: theme?.BackgroundScreen,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    flexGrow: 1,
    paddingVertical: 15,
  },

  pinCodeContainer: {
    backgroundColor: theme?.InputBackgroundColor,
    marginBottom: 10,
  },

  activePinCodeContainer: {
    borderColor: theme?.DarkSpringGreen,
    borderWidth: 3,
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
    fontSize: 17,
    marginBottom: 10,
  },

  infoText: {
    color: theme?.silver,
    fontFamily: 'Roboto',
    fontSize: 17,
    fontWeight: '500',
  },

  otpTitle: {
    fontSize: 25,
  },
});

export default styles;
