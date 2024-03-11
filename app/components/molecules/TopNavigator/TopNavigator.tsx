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
  routeName?:string;
}

const TopNavigator: React.FC<TopNavProps> = ({
  onPressLeft,
  onPressMiddle,
  onPressRight,
  contentLeft,
  contentMiddle,
  contentRight,
  routeName,
}) => {
  return (
    <View
      style={[
        layouts.row,
        layouts.justifyBetween,
        styles.spaces,
        styles.alignCenter,
        {position:routeName==="Screen4"?"absolute":"relative",
        zIndex:routeName==="Screen4"?1:0,}
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
