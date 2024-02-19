import {StyleSheet} from 'react-native';

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
  messageText: {fontFamily: 'Roboto-Light', color: '#000000'},
  nameText: {fontFamily: 'Roboto-Bold', color: '#000000'},
});

export default styles;
