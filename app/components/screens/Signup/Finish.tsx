import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import Header from '../../molecules/Header';
import layouts, {px} from '../../../constants/styles/layouts';
import MainBtn from '../../atoms/MainBtn/MainBtn';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

const Finish = () => {
  const handleBack = () => {
    console.log('Test');
  };
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[layouts.flexed, {backgroundColor: '#007236'}]}>
      <View style={[layouts.mx.xl, layouts.my.xl]}>
        <Header />
      </View>
      <ImageBackground
        source={require('../../../assets/images/Finish.jpg')}
        resizeMode="cover"
        style={[layouts.flexed]}>
        <View style={[layouts.flexed, layouts.justifyBetween]}>
          <View style={[layouts.mx.xl]}>
            <Text style={[styles.title, layouts.my.lg]}>Congratulations</Text>
            <Text style={styles.caption}>
              You have successfully registered in NBE online banking service
            </Text>
          </View>
          <View style={[layouts.mx.xl, layouts.mb.xl]}>
            <MainBtn
              buttonText="Finish"
              variant="secondary"
              onPress={() => {
                navigation.navigate('home');
              }}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
export default Finish;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Roboto-Bold',
    fontSize: px(30),
    color: '#F7F7F7',
    lineHeight: px(35.16),
  },
  caption: {
    fontFamily: 'Roboto-Regular',
    fontSize: px(16),
    color: '#F7F7F7',
    lineHeight: px(18.75),
  },
});
