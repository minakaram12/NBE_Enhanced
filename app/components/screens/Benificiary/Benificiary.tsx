import TopNavigator from '../../molecules/TopNavigator/TopNavigator';
import BackSvg from '../../../assets/svgs/BackSvg';
import AddBeneficiaries from '../../templets/AddBeneficiaries';
import IconCard from '../../atoms/IconCard/IconCard';
import {Image, View} from 'react-native';
import {layouts} from '../../../constants/styles';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {theme} from '../../../theme/theme';
import {useFocusEffect} from '@react-navigation/native';
import React from 'react';

function Beneficiary({route}) {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const HandleGoBack = () => {
    navigation.goBack();
  };
  useFocusEffect(
    React.useCallback(() => {
      console.log('addFocus is opened');
      
    }, []),
  );
  return (
    <View
      style={[
        layouts.px.lg,
        {paddingBottom: 125, backgroundColor: theme.BackgroundScreen},
      ]}>
      <TopNavigator
        onPressLeft={HandleGoBack}
        contentLeft={<IconCard icon={BackSvg} Type="back" />}
        contentRight={
          <Image source={require('../../../assets/images/GreenLogo.png')} />
        }
      />
      <AddBeneficiaries route={route} />
    </View>
  );
}

export default Beneficiary;
