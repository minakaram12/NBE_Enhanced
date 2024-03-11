import {StyleSheet} from 'react-native';
import {px} from '../../../constants/styles/layouts';
import {colors} from '../../../theme/colors';

const styles = StyleSheet.create({
  cardBox: {
    width: px(346),
    height: px(216),
    borderWidth: px(2),
    borderRadius: px(27),
    borderStyle: 'dashed',
    borderColor: colors.mainColor,
  },
  cardBoxText: {
    color: colors.mainColor,
    fontSize: px(20),
    fontWeight: '600',
    textAlign: 'center',
  },
  closeIconContainer: {
    top: -95,
    right: -165,
  },
  closeIcon: {
    width: 22,
    height: 22,
    tintColor: 'white',
  },
});
export default styles;
