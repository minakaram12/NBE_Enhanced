import {View, TouchableOpacity} from 'react-native';
import {layouts} from '../../../constants/styles';
import styles from './TopNavigator.style';
interface TopNavProps {
  onPressLeft?: () => void;
  onPressMiddle?: () => void;
  onPressRight?: () => void;
  contentLeft?: any;
  contentMiddle?: any;
  contentRight?: any;
}

const TopNavigator: React.FC<TopNavProps> = ({
  onPressLeft,
  onPressMiddle,
  onPressRight,
  contentLeft,
  contentMiddle,
  contentRight,
}) => {
  return (
    <View
      style={[
        layouts.row,
        layouts.justifyBetween,
        styles.spaces,
        styles.alignCenter,
      ]}>
      <View style={[layouts.row, styles.alignCenter]}>
        <TouchableOpacity onPress={onPressLeft}>{contentLeft}</TouchableOpacity>
        {contentMiddle && (
          <TouchableOpacity onPress={onPressMiddle}>
            {contentMiddle}
          </TouchableOpacity>
        )}
      </View>
      <TouchableOpacity onPress={onPressRight}>{contentRight}</TouchableOpacity>
    </View>
  );
};

export default TopNavigator;
