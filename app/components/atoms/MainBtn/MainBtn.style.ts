import {StyleSheet} from 'react-native';
import {px} from '../../../constants/styles/layouts';
import {colors} from '../../../theme/colors';

const styles = StyleSheet.create({
  // Button Style
  button: {
    height: px(50),
  },
  primaryButton: {
    backgroundColor: colors.mainColor,
  },
  secondaryButton: {
    backgroundColor: '#fff',
    shadowColor: colors.mainColor,
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 12.5,
    shadowOffset: {width: 1, height: 13},
  },
  outlineButton: {
    borderWidth: 1,
    borderColor: colors.mainColor,
  },
  disabledButton: {
    backgroundColor: 'grey',
  },

  // Text Style
  text: {
    fontSize: px(18),
    textAlign: 'center',
  },
  primaryText: {
    color: '#fff',
  },
  secondaryText: {
    color: colors.mainColor,
  },
  outlineText: {
    color: colors.mainColor,
  },
});

export default styles;
