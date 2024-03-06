import {StyleSheet} from 'react-native';
import {px} from '../../../constants/styles/layouts';
import {theme} from '../../../theme/theme';

const styles = StyleSheet.create({
  pageContainer: {
    backgroundColor: theme?.BackgroundMenu,
  },
  cardsTitle: {
    fontSize: px(20),
    fontFamily: 'Roboto-Bold',
    color: theme?.textColorBlue,
  },
  draggableCardContainer: {
    height: px(250),
  },
  buttonText: {
    fontFamily: 'Roboto-Bold',
  },

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
