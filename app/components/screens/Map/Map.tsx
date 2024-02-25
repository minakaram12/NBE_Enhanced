import {StyleSheet, Image, View, Text} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {markers} from '../../../Faker';
import layouts from './../../../constants/styles/layouts';
import TopNavigator from '../../molecules/TopNavigator/TopNavigator';
import MenuTogglerSvg from '../../../assets/svgs/MenuTogglerSvg';
import TopNavImg from '../../atoms/TopNavImg/TopNavImg';
import IconCard from '../../atoms/IconCard/IconCard';
import BellSvg from '../../../assets/svgs/BellSvg';
import {getUsername} from '../../../storage/mmkv';

const Map = () => {
  return (
    <View style={[layouts.fullHeight, layouts.fullWidth, layouts.relative]}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={[styles.map, layouts.absolute, {zIndex: 2}]}
        region={{
          latitude: 30.062981,
          longitude: 31.34597,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}>
        {markers.map((marker, index) => (
          <Marker key={index} coordinate={marker}>
            <Image
              source={require('../../../assets/images/MapMarker.png')}
              style={styles.markerImage}
            />
          </Marker>
        ))}
      </MapView>
      <View style={[layouts.px.lg, layouts.absolute, layouts.fullWidth, {zIndex: 1}]}>
        <TopNavigator
          contentLeft={<MenuTogglerSvg />}
          contentMiddle={
            <TopNavImg
              name={getUsername() || 'AHMAD SAMI AL-SAYED'}
              imgUrl={require('../../../assets/images/dummyUser.png')}
            />
          }
          contentRight={<IconCard icon={BellSvg} Type="Notification" />}
        />
      </View>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  markerImage: {
    width: 17,
    height: 21,
  },
});
