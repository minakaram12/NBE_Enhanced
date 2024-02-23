import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Switch, StyleSheet,useColorScheme } from 'react-native';
import { getTheme, setTheme } from '../../../storage/mmkv';
import { GetTheme } from '../../../theme/themes';
import { ThemeContext, useTheme } from '../../../ContextAPI/ThemeContext';
const SwitchBtn: React.FC = () => {
  
  
    const { isDarkMode, toggleSwitch } = useTheme();
    

    // console.log("inSwitch.TSX" + getTheme());
    // console.log(isDarkMode?.bg);


    return (
      <View>
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isDarkMode? '#007236' : '#f4f3f4'}
            onValueChange={toggleSwitch}
            value={isDarkMode.name==="Dark"}
        />
      </View>
      
    );
};

export default SwitchBtn;
