import {px} from '../../../constants/styles/layouts';
// import {theme} from '@app/theme/theme';
import {StyleSheet} from 'react-native';
import {theme} from '../../../theme/theme';

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: theme?.BackgroundScreen,
    height: '100%',
    // paddingHorizontal: 15,
  },
  ph15: {
    paddingHorizontal: 15,
  },
  mt20: {
    marginTop: px(20),
  },
  ml10: {
    marginLeft: px(10),
  },
  cardBackground: {
    width: '100%',
    height: px(132),
    borderRadius: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
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
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },

  CreditText: {
    color: theme?.SeasaltWhite,
    fontSize: px(20),
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    includeFontPadding: false,
    flex: 1,
    marginBottom: px(8),
  },
  CreditText2: {
    color: theme?.SeasaltWhite,
    fontSize: px(20),
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    includeFontPadding: false,
    flex: 1,
    marginBottom: px(35),
    textAlign: 'center',
  },

  cardView: {
    paddingVertical: px(2),
    width: '100%',
    height: '100%',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  containerstyle: {
    width: px(50),
    height: px(50),
  },
  servicesText: {
    color: theme?.itemColor,
    fontSize: px(15),
    fontFamily: 'Roboto',
    includeFontPadding: false,
  },
  titleText: {
    color: theme?.itemColor,
    fontSize: px(18),
    fontFamily: 'Roboto',
    includeFontPadding: false,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  viewAllText: {
    color: theme?.silver,
    fontSize: px(15),
    fontFamily: 'Roboto',
    includeFontPadding: false,
    marginBottom: 2,
  },
});
export default styles;
