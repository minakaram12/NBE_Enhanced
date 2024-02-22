import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import MainBtn from '../../atoms/MainBtn/MainBtn';
import {shadows} from '../../../constants/styles';


import TopNavigator from '../../molecules/TopNavigator/TopNavigator';
import IconCard from '../../atoms/IconCard/IconCard';
import MenuTogglerSvg from '../../../assets/svgs/MenuTogglerSvg';
import TopNavImg from '../../atoms/TopNavImg/TopNavImg';
import BellSvg from '../../../assets/svgs/BellSvg';

const HomeScreen = () => {
  return (
    <View
      style={{
        backgroundColor: '#F1F3FB',
        paddingHorizontal: 20,
        paddingVertical:10,
        flex: 1,
      }}>
      <TopNavigator
        contentLeft={<MenuTogglerSvg />}
        contentMiddle={
          <TopNavImg
            name="Ahmed"
            imgUrl={require('../../../assets/images/dummyUser.png')}
          />
        }
        contentRight={<IconCard icon={BellSvg} Type="Notification" />}
      />
    </View>
  );
};

export default HomeScreen;
