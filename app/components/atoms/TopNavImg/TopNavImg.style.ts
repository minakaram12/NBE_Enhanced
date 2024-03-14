import {StyleSheet} from 'react-native';
import {theme} from '../../../theme/theme';
const styles = StyleSheet.create({
  rowView: {flexDirection: 'row', alignItems: 'center'},
  bgView: {
    borderRadius: 10,
    marginRight: 8,
    width: 45,
    height: 45,
    resizeMode: 'cover',
  },
  messageText: {fontFamily: 'Roboto-Light', color: theme?.itemColor},
  nameText: {fontFamily: 'Roboto-Bold', color: theme?.itemColor},
});

export default styles;
