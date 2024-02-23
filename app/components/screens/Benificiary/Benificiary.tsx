import TopNavigator from '../../molecules/TopNavigator/TopNavigator';
import BackSvg from '../../../assets/svgs/BackSvg';
import AddBeneficiaries from '../../templets/AddBeneficiaries';
import IconCard from '../../atoms/IconCard/IconCard';
import {Image, View} from 'react-native';
import { layouts } from '../../../constants/styles';

function Beneficiary() {
  return (
    <View style={layouts.px.lg}>
      <TopNavigator
        contentLeft={<IconCard icon={BackSvg} Type="back" />}
        contentRight={
          <Image source={require('../../../assets/images/GreenLogo.png')} />
        }
      />
      <AddBeneficiaries />
    </View>
  );
}

export default Beneficiary;