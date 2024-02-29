import {Image, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {markers} from '../../../Faker';
import styles from './Map.style';
import layouts from './../../../constants/styles/layouts';
import {getTheme} from '../../../storage/mmkv';

const Map = () => {
  const mapCustomStyle = [
    {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
    {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
    {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
    {
      featureType: 'administrative.locality',
      elementType: 'labels.text.fill',
      stylers: [{color: '#d59563'}],
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [{color: '#d59563'}],
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [{color: '#263c3f'}],
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [{color: '#6b9a76'}],
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [{color: '#38414e'}],
    },
    {
      featureType: 'road',
      elementType: 'geometry.stroke',
      stylers: [{color: '#212a37'}],
    },
    {
      featureType: 'road',
      elementType: 'labels.text.fill',
      stylers: [{color: '#9ca5b3'}],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [{color: '#746855'}],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [{color: '#1f2835'}],
    },
    {
      featureType: 'road.highway',
      elementType: 'labels.text.fill',
      stylers: [{color: '#f3d19c'}],
    },
    {
      featureType: 'transit',
      elementType: 'geometry',
      stylers: [{color: '#2f3948'}],
    },
    {
      featureType: 'transit.station',
      elementType: 'labels.text.fill',
      stylers: [{color: '#d59563'}],
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [{color: '#17263c'}],
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [{color: '#515c6d'}],
    },
    {
      featureType: 'water',
      elementType: 'labels.text.stroke',
      stylers: [{color: '#17263c'}],
    },
  ];
  return (
    <View style={[layouts.fullHeight, layouts.fullWidth, layouts.relative]}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={[styles.map, layouts.absolute, {zIndex: 1}]}
        customMapStyle={getTheme() === 'Light' ? [] : mapCustomStyle}
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
    </View>
  );
};

export default Map;
