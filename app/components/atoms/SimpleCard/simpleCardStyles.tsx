import {StyleSheet} from 'react-native';
import {px} from '../../../constants/styles/layouts';
import {theme} from '../../../theme/theme';

export const styles = StyleSheet.create({
  simpleCardContainer: {
    aspectRatio: 0.89,
    width: px(70),
    marginTop: 5,
    marginHorizontal: 5,
    marginBottom: 2,
    backgroundColor: '#ffffff',
    borderRadius: 18,
  },
  simpleCardImage: {
    width: '50%',
    height: undefined,
    aspectRatio: 1,
    borderRadius: 8,
    resizeMode: 'contain',
    marginBottom: 4,
  },
  simpleCardText: {
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 16.41,
    textAlign: 'center',
    color: theme?.BasicColor,
  },
});
