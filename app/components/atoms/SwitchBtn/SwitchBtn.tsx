import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const SwitchBtn: React.FC = () => {
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => {
        setIsEnabled((previousState) => !previousState);
    };

    return (
        <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isEnabled ? '#007236' : '#f4f3f4'}
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
    );
};

export default SwitchBtn;
