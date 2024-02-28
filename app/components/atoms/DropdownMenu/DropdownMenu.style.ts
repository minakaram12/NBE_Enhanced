// import {px} from '@app/constants/styles/layouts';
// import {theme} from '@app/theme/theme';
import {StyleSheet} from 'react-native';
import { theme } from '../../../theme/theme';
const styles = StyleSheet.create({
  card: {
    backgroundColor: theme?.white,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: theme?.cardBorder,
    overflow: 'hidden',
  },

  content: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  title: {
    fontSize: 15,
    fontFamily: 'Roboto-Black',
    color: theme?.OxfordBlue,
    paddingTop: 5,
  },
  dropBorder: {
    borderColor: 'transparent',
    paddingTop: 7,
  },
  dropList: {
    fontFamily: 'Roboto-Regular',
    fontSize: 15,
    color: theme?.OxfordBlue,
  },

  dropStyle: {
    borderColor: theme?.DarkSpringGreen,
    borderWidth: 3,
    borderStyle: 'solid',
  },
  FocusStyle: {
    borderColor: theme?.DarkSpringGreen,
  },
  BlurStyle: {
    borderColor: theme?.cardBorder,
  },
});
export default styles;
