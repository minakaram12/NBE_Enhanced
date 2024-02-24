import TopNavigator from '../../molecules/TopNavigator/TopNavigator';
import BackSvg from '../../../assets/svgs/BackSvg';
import AddBeneficiaries from '../../templets/AddBeneficiaries';
import IconCard from '../../atoms/IconCard/IconCard';
import {Image, View} from 'react-native';
import { layouts } from '../../../constants/styles';

function Beneficiary({route}) {
  return (
    <View style={[layouts.px.lg,{paddingBottom: 125}]}>
      <TopNavigator
        contentLeft={<IconCard icon={BackSvg} Type="back" />}
        contentRight={
          <Image source={require('../../../assets/images/GreenLogo.png')} />
        }
      />
      <AddBeneficiaries route={route}/>
    </View>
  );
}

export default Beneficiary;
