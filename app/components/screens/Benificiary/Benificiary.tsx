import TopNavigator from '../../molecules/TopNavigator/TopNavigator';
import BackSvg from '../../../assets/svgs/BackSvg';
import AddBeneficiaries from '../../templets/AddBeneficiaries';
import IconCard from '../../atoms/IconCard/IconCard';
import {View} from 'react-native';
import {layouts} from '../../../constants/styles';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useFocusEffect} from '@react-navigation/native';
import React from 'react';
import {addBenefprops} from '../../atoms/BeneficiaryStack/navigationinfo';
import {styles} from './Benegstyles';
import NamedLogo from '../../../assets/svgs/NamedLogo';
import Logo from '../../../assets/svgs/Logo';

function Beneficiary({route}: addBenefprops) {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const HandleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={[layouts.px.lg, styles.outerView]}>
      <TopNavigator
        onPressLeft={HandleGoBack}
        contentLeft={<IconCard icon={BackSvg} Type="back" />}
        contentRight={
          <View style={[layouts.flexed, layouts.row, layouts.ms.xl]}>
            <NamedLogo
              width={130}
              height={40}
              containerStyle={[layouts.me.md]}
            />
            <Logo width={34} height={40} />
          </View>
        }
      />
      <AddBeneficiaries route={route} navigation={useNavigation()} />
    </View>
  );
}

export default Beneficiary;
