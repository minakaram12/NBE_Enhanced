import {StyleSheet} from 'react-native';
import {theme} from '../../theme/theme';

export const styles = StyleSheet.create({
  cameraView: {width: 138, height: 138, borderRadius: 30},
  camImg: {width: 40, height: 40},
  scrollViewContent: {flexGrow: 1},
  formicContainer: {backgroundColor: theme.BackgroundMenu},
  generalError: {
    color: 'red',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  dropDownCustomStyle: {
    marginTop: 15,
    marginLeft: 0,
    marginRight: 0,
    elevation: 0,
  },
  buttonStyle: {marginTop: 30, height: 50},
  inputField: {height: 65, elevation: 15},
  image: {width: 138, height: 138, borderRadius: 30},
  container: {paddingBottom: 80},
  SiblingsInput: {marginTop: 20},
});
