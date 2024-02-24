import {View, Text, ImageBackground, Image} from 'react-native';
import styles from './TopNavImg.style';
import { useTheme } from '../../../ContextAPI/ThemeContext';
const TopNavImg = ({name, imgUrl}) => {
  return (
    <View style={styles.rowView}>
      <Image
        style={styles.bgView}
       // imageStyle={styles.img}
        source={imgUrl}
      />
      <View>
        <Text style={[styles.messageText,{color:useTheme().isDarkMode.itemColor}]}>Good morning</Text>
        <Text style={[styles.nameText,{color:useTheme().isDarkMode.itemColor}]}>{name} </Text>
      </View>
    </View>
  );
};

export default TopNavImg;
