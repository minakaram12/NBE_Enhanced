import {StyleSheet, Image} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {markers} from '../../../Faker';

const Map = () => {
  return (
    <MapView
      provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      style={styles.map}
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
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
