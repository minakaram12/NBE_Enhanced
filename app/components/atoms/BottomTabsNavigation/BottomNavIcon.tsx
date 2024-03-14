import Icon from 'react-native-vector-icons/AntDesign';
import {styles} from './BottomNavStyles';
import {Text, View} from 'react-native';
import {ReactNode} from 'react';
import {layouts} from '../../../constants/styles';

interface BottomTabBarIconProps {
  focused: boolean;
  size: number;
  color: string;
  icon: ReactNode;
  name: string;
}

const BottomNavIcon: React.FC<BottomTabBarIconProps> = ({
  focused,
  size,
  color,
  icon,
  name,
}) => {
  return (
    <View style={focused ? styles.focusedStyle : styles.blurredStyle}>
      {icon}
      <View style={layouts.xCentered}>
        <IconCreditCard name={name} color={color} size={size} />
        <Text
          style={
            focused
              ? styles.NavigatorActiveTextStyle
              : styles.NavigatorInActiveTextStyle
          }>
          Air Pay
        </Text>
      </View>
    </View>
  );
};

export default BottomNavIcon;
