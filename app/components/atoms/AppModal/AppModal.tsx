import React from 'react';
import {Alert, Image, Modal, Pressable, Text, View} from 'react-native';

import styles from './AppModal.style';
import {layouts} from '../../../constants/styles';
import MainBtn from '../MainBtn/MainBtn';
import {px} from '../../../constants/styles/layouts';

interface AppModalProps {
  modalVisible: boolean;
  setModalVisible: (value: boolean) => void;
  imageSource?: any;
  imageWidth?: number;
  imageHeight?: number;
  titleText?: string;
  errorTitle?: boolean;
  descriptionText?: string;
  mony?: string;
  confirmButtonText?: string;
  cancelButtonText?: string;
  onConfirmPress?(): void;
  onCancelPress?(): void;
}

const AppModal: React.FC<AppModalProps> = ({
  modalVisible,
  setModalVisible,
  imageSource,
  imageWidth = 150,
  imageHeight = 150,
  titleText,
  errorTitle = false,
  descriptionText,
  confirmButtonText,
  cancelButtonText,
  mony,
  onConfirmPress,
  onCancelPress,
}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <View style={[layouts.flexed, layouts.allCentered]}>
        <Pressable
          onPress={() => setModalVisible(!modalVisible)}
          style={[
            layouts.absolute,
            layouts.fullHeight,
            layouts.fullWidth,
            styles.overlay,
          ]}
        />
        <View
          style={[
            layouts.allCentered,
            layouts.px.xl,
            layouts.py.xl,
            layouts.absolute,
            styles.modalContent,
          ]}>
          {imageSource && (
            <Image
              source={imageSource}
              style={{width: px(imageWidth), height: px(imageHeight)}}
              resizeMode="cover"
            />
          )}
          {titleText && (
            <Text
              style={[
                styles.modalTitle,
                layouts.my.lg,
                errorTitle ? styles.errorText : null,
              ]}>
              {titleText}
            </Text>
          )}
          {descriptionText && (
            <Text style={[styles.modalDescription, layouts.mb.lg]}>
              {descriptionText}
            </Text>
          )}
          {mony && <Text style={[styles.modalMony]}>{mony}</Text>}
          <View style={[layouts.row]}>
            {cancelButtonText && (
              <MainBtn
                buttonText={cancelButtonText}
                variant="outline"
                onPress={() => {
                  if (onCancelPress) {
                    onCancelPress();
                  }
                }}
                buttonStyle={[
                  layouts.mt.lg,
                  layouts.me.lg,
                  {borderColor: 'red'},
                ]}
                textStyle={[styles.boldFont, {color: 'red'}]}
              />
            )}
            {confirmButtonText && (
              <MainBtn
                buttonText={confirmButtonText}
                onPress={() => {
                  if (onConfirmPress) {
                    onConfirmPress();
                  }
                }}
                buttonStyle={[layouts.mt.lg, layouts.flexed]}
                textStyle={[styles.boldFont]}
              />
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AppModal;
