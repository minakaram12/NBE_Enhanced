import {OtpInput} from 'react-native-otp-entry';
import React, {useState, useEffect} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import MainBtn from '../../atoms/MainBtn/MainBtn';
import TopNavigator from '../../molecules/TopNavigator/TopNavigator';
import IconCard from '../../atoms/IconCard/IconCard';
import BackSvg from '../../../assets/svgs/BackSvg';
import styles from './OTPScreen.style';
import AppModal from '../../atoms/AppModal/AppModal';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {getPhoneNumber} from '../../../storage/mmkv';
import layouts, {px} from '../../../constants/styles/layouts';
import NamedLogo from '../../../assets/svgs/NamedLogo';
import Logo from '../../../assets/svgs/Logo';

const OTPScreen = ({route}: {route: any}) => {
  const {otpTitle, displaySuccessModal} = route.params;
  const phoneNum = getPhoneNumber();
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const [otp, setOTP] = useState('');
  const [timer, setTimer] = useState<number>(120);
  const [resendDisabled, setResendDisabled] = useState<boolean>(true);
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const [showSuccesModal, setShowSuccessModal] = useState(false);
  const [showFailedModal, setShowFailedModal] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    interval = setInterval(() => {
      setTimer(prevTimer => {
        if (prevTimer === 0) {
          clearInterval(interval);
          setResendDisabled(false);
          return 120;
        }
        return prevTimer - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleResendOTP = (): void => {
    setResendDisabled(true);
    setTimer(120);
    let interval = setInterval(() => {
      setTimer(prevTimer => {
        if (prevTimer === 0) {
          clearInterval(interval);
          setResendDisabled(false);
          return 120;
        }
        return prevTimer - 1;
      });
    }, 1000);
  };

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  useEffect(() => {
    setSubmitDisabled(otp.length !== 5);
  }, [otp]);

  const handleOTPChange = (otp: string) => {
    setOTP(otp);
  };

  const handleVerifyOTP = (otp: string) => {
    if (otp === '12345') {
      setShowSuccessModal(true);
      if (!displaySuccessModal) {
        navigation.navigate('PasswordScreen');
      }
    } else {
      setShowFailedModal(true);
    }
  };

  const handleSubmit = () => {
    handleVerifyOTP(otp);
  };

  const HandleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={[styles.OuterContainer]}>
      <View>
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
        <Text style={[styles.timerText, styles.otpTitle, layouts.my.sm]}>
          {' '}
          {otpTitle}
        </Text>

        <Text style={styles.infoText}>
          {' '}
          Enter 5 digit code we sent to {phoneNum}
        </Text>
        <OtpInput
          numberOfDigits={5}
          onTextChange={(code: string) => handleOTPChange(code)}
          focusColor="green"
          focusStickBlinkingDuration={1000}
          theme={{
            containerStyle: styles.container,
            pinCodeContainerStyle: styles.pinCodeContainer,
            pinCodeTextStyle: styles.pinCodeText,
            focusedPinCodeContainerStyle: styles.activePinCodeContainer,
          }}
        />
        {displaySuccessModal && (
          <AppModal
            modalVisible={showSuccesModal}
            setModalVisible={setShowSuccessModal}
            imageSource={require('../../../assets/images/tranferSuccess.png')}
            titleText={'Mission Complete'}
            descriptionText={'Transfer to Jasmine Robert was successful'}
            confirmButtonText={'Finish'}
            onConfirmPress={() => {
              setShowSuccessModal(false);
              navigation.navigate('TransferScreen');
              navigation.navigate('HomeScreen');
            }}
          />
        )}

        <AppModal
          modalVisible={showFailedModal}
          setModalVisible={setShowFailedModal}
          errorTitle={true}
          titleText="Ooops..."
          descriptionText={'Seems like you entered invalid OTP'}
          confirmButtonText={'Try Again'}
          onConfirmPress={() => setShowFailedModal(false)}
          cancelButtonText="Cancel"
          onCancelPress={() => setShowFailedModal(false)}
          imageSource={require('../../../assets/images/error-cards.png')}
          imageWidth={px(232)}
          imageHeight={px(182)}
        />

        <View>
          <Text style={styles.infoText}> Didn't receive the code?</Text>
          {resendDisabled && (
            <Text style={[styles.timerText]}>
              {' '}
              Request new one in: {formatTime(timer)}
            </Text>
          )}

          {!resendDisabled && (
            <TouchableOpacity onPress={handleResendOTP}>
              <Text style={styles.timerText}> Resend OTP</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
      <MainBtn
        buttonText="submit"
        disabled={submitDisabled}
        onPress={handleSubmit}
      />
    </View>
  );
};

export default OTPScreen;
