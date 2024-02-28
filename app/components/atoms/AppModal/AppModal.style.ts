import {StyleSheet} from 'react-native';
import {px} from '../../../constants/styles/layouts';
import {theme} from '../../../theme/theme';

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: theme?.ModalOverlay,
    width: '100%',
    height: '100%',
  },
  modalContent: {
    width: '90%',
    backgroundColor: theme?.BackgroundScreen,
    borderRadius: 30,
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
  modalMony: {
    fontSize: px(40),
    fontWeight: 'bold',
    color: theme?.textColorBlue,
  },
  boldFont: {
    fontWeight: 'bold',
  },
  errorText: {
    color: '#EB001B',
  },
});

export default styles;
