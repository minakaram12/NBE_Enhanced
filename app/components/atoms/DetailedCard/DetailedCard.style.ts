import {StyleSheet} from 'react-native';
import {theme} from '../../../theme/theme';
import { px } from '../../../constants/styles/layouts';

const styles = StyleSheet.create({
  detailedCardImage: {
    width: 59,
    height: 59,
  },
  innerIconContainer: {
    width: px(16),
    height: px(16),
    backgroundColor: '#E5E5E5',
    borderRadius: px(9),
    marginRight: px(5),
  },
  innerIcon: {
    width: px(12),
    height: px(12),
    fontSize: px(12),
  },
  cardTitle: {
    fontFamily: 'Roboto-Medium',
    fontWeight: '700',
    fontSize: 14,
    color: '#1C2437',
  },
  cardInformation: {
    fontFamily: 'Roboto-Medium',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 14.06,
    color: '#B7B7B7',
  },
  cardRadious: {
    borderRadius: 18,
    backgroundColor: theme.BackgroundStatus,
    borderColor: 'white',
  },
  itemColor: {color: theme?.itemColor},
});

export default styles;
