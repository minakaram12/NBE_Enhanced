import React, { useState } from 'react';
import { View, Switch} from 'react-native';
import { getTheme, setTheme } from '../../../storage/mmkv';
import { GetTheme } from '../../../theme/themes';
import RNRestart from 'react-native-restart'; // Import package from node modules
import { theme } from '../../../theme/theme';

const SwitchBtn: React.FC = () => {
  
   const [isDarkMode ,setIsDarkMode]=useState(theme);

    const setSelectedTheme=()=>{
      RNRestart.restart();
    }

    const toggleSwitch = () => {
      const newTheme = isDarkMode.name === 'Dark' ? 'Light' : 'Dark';
      setIsDarkMode(GetTheme(newTheme));
      setTheme(newTheme);
    };

    


    return (
      <View>
          <Switch
            trackColor={{ false:theme?.white , true:theme?.greylighter }}
            thumbColor={isDarkMode? theme?.DarkSpringGreen : theme?.white }
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
