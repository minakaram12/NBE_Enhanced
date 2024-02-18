import {View, TouchableOpacity} from 'react-native';
import IconCard from '../../atoms/IconCard/IconCard';
import TopNavImg from '../../atoms/TopNavImg/TopNavImg';
import MenuTogglerSvg from '../../../assets/svgs/MenuTogglerSvg';
import BellSvg from '../../../assets/svgs/BellSvg';
import BackSvg from '../../../assets/svgs/BackSvg';
import {shadows} from '../../../constants/styles';
import {Image} from 'react-native';

interface TopNavProps {
  // onPress(): void;
  // onLongPress?: () => void;
  // buttonText: string;
  // variant?: 'primary' | 'secondary' | 'outline';
  // isLoading?: boolean;
  // disabled?: boolean;
  // buttonStyle?: StyleProp<ViewStyle> | null;
  // textStyle?: StyleProp<TextStyle> | null;
  // indicatorColor?: string | null;
  // indicatorSize?: 'small' | 'large' | number;
  // disabledStyle?: StyleProp<ViewStyle> | null;
  // disabledTextStyle?: StyleProp<TextStyle> | null;
  // iconLeft?: any;
  // iconRight?: any;
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
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
       // marginHorizontal: 15,
        marginVertical: 25,
    
        
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity onPress={onPressLeft}>
          {contentLeft}
          {/* <MenuTogglerSvg /> */}
          {/* <IconCard
            icon={BackSvg}
            containerstyle={[
              {
                borderRadius: 10,
                width: 45,
                height: 45,
                backgroundColor: '#007236',
              },
              shadows(),
            ]}
          /> */}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={onPressMiddle}>
          {/* <IconCard
          icon={BellSvg}
          containerstyle={[
            {
              borderRadius: 10,
              width: 45,
              height: 45,
              backgroundColor: '#FFFFFF',
            },
            shadows(),
          ]}
        /> */}

          {/* <TopNavImg
            name="Ahmed"
            imgUrl={require('../../../assets/images/dummyUser.png')}
          /> */}
          {contentMiddle}
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={onPressRight}>
        {/* <IconCard
          icon={BellSvg}
          containerstyle={[
            {
              borderRadius: 10,
              width: 45,
              height: 45,
              backgroundColor: '#FFFFFF',
            },
            shadows(),
          ]}
        /> */}
       {contentRight}
        {/* <Image source={require('../../../assets/images/GreenLogo.png')}></Image> */}
      </TouchableOpacity>
    </View>
  );
};

export default TopNavigator;
