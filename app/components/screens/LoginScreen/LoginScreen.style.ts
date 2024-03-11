import {StyleSheet} from 'react-native';
import {px} from '../../../constants/styles/layouts';
import {colors} from '../../../theme/colors';

const styles = StyleSheet.create({
  container: {backgroundColor: 'rgba(0, 0, 0, 0.6)'},
  languageButtonContainer: {
    backgroundColor: 'white',
    borderRadius: px(10),
    padding: px(10),
  },
  languageButtonText: {
    color: colors.mainColor,
    fontSize: px(16),
    fontWeight: 'bold',
  },
  title: {
    fontSize: px(39),
    fontWeight: 'bold',
  },
  whiteText: {color: 'white'},
  footer: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    height: px(66),
  },
  footerLinks: {
    fontSize: px(14),
    fontWeight: 'bold',
    color: '#F49322',
  },
  copyright: {
    fontSize: px(10),
  },
});

export default styles;
