import {StyleSheet} from 'react-native';
import {px} from '../../../constants/styles/layouts';

const styles = StyleSheet.create({
  cardBox: {
    width: px(346),
    height: px(216),
    borderWidth: px(2),
    borderRadius: px(27),
    borderStyle: 'dashed',
    borderColor: '#007236',
  },
  cardBoxText: {
    color: '#007236',
    fontSize: px(20),
    fontWeight: '600',
    textAlign: 'center',
  },
});
export default styles;
