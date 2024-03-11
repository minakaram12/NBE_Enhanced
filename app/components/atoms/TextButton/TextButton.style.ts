import {StyleSheet} from 'react-native';
import {px} from '../../../constants/styles/layouts';
import {colors} from '../../../theme/colors';

const styles = StyleSheet.create({
  text: {
    color: colors.mainColor,
    fontSize: px(16),
    fontWeight: 'bold',
  },
  underlinedText: {textDecorationLine: 'underline'},
});

export default styles;
