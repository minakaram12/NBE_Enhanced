import {View, Text} from 'react-native';
import styles from './ValidationItem.styles';
import ValidationSvg from '../../../assets/svgs/ValidationSvg';

interface ValidationItemProps {
  text: string;
}

const ValidationItem = (props: ValidationItemProps) => {
  return (
    <View style={styles.container}>
      <ValidationSvg />
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
};

export default ValidationItem;
