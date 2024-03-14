import {View, Text, Image, ImageSourcePropType} from 'react-native';
import styles from './TopNavImg.style';
const TopNavImg = ({
  name,
  imgUrl,
}: {
  name: string;
  imgUrl: ImageSourcePropType | undefined;
}) => {
  return (
    <View style={styles.rowView}>
      <Image style={styles.bgView} source={imgUrl} />
      <View>
        <Text style={[styles.messageText]}>Good morning</Text>
        <Text style={[styles.nameText]}>{name} </Text>
      </View>
    </View>
  );
};

export default TopNavImg;
