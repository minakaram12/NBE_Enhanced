// MyComponent.tsx
import React from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import styles from './MenuItem.styles';
import { useState } from 'react';
import SwitchBtn from '../SwitchBtn/SwitchBtn';


interface MyComponentProps {
  iconName: string;
  itemTitle: string;
}

const MenuItem: React.FC<MyComponentProps> = ({ iconName, itemTitle }) => {

  const [isHovered, setIsHovered] = useState(false);

  const handlePressIn = () => {
    setIsHovered(true);
  };

  const handlePressOut = () => {
    setIsHovered(false);
  };
  return (
    <TouchableOpacity style={[styles.itemContainer ,isHovered && styles.hoveredItem]}
    
    onPressIn={handlePressIn}
    onPressOut={handlePressOut}
>
       <View style={styles.iconContainer}>
        <Image src={iconName} />
       </View>
       <Text style={styles.text}>{itemTitle}</Text>
    </TouchableOpacity>
  );
};

export default MenuItem;
