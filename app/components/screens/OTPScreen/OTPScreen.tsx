import {OtpInput} from 'react-native-otp-entry';
import React, {useState, useEffect} from 'react';
import {
  View,
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import MainBtn from '../../atoms/MainBtn/MainBtn';
import {shadows} from '../../../constants/styles';
import TopNavigator from '../../molecules/TopNavigator/TopNavigator';
import IconCard from '../../atoms/IconCard/IconCard';
import BackSvg from '../../../assets/svgs/BackSvg';
import styles from './OTPScreen.style';
import AppModal from '../../atoms/AppModal/AppModal';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {getPhoneNumber} from '../../../storage/mmkv';
import {useTheme} from '../../../ContextAPI/ThemeContext';

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

  // Start the countdown when the screen load
  useEffect(() => {
    let interval: NodeJS.Timeout;
    interval = setInterval(() => {
      setTimer(prevTimer => {
        if (prevTimer === 0) {
          clearInterval(interval);
          setResendDisabled(false); // Enable resend button when timer reaches 0
          return 120; // Reset timer to 2 minutes (120 seconds)
        }
        return prevTimer - 1;
      });
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  const handleResendOTP = (): void => {
    setResendDisabled(true);
    setTimer(120); // Reset timer to 2 minutes (120 seconds)
    // Start the countdown again
    let interval = setInterval(() => {
      setTimer(prevTimer => {
        if (prevTimer === 0) {
          clearInterval(interval);
          setResendDisabled(false); // Enable resend button when timer reaches 0
          return 120; // Reset timer to 2 minutes (120 seconds)
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

  // enable submit btn when otp is filled
  useEffect(() => {
    setSubmitDisabled(otp.length !== 5); // Disable submit button if OTP is not complete
  }, [otp]);

  const handleOTPChange = (otp: string) => {
    setOTP(otp);
  };

  const handleVerifyOTP = (otp: string) => {
    if (otp === '12345') {
      setShowSuccessModal(true);
      // navigation by rawan here
      if (!displaySuccessModal) {
        navigation.navigate('PasswordScreen');
      }
    } else {
      setShowFailedModal(true);
    }
  };

  const handleSubmit = () => {
    handleVerifyOTP(otp);
    // navigation.navigate('PasswordScreen');
  };

  const HandleGoBack = () => {
    navigation.goBack();
  };
  return (
    <View
      style={[
        styles.OuterContainer,
        {backgroundColor: useTheme().isDarkMode.BackgroundMenu},
      ]}>
      <View>
        <TopNavigator
          onPressLeft={HandleGoBack}
          contentLeft={<IconCard icon={BackSvg} Type="back" />}
          contentRight={
            <Image
              source={require('../../../assets/images/GreenLogo.png')}></Image>
          }
        />
        <Text
          style={[
            styles.timerText,
            styles.otpTitle,
            {color: useTheme().isDarkMode.textColor},
          ]}>
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
          onFilled={text => console.log(`otp is ${text}`)}
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
        />

        <View>
          <Text style={styles.infoText}> Didn't receive the code?</Text>
          {resendDisabled && (
            <Text
              style={[
                styles.timerText,
                // eslint-disable-next-line react-hooks/rules-of-hooks
                {color: useTheme().isDarkMode.textColor},
              ]}>
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
