// import {px} from '@app/constants/styles/layouts';
// import {theme} from '@app/theme/theme';
import {screenHeight} from '../../../constants/styles/layouts';
import shadows from '../../../constants/styles/shadows';
import {StyleSheet} from 'react-native';
import {theme} from '../../../theme/theme';

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: theme?.BackgroundScreen,
    height: '100%',
  },
  cardBackground: {
    width: '92%',
    height: screenHeight * 0.18,
    borderRadius: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
    marginHorizontal: 18,
    marginBottom: 10,
  },
  cardImage: {
    resizeMode: 'stretch',
    width: '100%',
    height: '100%',
  },

  cardContent: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'center', // Center the items horizontally
    alignItems: 'center', // Align items vertically
    marginHorizontal: 5,
  },

  CreditText: {
    color: theme?.SeasaltWhite,
    fontSize: 25,
    fontFamily: 'Roboto',
    includeFontPadding: false,
    flex: 1,
    marginBottom: 20,
  },

  svgView: {
    marginRight: 1,
  },

  cardView: {
    paddingVertical: 5,
    width: '100%',
    height: '100%',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  containerstyle: {
    width: 50,
    height: 50,
  },
  servicesText: {
    color: theme?.itemColor,
    fontSize: 17,
    fontFamily: 'Roboto',
    includeFontPadding: false,
  },
  titleText: {
    color: theme?.itemColor,
    fontSize: 20,
    fontFamily: 'Roboto',
    includeFontPadding: false,
    fontWeight: 'bold',
    marginBottom: 2,
  },
});
export default styles;
