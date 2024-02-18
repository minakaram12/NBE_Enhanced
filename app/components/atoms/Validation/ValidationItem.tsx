import {View, Text} from 'react-native';
import styles from './ValidationItem.styles';
import ValidationSvg from '../../../assets/svgs/ValidationSvg';

interface ValidationItemProps {
  text: string;
  state: boolean;
}

const ValidationItem = (props: ValidationItemProps) => {
  return (
    <View style={styles.container}>
      <ValidationSvg fill={props.state ? '#007236' : '#B7B7B7'} />
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
};

export default ValidationItem;
