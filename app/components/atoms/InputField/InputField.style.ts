import {StyleSheet} from 'react-native';
import {px} from '../../../constants/styles/layouts';

const styles = StyleSheet.create({
  innerContainer: {
    height: px(65),
    borderRadius: px(10),
    backgroundColor: '#fff',
  },
  outlineContainer: {
    borderWidth: px(1.5),
    borderColor: '#007236',
  },
  outlineErrorContainer: {
    borderWidth: px(1.5),
    borderColor: 'red',
  },
  transparentContainer: {
    borderWidth: px(1.5),
    borderColor: 'rgba(255, 255, 255, 0.5)',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  transparentErrorContainer: {
    borderWidth: px(1.5),
    borderColor: 'red',
  },
  label: {
    fontSize: px(14),
    fontWeight: 'bold',
    color: '#007236',
  },

  input: {
    margin: 0,
    padding: 0,
    paddingVertical: px(5),
    fontSize: px(16),
  },

  icon: {
    marginVertical: px(5),
  },

  errorTextColor: {
    color: 'red',
  },
  whiteTextColor: {
    color: 'white',
  },
});

export default styles;
