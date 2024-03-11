import TopNavigator from '../../molecules/TopNavigator/TopNavigator';
import BackSvg from '../../../assets/svgs/BackSvg';
import AddBeneficiaries from '../../templets/AddBeneficiaries';
import IconCard from '../../atoms/IconCard/IconCard';
import {Image, View} from 'react-native';
import {layouts} from '../../../constants/styles';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useFocusEffect} from '@react-navigation/native';
import React from 'react';
import {addBenefprops} from '../../atoms/BeneficiaryStack/navigationinfo';
import {styles} from './Benegstyles';

function Beneficiary({route}: addBenefprops) {
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
    <View style={[layouts.px.lg, styles.outerView]}>
      <TopNavigator
        onPressLeft={HandleGoBack}
        contentLeft={<IconCard icon={BackSvg} Type="back" />}
        contentRight={
          <Image source={require('../../../assets/images/GreenLogo.png')} />
        }
      />
      <AddBeneficiaries route={route} navigation={useNavigation()} />
    </View>
  );
}

export default Beneficiary;
