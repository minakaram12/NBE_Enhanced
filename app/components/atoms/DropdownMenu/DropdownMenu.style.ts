// import {px} from '@app/constants/styles/layouts';
// import {theme} from '@app/theme/theme';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    card: {
      backgroundColor: '#ffffff',
      borderRadius: 15,
      borderWidth: 1,
      borderColor: '#eeeeee',
      overflow: 'hidden',
    },
  
    content: {
      padding: 10,
    },
    title: {
      fontSize: 17,
      fontFamily: 'Roboto-Black',
      color: '#1C2437',
    },
    dropBorder: {
      borderColor: 'transparent',
    },
    dropList: {
      fontFamily: 'Roboto-Regular',
      fontSize: 20,
      color: '#1C2437',
    },
  });
export default styles;
