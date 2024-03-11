import {StyleSheet} from 'react-native';
import {px} from '../../../constants/styles/layouts';
import {theme} from '../../../theme/theme';

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: theme?.ModalOverlay,
  },
  modalContent: {
    width: px(346),
    backgroundColor: theme?.BackgroundScreen,
    borderRadius: px(30),
  },
  imageContainer: {
    width: px(230.18),
    height: px(181.42),
  },
  modalTitle: {
    color: theme?.textColor,
    fontSize: px(20),
    fontWeight: 'bold',
  },
  modalDescription: {
    fontSize: px(16),
    color: '#7B7B7B',
  },
  modalMoney: {
    fontSize: px(40),
    fontFamily: 'Roboto-Bold',
    color: theme?.textColorBlue,
  },
  boldFont: {
    fontFamily: 'Roboto-Bold',
  },
  errorText: {
    color: '#EB001B',
  },
  cancelButtonText: {
    color: 'red',
  },
  cancelButtonStyle: {
    borderColor: 'red',
  },
});

export default styles;
