import {StyleSheet} from 'react-native';
import {px} from '../../../constants/styles/layouts';
import {theme} from '../../../theme/theme';

const styles = StyleSheet.create({
  container: {
    paddingVertical: px(9),
  },
  iconCard: {
    borderRadius: 10,
    marginLeft: px(0),
  },
  langCard: {
    backgroundColor: theme?.BottomTab,
  },
  backCard: {
    backgroundColor: theme?.DarkSpringGreen,
  },
  bellCard: {backgroundColor: '#E5E5E5'},
});

export default styles;
