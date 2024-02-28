import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Switch, StyleSheet,useColorScheme } from 'react-native';
import { getTheme, setTheme } from '../../../storage/mmkv';
import { GetTheme } from '../../../theme/themes';
import RNRestart from 'react-native-restart'; // Import package from node modules
import { theme } from '../../../theme/theme';

const SwitchBtn: React.FC = () => {
  
   const [isDarkMode ,setIsDarkMode]=useState(theme);
    //const { isDarkMode, toggleSwitch } = theme();
    const setSelectedTheme=()=>{
      RNRestart.Restart();
    }

    const toggleSwitch = () => {
      const newTheme = isDarkMode.name === 'Dark' ? 'Light' : 'Dark';
      setIsDarkMode(GetTheme(newTheme));
      setTheme(newTheme);
    };

    // console.log("inSwitch.TSX" + getTheme());
    // console.log(isDarkMode?.bg);


    return (
      <View>
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isDarkMode? '#007236' : '#f4f3f4'}
            onValueChange={() => {
              toggleSwitch();
              setSelectedTheme();
            }}
            value={isDarkMode.name==="Dark"}
        />
      </View>
      
    );
};

export default SwitchBtn;
