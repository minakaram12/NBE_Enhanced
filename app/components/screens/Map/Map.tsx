import {StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {markers} from '../../../Faker';

const Map = () => {
  return (
    <MapView
      provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      style={styles.map}
      region={{
        latitude: 20.066974205840264,
        longitude: 21.336983717513284,
        latitudeDelta: 20.066974205840264,
        longitudeDelta: 31.336983717513284,
      }}>
      {markers.map((marker, index) => (
        <Marker key={index} coordinate={marker} />
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
});
