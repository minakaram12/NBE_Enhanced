import {StyleSheet} from 'react-native';
import {px} from '../../../constants/styles/layouts';

const styles = StyleSheet.create({
  // Button Style
  button: {
    height: px(50),
  },
  primaryButton: {
    backgroundColor: '#007236',
  },
  secondaryButton: {
    backgroundColor: '#fff',
    shadowColor: '#007236',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 12.5,
    shadowOffset: {width: 1, height: 13},
  },
  outlineButton: {
    borderWidth: 1,
    // borderColor: '#EB001B',
    borderColor: '#007236',
  },
  disabledButton: {
    backgroundColor: 'grey',
  },

  // Text Style
  text: {
    fontSize: px(18),
    textAlign: 'center',
  },
  primaryText: {
    color: '#fff',
  },
  secondaryText: {
    color: '#007236',
  },
  outlineText: {
    // color: '#EB001B',
    color: '#007236',
  },
});

export default styles;
