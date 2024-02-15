import DropdownMenu from '../../atoms/DropdownMenu/DropdownMenu';
import {View} from 'react-native';
import VisaCard from '../../atoms/VisaCard/VisaCard';
import SimSvg from '../../../assets/svgs/SimSvg';

const transferType = [
  {key: '1', value: 'Between your accounts'},
  {key: '2', value: 'from your account to different account'},
  {key: '3', value: 'from debit to credit'},
];

const transferFrom = [
  {key: '1', value: '042-653214521245 - $1,145,5874.25'},
  {key: '2', value: '042-653214521245 - $2,145,5874.25'},
  {key: '3', value: '042-653214521245 - $3,145,5874.25'},
];

const transferTo = [
  {key: '1', value: '056-32154875423 - $1,523.48'},
  {key: '2', value: '055-32154875423 - $523.48'},
  {key: '3', value: '057-32154875423 - $10,523.48'},
];

const TrasferScreen = () => {
  return (
    <View>
      <VisaCard amount='125,381.15' card_num='6506' name='AHMAD SAMI AL-SAYED' date='08/25'cvv='352' imgName='green_card'/>
      <DropdownMenu options={transferType} title="Type of transfer" />
      <DropdownMenu options={transferFrom} title="Transfer from " />
      <DropdownMenu options={transferTo} title="Transfer to" />
      <SimSvg/>
    </View>
  );
};
export default TrasferScreen;
