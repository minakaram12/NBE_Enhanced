// MyComponent.tsx
import React, { ReactNode } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import styles from './MenuItem.styles';
import { useState } from 'react';
import { SvgProps } from 'react-native-svg';
import IconCard  from '../IconCard/IconCard';
import { useTheme } from '../../../ContextAPI/ThemeContext';

interface MyComponentProps {
  iconName: React.FC<SvgProps>;
  itemTitle: string;
}

const MenuItem: React.FC<MyComponentProps> = ({ iconName:IconName, itemTitle }) => {

  const [isHovered, setIsHovered] = useState(false);
  const { isDarkMode, toggleSwitch } = useTheme();


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
       {/* <View style={styles.iconContainer}>
        <IconName/>
       </View> */}
       <IconCard icon={IconName} containerstyle={{backgroundColor:"#DFD8D8"}}></IconCard>
       <Text style={[styles.text ,{color:isDarkMode.textColor}]}>{itemTitle}</Text>
    </TouchableOpacity>
  );
};

export default MenuItem;
