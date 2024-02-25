import {View, Text, ImageBackground, Image} from 'react-native';
import styles from './TopNavImg.style';
import { useTheme } from "../../../ContextAPI/ThemeContext";
const TopNavImg = ({name, imgUrl}) => {
  return (
    <View style={styles.rowView}>
      <Image
        style={styles.bgView}
       // imageStyle={styles.img}
        source={imgUrl}
      />
      <View>
        <Text style={[styles.messageText , {color:useTheme().isDarkMode.textColor}]}>Good morning</Text>
        <Text style={[styles.nameText , {color:useTheme().isDarkMode.textColor}]}>{name} </Text>
      </View>
    </View>
  );
};

export default TopNavImg;
