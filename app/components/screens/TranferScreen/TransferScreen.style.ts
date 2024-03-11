import {StyleSheet} from 'react-native';
import {theme} from '../../../theme/theme';
const styles = StyleSheet.create({
  container: {
    backgroundColor: theme?.BackgroundMenu,
    height: '100%',
  },
  headerStyle: {
    color: theme?.textColor,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 30,
    paddingHorizontal: 15,
  },
  pb40: {
    paddingBottom: 40,
  },
});

export default styles;
