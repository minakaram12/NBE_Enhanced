import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet,useColorScheme } from 'react-native';
import { theme } from '../../../theme/theme';
import { setTheme } from '../../../storage/mmkv';
interface SwitchbtnProps{
    isEnabledDark:boolean;
    toggleSwitch:()=>void;
  }

const SwitchBtn: React.FC<SwitchbtnProps> = ({ isEnabledDark, toggleSwitch }) => {
    // const [isEnabled, setIsEnabled] = useState(false);
    // const colorScheme = useColorScheme();


    // const toggleSwitch = () => {
    //     setIsEnabled((previousState) => !previousState);
    // };

    return (
        <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isEnabledDark ? '#007236' : '#f4f3f4'}
            onValueChange={toggleSwitch}
            value={isEnabledDark}
        />
    );
};

export default SwitchBtn;
