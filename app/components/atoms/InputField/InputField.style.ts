import {StyleSheet} from 'react-native';
import {px} from '../../../constants/styles/layouts';
import {theme} from '../../../theme/theme';
import {colors} from '../../../theme/colors';

const styles = StyleSheet.create({
  innerContainer: {
    height: px(65),
    borderRadius: px(10),
    backgroundColor: theme?.InputBackgroundColor,
  },
  outlineContainer: {
    borderWidth: px(1.5),
    borderColor: colors.mainColor,
  },
  outlineErrorContainer: {
    borderWidth: px(1.5),
    borderColor: theme?.InputError,
  },
  transparentContainer: {
    borderWidth: px(1.5),
    borderColor: 'rgba(255, 255, 255, 0.5)',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  transparentErrorContainer: {
    borderWidth: px(1.5),
    borderColor: theme?.InputError,
  },
  label: {
    fontSize: px(14),
    fontWeight: 'bold',
    color: theme?.InputLabelColor,
  },

  input: {
    margin: 0,
    padding: 0,
    paddingVertical: px(5),
    fontSize: px(16),
    color: theme?.InputTextColor,
  },

  icon: {
    color: theme?.InputIconsColor,
  },

  errorTextColor: {
    color: theme?.InputError,
  },
  whiteTextColor: {
    color: 'white',
  },
  blackTextColor: {
    color: theme?.textColor,
  },
});

export default styles;
