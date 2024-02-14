// MyComponent.tsx
import React from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import styles from './MenuItem.styles';


interface MyComponentProps {
  iconName: string;
  itemTitle: string;
}

const MenuItem: React.FC<MyComponentProps> = ({ iconName, itemTitle }) => {
  return (
    <View style={styles.itemContainer}>
       <View style={styles.iconContainer}>
        <Text>{iconName}</Text>
       </View>
       <Text style={styles.text}>{itemTitle}</Text>
    </View>
  );
};

export default MenuItem;
