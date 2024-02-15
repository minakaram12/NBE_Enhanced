// import {px} from '@app/constants/styles/layouts';
// import {theme} from '@app/theme/theme';
import {screenHeight} from '../../../constants/styles/layouts';
import shadows from '../../../constants/styles/shadows';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  cardBackground: {
    width: '90%',
    height: screenHeight * 0.3,
    borderRadius: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: 'auto', // Set left margin to auto
    overflow: 'hidden',
    marginRight: 'auto',  // Set right margin to auto
  },
  cardImage: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
 
  cardContent: {
    paddingVertical: 40,
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'center', // Center the items horizontally
    alignItems: 'stretch', // Align items vertically
    marginVertical: 15,
    marginHorizontal: 10,
  },
  cardText: {
    fontSize: 16,
    marginBottom: 10,
    flex: 1, // Make each text element take up equal space horizontally
    textAlign: 'center', // Center the text horizontally
  },
  CreditText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
    includeFontPadding: false,
    flex: 1, // Make each text element take up equal space horizontally
  },

  CreditText2: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
    includeFontPadding: false,
    flex: 1, // Make each text element take up equal space horizontally
    letterSpacing: 2,
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

  detailsView: {
    flexDirection: 'column',

    alignItems: 'baseline',
    marginRight: 15,
  },
  detailsText: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'Roboto-Bold',
    includeFontPadding: false,
  },
  greyText: {
    color: '#848484',
    fontFamily: 'Roboto-Bold',
    fontSize: 15,
  },
});
export default styles;
