import {View, TouchableOpacity} from 'react-native';
import IconCard from '../../atoms/IconCard/IconCard';
import TopNavImg from '../../atoms/TopNavImg/TopNavImg';
import MenuTogglerSvg from '../../../assets/svgs/MenuTogglerSvg';
import BellSvg from '../../../assets/svgs/BellSvg';
import BackSvg from '../../../assets/svgs/BackSvg';
import {colors, shadows} from '../../../constants/styles';
import {Image} from 'react-native';
import {useTheme} from '../../../ContextAPI/ThemeContext';
import {theme} from '../../../theme/theme';

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
    // eslint-disable-next-line react/react-in-jsx-scope
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // marginHorizontal: 15,
        marginVertical: 25,
        // backgroundColor:theme.BackgroundMenu,
       // backgroundColor:theme.BackgroundMenu,
        height: 40,
        // backgroundColor: colors.transparent,
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
        {contentMiddle && (
          <TouchableOpacity onPress={onPressMiddle}>
            {contentMiddle}
          </TouchableOpacity>
        )}
      </View>
      <TouchableOpacity onPress={onPressRight}>
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
