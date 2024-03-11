import {View, Text, Image} from 'react-native';
import styles from './TopNavImg.style';
const TopNavImg = ({name, imgUrl}) => {
  return (
    <View style={styles.rowView}>
      <Image
        style={styles.bgView}
        // imageStyle={styles.img}
        source={imgUrl}
      />
      <View>
        <Text style={[styles.messageText]}>Good morning</Text>
        <Text style={[styles.nameText]}>{name} </Text>
      </View>
    </View>
  );
};

export default TopNavImg;
