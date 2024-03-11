import React, {useState} from 'react';
import {Text, View, ScrollView} from 'react-native';

// Styles
import styles from './AirPayScreen.style';
import {layouts} from '../../../constants/styles';
import {px} from '../../../constants/styles/layouts';

// Drag and Drop
import {DraxList, DraxProvider, DraxView} from 'react-native-drax';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

// Components
import MainBtn from '../../atoms/MainBtn/MainBtn';

// Components
import AppModal from '../../atoms/AppModal/AppModal';
import DraggableCard from '../../molecules/DraggableCard/DraggableCard';
import ReceivingZone from '../../molecules/ReceivingZone/ReceivingZone';

// Icons
import SmallOutlinedFingerPrintSvg from '../../../assets/svgs/SmallOutlinedFingerPrintSvg';

import {visaCardsData} from '../../../Faker/Faker';
const AirPayScreen = () => {
  const [showModal, setShowModal] = useState(false);
  const [receiverCardIndex, setReceiverCardIndex] = useState(-1);

  return (
    <View style={[styles.pageContainer, layouts.fullHeight]}>
      <ScrollView contentContainerStyle={[layouts.flexGrow]}>
        <Text style={[styles.cardsTitle, layouts.px.xxl]}>Cards</Text>

        <GestureHandlerRootView>
          <DraxProvider style={[layouts.allCentered]}>
            <DraxView
              renderContent={() => {
                return (
                  <View style={[layouts.allCentered]}>
                    <View style={[styles.draggableCardContainer]}>
                      <DraxList
                        showsHorizontalScrollIndicator={false}
                        data={visaCardsData}
                        renderItemContent={({item, index}) => (
                          <DraggableCard item={item} index={index} />
                        )}
                        keyExtractor={(item, index: number) => index.toString()}
                        horizontal={true}
                        scrollEnabled={true}
                        itemStyles={{
                          dragReleasedStyle: {opacity: 1},
                          hoverStyle: {opacity: 0.8},
                        }}
                      />
                    </View>
                    <ReceivingZone
                      receiverCardIndex={receiverCardIndex}
                      setReceiverCardIndex={setReceiverCardIndex}
                    />
                  </View>
                );
              }}
              onReceiveDragDrop={({dragged}) => {
                const {payload} = dragged;
                if (typeof payload === 'number') {
                  setReceiverCardIndex(payload);
                } else {
                  setReceiverCardIndex(payload.index);
                }
              }}
            />
          </DraxProvider>
        </GestureHandlerRootView>

        <MainBtn
          buttonText="Pay Now"
          textStyle={[styles.buttonText]}
          iconRight={
            <SmallOutlinedFingerPrintSvg width={px(32.83)} height={px(32)} />
          }
          onPress={() => setShowModal(prev => !prev)}
          buttonStyle={[layouts.mt.xxl, layouts.mx.xl]}
          indicatorSize={'large'}
          disabled={receiverCardIndex !== -1 ? false : true}
        />

        <AppModal
          titleText="Mission Complete"
          descriptionText="Your payment to IKEA was successful"
          money={`$${visaCardsData[receiverCardIndex]?.amount}`}
          imageSource={require('../../../assets/images/cards.png')}
          imageWidth={px(230.18)}
          imageHeight={px(181.42)}
          confirmButtonText="Done"
          onConfirmPress={() => setShowModal(false)}
          modalVisible={showModal}
          setModalVisible={setShowModal}
        />
      </ScrollView>
    </View>
  );
};

export default AirPayScreen;
