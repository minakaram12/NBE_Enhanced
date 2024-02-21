import {Image, StyleSheet, View} from 'react-native';
import {Pressable} from 'react-native';
import {layouts} from '../../../constants/styles';

function NoBeneficiary() {
  const navigateToAddScreen = () => {}; // Declare it with const
  return (
    <View style={[layouts.xCentered, layouts.yCentered, layouts.fullHeight]}>
      <Pressable onPress={navigateToAddScreen} >
        <Image
          source={require('../../../assets/images/noBeneficiaries.png')}
          style={styles.noBenfImg}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({noBenfImg: {width: 240, height: 259}});
export default NoBeneficiary;
