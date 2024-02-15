import {View} from 'react-native';
import {validationList} from '../../../Faker';
import ValidationItem from '../../atoms/Validation/ValidationItem';
import styles from './ValidationList.styles';

const ValidationList = () => {
  return (
    <View style={styles.container}>
      {validationList.map((item, index) => {
        return <ValidationItem key={index} text={item} />;
      })}
    </View>
  );
};

export default ValidationList;
