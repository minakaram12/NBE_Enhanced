import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './MenuItem.styles';
import { useState } from 'react';
import { SvgProps } from 'react-native-svg';
import IconCard  from '../IconCard/IconCard';
import { px } from '../../../constants/styles/layouts';
import { theme } from '../../../theme/theme';

interface MyComponentProps {
  iconName: React.FC<SvgProps>;
  itemTitle: string;
}

const MenuItem: React.FC<MyComponentProps> = ({ iconName:IconName, itemTitle }) => {

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
       <IconCard icon={IconName} containerstyle={styles.IconCardStyle} />
       <Text style={styles.text}>{itemTitle}</Text>
    </TouchableOpacity>
  );
};

export default MenuItem;
