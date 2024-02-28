import React, {useState} from 'react';
import {Text, View} from 'react-native';

// Styles
import {layouts} from '../../../constants/styles';
import styles from './AirPayScreen.style';

// Drag and Drop
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {DraxList, DraxProvider} from 'react-native-drax';

// Components
import MainBtn from '../../atoms/MainBtn/MainBtn';
import OutlinedFingerPrintSvg from '../../../assets/svgs/OutlinedFingerPrintSvg';

import {visaCards} from '../../../Faker/VisaCards';
import {px} from '../../../constants/styles/layouts';

// Components
import AppModal from '../../atoms/AppModal/AppModal';
import TopNavImg from '../../atoms/TopNavImg/TopNavImg';
import TopNavigator from '../../molecules/TopNavigator/TopNavigator';
import IconCard from '../../atoms/IconCard/IconCard';

// Icons
import MenuTogglerSvg from '../../../assets/svgs/MenuTogglerSvg';
import BellSvg from '../../../assets/svgs/BellSvg';
import DraggableCard from '../../molecules/DraggableCard/DraggableCard';
import ReceivingZone from '../../molecules/ReceivingZone/ReceivingZone';
import DrawerMenu from '../DrawerNavigator/DrawerMenu';

const AirPayScreen = () => {
  const [showModal, setShowModal] = useState(false);
  const [receiverCardIndex, setReceiverCardIndex] = useState(-1);

  return (
    // <DrawerMenu>
      <View style={[styles.pageContainer]}>
        {/* <View style={[layouts.mx.lg]}>
        <TopNavigator
          contentLeft={<MenuTogglerSvg />}
          contentMiddle={
            <TopNavImg
              name="AHMAD SAMI AL-SAYED"
              imgUrl={require('../../../assets/images/dummyUser.png')}
            />
          }
          contentRight={<IconCard icon={BellSvg} Type="Notification" />}
        />
      </View> */}

        <Text style={[styles.cardsTitle, layouts.px.xxl]}>Cards</Text>

        <GestureHandlerRootView>
          <DraxProvider style={[layouts.allCentered]}>
            <DraxList
              style={[styles.draggableCardContainer]}
              data={visaCards}
              renderItemContent={({item, index}) => (
                <DraggableCard
                  item={item}
                  index={index}
                  setReceiverCardIndex={setReceiverCardIndex}
                />
              )}
              keyExtractor={(item, index: number) => index.toString()}
              horizontal={true}
              scrollEnabled={true}
            />
            <ReceivingZone
              receiverCardIndex={receiverCardIndex}
              setReceiverCardIndex={setReceiverCardIndex}
            />
          </DraxProvider>
        </GestureHandlerRootView>

        <MainBtn
          buttonText="Pay Now"
          iconRight={<OutlinedFingerPrintSvg />}
          onPress={() => setShowModal(prev => !prev)}
          buttonStyle={[layouts.my.xxl, layouts.mx.xl]}
          indicatorSize={'large'}
          disabled={receiverCardIndex !== -1 ? false : true}
        />

        <AppModal
          titleText="Mission Complete"
          descriptionText="Your payment to IKEA was successful"
          mony={`\$${visaCards[receiverCardIndex]?.amount}`}
          imageSource={require('../../../assets/images/cards.png')}
          imageWidth={px(230.18)}
          imageHeight={px(181.42)}
          confirmButtonText="Done"
          onConfirmPress={() => setShowModal(false)}
          modalVisible={showModal}
          setModalVisible={setShowModal}
        />
      </View>
    // </DrawerMenu>
  );
};

export default AirPayScreen;
