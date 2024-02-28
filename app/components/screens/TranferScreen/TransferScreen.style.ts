import {StyleSheet} from 'react-native';
import { theme } from '../../../theme/theme';
const styles = StyleSheet.create({
  container: {
    backgroundColor: theme?.BackgroundMenu,
    paddingHorizontal: 10,
    height: '100%',
  },
  headerStyle: {
    color: theme?.textColor,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 30,
    paddingHorizontal: 15,
  },
});

export default styles;
