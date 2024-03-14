import {View} from 'react-native';
import ValidationItem from '../../atoms/Validation/ValidationItem';
import styles from './ValidationList.styles';
import {ValidationListProps} from '../../../Faker/Faker';

const ValidationList = (props: {validationList: ValidationListProps[]}) => {
  return (
    <View style={styles.container}>
      {props.validationList.map((item, index) => {
        return (
          <ValidationItem key={index} text={item.text} state={item.state} />
        );
      })}
    </View>
  );
};

export default ValidationList;
