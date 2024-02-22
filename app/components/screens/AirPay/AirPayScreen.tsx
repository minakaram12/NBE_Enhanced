import React, {useState} from 'react';
import {Pressable, Text, View} from 'react-native';

// Styles
import {layouts} from '../../../constants/styles';
import styles from './AirPayScreen.style';

// Drag and Drop
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {DraxList, DraxProvider, DraxView} from 'react-native-drax';

// Components
import VisaCard from '../../atoms/VisaCard/VisaCard';
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

const AirPayScreen = () => {
  const [showModal, setShowModal] = useState(false);

  const [receiverCardIndex, setReceiverCardIndex] = useState(-1);

  // eslint-disable-next-line react/no-unstable-nested-components
  const DraggableCard = ({item, index}) => {
    return (
      <DraxView
        style={[
          layouts.mx.sm,
          layouts.allCentered,
          index === 0 ? layouts.ms.xl : null,
          index === visaCards.length - 1 ? layouts.me.xl : null,
          styles.draggableCardContainer,
        ]}
        dragPayload={index}
        // longPressDelay={150}
        key={index}
        onDragStart={() => {
          setReceiverCardIndex(-1);
        }}
        onDragEnd={({dragged}) => {
          console.log(dragged.payload);
        }}>
        <VisaCard {...item} />
      </DraxView>
    );
  };

  // eslint-disable-next-line react/no-unstable-nested-components
  const ReceivingZone = () => {
    return (
      <DraxView
        renderContent={({viewState}) => {
          return (
            <View style={[styles.cardBox, layouts.allCentered]}>
              {receiverCardIndex !== -1 ? (
                <Pressable onPress={() => setReceiverCardIndex(-1)}>
                  <VisaCard {...visaCards[receiverCardIndex]} />
                </Pressable>
              ) : (
                <Text style={[styles.cardBoxText]}>
                  Touch & hold a card then drag it to this box
                </Text>
              )}
            </View>
          );
        }}
        onReceiveDragEnter={({dragged}) => {
          console.log(`hello ${dragged.payload}`);
        }}
        onReceiveDragExit={({dragged}) => {
          console.log(`goodbye ${dragged.payload}`);
        }}
        onReceiveDragDrop={({dragged}) => {
          const {payload} = dragged;
          if (typeof payload === 'number') setReceiverCardIndex(payload);
          else setReceiverCardIndex(payload.index);
        }}
      />
    );
  };

  return (
    <View style={[styles.pageContainer]}>
      <View style={[layouts.mx.lg]}>
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
      </View>

      <Text style={[styles.cardsTitle, layouts.px.xxl]}>Cards</Text>

      <GestureHandlerRootView>
        <DraxProvider style={[layouts.allCentered]}>
          <DraxList
            style={{height: px(280)}}
            data={visaCards}
            renderItemContent={DraggableCard}
            keyExtractor={(item, index: number) => index.toString()}
            horizontal={true}
            scrollEnabled={true}
          />
          <ReceivingZone />
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
  );
};

export default AirPayScreen;
