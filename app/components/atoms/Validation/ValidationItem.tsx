import {View, Text} from 'react-native';
import styles from './ValidationItem.styles';
import ValidationSvg from '../../../assets/svgs/ValidationSvg';
import {theme} from '../../../theme/theme';

interface ValidationItemProps {
  text: string;
  state: boolean;
}

const ValidationItem = (props: ValidationItemProps) => {
  return (
    <View style={styles.container}>
      <ValidationSvg
        fill={props.state ? theme.DarkSpringGreen : theme.textColorGrey}
      />
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
};

export default ValidationItem;
