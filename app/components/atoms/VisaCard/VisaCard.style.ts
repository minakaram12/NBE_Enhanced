import {StyleSheet} from 'react-native';
import {px} from '../../../constants/styles/layouts';
import { theme } from '../../../theme/theme';
const styles = StyleSheet.create({
  cardBackground: {
    padding: px(16),
    width: px(326),
    height: px(196),
  },
  cardImage: {
    resizeMode: 'cover',
    width: px(326),
    height: px(196),
  },

  cardContent: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: px(15),
    marginHorizontal: px(10),
  },
  cardText: {
    flex: 1,
    fontSize: px(14),
    marginBottom: px(10),
    textAlign: 'center',
  },
  CreditText: {
    flex: 1,
    color: theme?.white,
    fontSize: px(25),
    fontFamily: 'Roboto-Bold',
    includeFontPadding: false,
  },

  CreditText2: {
    flex: 1,
    color: theme?.white,
    fontSize: px(20),
    fontFamily: 'Gemunu-Libre',
    includeFontPadding: false,
    letterSpacing: px(2),
  },

  svgView: {
    marginRight: 0,
  },

  simView: {
    marginRight: px(5),
  },

  cardView: {
    justifyContent: 'space-around',
  },

  detailsView: {
    marginRight: px(25),
  },
  detailsText: {
    fontSize: 14,
    color: theme?.white,
    fontWeight: 'bold',
    fontFamily: 'Gemunu-Libre',
    includeFontPadding: false,
  },
  greyText: {
    color: theme?.Battleshipgray,
    fontWeight: 'bold',
    fontFamily: 'Gemunu-Libre',
    fontSize: px(14),
  },

  simWithSignalView: {
    flexDirection: 'row',
    marginStart: px(7),
  },
});
export default styles;
