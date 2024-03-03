import {StyleSheet} from 'react-native';
import {px} from '../../../constants/styles/layouts';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    maxHeight: px(110),
    width: px(362),
    alignContent: 'space-between',
  },
});
