import React from 'react';
import {Image, View, Text} from 'react-native';
import {layouts} from '../../../constants/styles';
import {styles} from './noHistory';

function NoHistory() {
  return (
    <View style={[layouts.xCentered, layouts.yCentered, styles.mt]}>
      <View style={[styles.imageContainer]}>
        <Image source={require('../../../assets/images/Group.png')} />
      </View>
      <Text style={styles.textStyle}>No History</Text>
      <Text style={styles.textStyle}>
        Not a single transaction was made to this account
      </Text>
    </View>
  );
}

export default NoHistory;
