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
    top: -115,
    right: -185,
    backgroundColor:'black',
    padding:10,
    borderRadius:15
  },
  closeIcon: {
    width: 15,
    height: 15,
    tintColor: 'white',
   
  },
});
export default styles;
