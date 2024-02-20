import DropdownMenu from '../../atoms/DropdownMenu/DropdownMenu';
import {View, Image, Text} from 'react-native';
import VisaCard from '../../atoms/VisaCard/VisaCard';
import SimSvg from '../../../assets/svgs/SimSvg';
import MainBtn from '../../atoms/MainBtn/MainBtn';
import BellSvg from '../../../assets/svgs/BellSvg';
import BackSvg from '../../../assets/svgs/BackSvg';
import Icon from '../../atoms/MainBtn/Icon';
import IconCard from '../../atoms/IconCard/IconCard';
import {layouts, shadows} from '../../../constants/styles';

import TopNavImg from '../../atoms/TopNavImg/TopNavImg';
import MenuTogglerSvg from '../../../assets/svgs/MenuTogglerSvg';
import TopNavigator from '../../molecules/TopNavigator/TopNavigator';

import OTPScreen from '../OTPScreen/OTPScreen';

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
    <View style={{backgroundColor: '#F1F3FB', paddingHorizontal: 10, flex: 1}}>
      <TopNavigator
        contentLeft={
          <IconCard
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
          />
        }
        contentRight={
          <Image
            source={require('../../../assets/images/GreenLogo.png')}></Image>
        }
      />

      {/* <VisaCard
        amount="125,381.15"
        card_num="6506"
        name="AHMAD SAMI AL-SAYED"
        date="08/25"
        cvv="352"
        accType="premium"
      /> */}
   

      <Text
        style={{
          color: '#1C2437',
          fontFamily: 'Roboto',
          fontWeight: 'bold',
          fontSize: 30,
          padding: 10,
        }}>
        Transfer
      </Text>
      <DropdownMenu options={transferType} title="Type of transfer" />
      <DropdownMenu options={transferFrom} title="Transfer from " />
      <DropdownMenu options={transferTo} title="Transfer to" />

      <TopNavigator
        contentLeft={<MenuTogglerSvg />}
        contentMiddle={
          <TopNavImg
            name="Ahmed"
            imgUrl={require('../../../assets/images/dummyUser.png')}
          />
        }
        contentRight={
          <IconCard
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
          />
        }
      />

      <TopNavigator
        contentLeft={
          <IconCard
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
          />
        }
        contentMiddle={
          <IconCard
            icon={BellSvg}
            containerstyle={[
              {
                borderRadius: 10,
                width: 45,
                height: 45,
                backgroundColor: '#E5E5E5',
              },
              shadows(),
            ]}
          />
        }
        contentRight={
          <Image
            source={require('../../../assets/images/GreenLogo.png')}></Image>
        }
      />
    </View>
  );
};
export default TrasferScreen;
