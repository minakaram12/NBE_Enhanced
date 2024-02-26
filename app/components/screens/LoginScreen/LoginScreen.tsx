/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  ImageBackground,
  Pressable,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';
// styles
import {layouts} from '../../../constants/styles';
import styles from './LoginScreen.style';
// images + svg icons
import LoginBackgroundImage from '../../../assets/images/login_bg.jpg';
import NamedLogo from '../../../assets/svgs/NamedLogo';
import Logo from '../../../assets/svgs/Logo';
// form + validations
import {Formik} from 'formik';
import {loginValidationsSchema} from '../../../validations/login';
import InputField from '../../atoms/InputField/InputField';
// fontawesome icons
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {faLock} from '@fortawesome/free-solid-svg-icons/faLock';
import {faAt} from '@fortawesome/free-solid-svg-icons/faAt';
import MainBtn from '../../atoms/MainBtn/MainBtn';
import OutlinedFingerPrintSvg from '../../../assets/svgs/OutlinedFingerPrintSvg';
import TextButton from '../../atoms/TextButton/TextButton';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {px} from '../../../constants/styles/layouts';
import {setLoginData, setUsername} from '../../../storage/mmkv';
import {SafeAreaView} from 'react-native';

library.add(fab, faAt, faLock);

const LoginScreen = ({navigation}: {navigation: any}) => {
  const handelForgotPasswordClick = () => {
    console.log('Forgot password?');
  };

  const [isRememberMe, setIsRememberMe] = React.useState(false);

  return (
    <SafeAreaView>
      <StatusBar translucent backgroundColor="transparent" />
      <ImageBackground
        source={LoginBackgroundImage}
        resizeMode="cover"
        style={[layouts.fullHeight]}>
        <View style={[styles.container, layouts.flexed]}>
          <View style={[layouts.flexed, layouts.px.xxl, layouts.mt.xxl]}>
            <View style={[layouts.row, layouts.mt.xl]}>
              <Pressable>
                <View style={[styles.languageButtonContainer]}>
                  <Text style={[styles.languageButtonText]}>AR</Text>
                </View>
              </Pressable>
              <View style={[layouts.flexed, layouts.row, layouts.justifyEnd]}>
                <NamedLogo
                  textColor="white"
                  width={130}
                  height={40}
                  containerStyle={[layouts.me.md]}
                />
                <Logo curveColor="white" width={34} height={40} />
              </View>
            </View>
            <View style={[layouts.flexed, layouts.justifyEnd, layouts.mb.xxl]}>
              <Text style={[layouts.mb.xxxl, styles.whiteText, styles.title]}>
                {'Welcome to\nThe National Bank\nof Egypt'}
              </Text>
              <Formik
                initialValues={{
                  username: '',
                  password: '',
                }}
                validationSchema={loginValidationsSchema}
                onSubmit={values => {
                  console.log(values, 'Remember me: ', isRememberMe);
                  setUsername(values.username);
                  if (isRememberMe) {
                    setLoginData(
                      values.username,
                      values.password,
                      isRememberMe,
                    );
                  }
                  navigation.replace('home');
                }}>
                {({handleSubmit}) => (
                  <View>
                    <InputField
                      name="username"
                      label="Username"
                      placeholder="Username"
                      variant="transparent"
                      leftIcon="at"
                      leftIconColor="white"
                      outerContainerStyle={[layouts.mb.xxl]}
                    />
                    <InputField
                      name="password"
                      label="Password"
                      placeholder="Password"
                      variant="transparent"
                      leftIcon="lock"
                      leftIconColor="white"
                      isPassword={true}
                      outerContainerStyle={[layouts.mb.xxl]}
                    />
                    <View style={[layouts.row, layouts.mb.xxl]}>
                      <BouncyCheckbox
                        size={25}
                        unfillColor="white"
                        fillColor="#007236"
                        text="Remember me"
                        iconStyle={{
                          borderRadius: px(6.25),
                        }}
                        innerIconStyle={{borderWidth: 0}}
                        textStyle={[
                          styles.whiteText,
                          {textDecorationLine: 'none'},
                        ]}
                        onPress={(isChecked: boolean) =>
                          setIsRememberMe(isChecked)
                        }
                        style={[layouts.flexed]}
                      />
                      <TextButton
                        buttonText="Forgot password?"
                        underlined={true}
                        textStyle={[styles.whiteText]}
                        onPress={handelForgotPasswordClick}
                      />
                    </View>
                    <View style={[layouts.row, layouts.allCentered]}>
                      <MainBtn
                        buttonText="Log In"
                        onPress={handleSubmit}
                        buttonStyle={[layouts.flexed, layouts.me.xl]}
                      />
                      <OutlinedFingerPrintSvg width={50} height={50} />
                    </View>
                  </View>
                )}
              </Formik>
              <View style={[layouts.row, layouts.mt.xxl, layouts.allCentered]}>
                <Text style={[styles.whiteText]}>Don’t have an account?</Text>
                <TextButton
                  buttonText="Sign up"
                  underlined={true}
                  textStyle={[styles.footerLinks]}
                  onPress={() => {
                    navigation.navigate('signupScreen');
                  }}
                  buttonStyle={[layouts.ms.sm]}
                />
              </View>
            </View>
          </View>
          <View style={[styles.footer, layouts.allCentered]}>
            <View style={[layouts.row, layouts.allCentered, layouts.mb.md]}>
              <TextButton
                buttonText="Contact Us"
                textStyle={[styles.footerLinks]}
                onPress={handelForgotPasswordClick}
              />
              <Text style={[styles.whiteText, layouts.mx.md]}>-</Text>
              <TextButton
                buttonText="FAQs"
                textStyle={[styles.footerLinks]}
                onPress={handelForgotPasswordClick}
              />
              <Text style={[styles.whiteText, layouts.mx.md]}>-</Text>
              <TextButton
                buttonText="Help"
                textStyle={[styles.footerLinks]}
                onPress={handelForgotPasswordClick}
              />
            </View>
            <Text style={[styles.whiteText, styles.copyright]}>
              Copyright © NBE 2021 All Rights Reserved - National Bank of Egypt
            </Text>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default LoginScreen;
