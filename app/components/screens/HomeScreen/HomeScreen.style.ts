// import {px} from '@app/constants/styles/layouts';
// import {theme} from '@app/theme/theme';
import {screenHeight} from '../../../constants/styles/layouts';
import shadows from '../../../constants/styles/shadows';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  cardBackground: {
    width: '100%',
    height: screenHeight * 0.25,
    borderRadius: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
    overflow: 'hidden',
    marginHorizontal: 18,
  },
  cardImage: {
    resizeMode: 'stretch',
    width: '100%',
    height: '100%',
    opacity: 0.85,
  },

  cardContent: {
    paddingHorizontal: 25,
    flexDirection: 'row',
    justifyContent: 'center', // Center the items horizontally
    alignItems: 'center', // Align items vertically
    marginVertical: 10,
    marginHorizontal: 15,
  },

  CreditText: {
    color: '#F7F7F7',
    fontSize: 20,
    fontFamily: 'Roboto',
    includeFontPadding: false,
    flex: 1,
    marginBottom: 20,
  },

  svgView: {
    marginRight: 30,
  },

  cardView: {
    paddingVertical: 30,
    width: '100%',
    height: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  containerstyle: {
    width: 60,
    height: 60,
  },
  servicesText: {
    // color: '#1C2437',
    fontSize: 17,
    fontFamily: 'Roboto',
    includeFontPadding: false,
  },
  titleText: {
    // color: '#1C2437',
    fontSize: 20,
    fontFamily: 'Roboto',
    includeFontPadding: false,
    fontWeight: 'bold',
    marginBottom: 0,
  },
});
export default styles;
