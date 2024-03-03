import {StyleSheet} from 'react-native';
import { theme } from '../../../theme/theme';
const styles = StyleSheet.create({
  rowView: {flexDirection: 'row', alignItems: 'center'},
  bgView: {
    borderRadius: 10,
    margin: 6,
    width: 45,
    height: 45,
    resizeMode:'cover'
  },
 // img: {resizeMode: 'cover', width: '100%', height: '100%', borderRadius: 10},
  messageText: {fontFamily: 'Roboto-Light', color: theme?.itemColor},
  nameText: {fontFamily: 'Roboto-Bold', color: theme?.itemColor},
});

export default styles;
