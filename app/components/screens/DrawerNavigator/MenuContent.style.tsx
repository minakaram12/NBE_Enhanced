import {StyleSheet} from 'react-native';
import {px} from '../../../constants/styles/layouts';
import {theme} from '../../../theme/theme';
import {colors} from '../../../theme/colors';

export default StyleSheet.create({
  MainComponent: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',
  },

  languageButtonContainer: {
    backgroundColor: 'white',
    borderRadius: px(10),
    padding: px(10),
  },
  languageButtonText: {
    color: colors.mainColor,
    fontSize: px(16),
    fontWeight: 'bold',
  },

  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: px(5),
  },
  textStyle: {
    fontSize: px(18),
    flexDirection: 'row',
    fontFamily: 'Roboto-bold',
    color: theme?.RedCMYK,
    fontWeight: 'bold',
  },
  icon: {
    backgroundColor: theme?.IconLogoutBackground,
    width: px(30),
    height: px(30),
    marginRight: px(10),
  },
  userCard: {
    width: px(296),
    height: px(89),
    borderRadius: px(29),
    backgroundColor: theme?.btmCard,
    padding: px(10),
    marginLeft: px(10),
    marginVertical: px(10),
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: px(50),
    height: px(50),
  },
  userinfo: {
    flexDirection: 'column',
    paddingLeft: px(10),
  },
  userText: {
    color: theme?.BasicColor,
    fontSize: px(18),
    fontWeight: '500',
  },
  userPhone: {
    fontSize: px(14),
    color: theme?.BasicColor,
  },
  dots: {
    marginLeft: 296 * 0.3,
  },
});
