import {StyleSheet} from 'react-native';
import {px} from '../../../constants/styles/layouts';

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    width: '100%',
    height: '100%',
  },
  modalContent: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 30,
  },
  blackText: {
    color: 'black',
  },
  imageContainer: {
    width: px(230.18),
    height: px(181.42),
  },

  modalTitle: {
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
    color: '#1C2437',
  },
  boldFont: {
    fontWeight: 'bold',
  },
  errorText: {
    color: '#EB001B',
  },
});

export default styles;
