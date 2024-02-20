import React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import {layouts} from '../../../constants/styles';

function NoHistory() {
  return (
    <View style={[layouts.xCentered, layouts.yCentered, layouts.flexed]}>
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

const styles = StyleSheet.create({
  container: {flex: 1, width: 240, height: 249},
  imageContainer: {
    width: 150,
    height: 166,
    overflow: 'hidden',
  },
  textStyle: {
    color: '#464665',
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 16.41,
  },
});

export default NoHistory;
