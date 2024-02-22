import {StyleSheet} from 'react-native';
import {px} from '../../../constants/styles/layouts';

const styles = StyleSheet.create({
  pageContainer: {
    backgroundColor: '#F1F3FB',
  },
  cardsTitle: {
    fontSize: px(20),
    fontFamily: 'Roboto-Bold',
    color: '#1C2437',
  },
  cardBox: {
    // width: '93%',
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

  draggableCardContainer: {
    height: px(250),
  },
});
export default styles;
