import {StyleSheet} from 'react-native';
import { theme } from '../../../theme/theme';
const styles = StyleSheet.create({
  container: {
    backgroundColor: theme?.BackgroundMenu,
    paddingHorizontal: 10,
    flex: 1,
  },
  headerStyle: {
    color: theme?.textColor,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 30,
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
});

export default styles;
