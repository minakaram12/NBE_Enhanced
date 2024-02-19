import React, {useState} from 'react';
import {Pressable, StyleProp, Text, TextStyle, ViewStyle} from 'react-native';

import styles from './TextButton.style';

interface ButtonProps {
  buttonText: string;
  underlined?: boolean;
  disabled?: boolean;
  buttonStyle?: StyleProp<ViewStyle> | Array<ViewStyle> | null;
  textStyle?: StyleProp<TextStyle> | null;
  onPress(): void;
}

const TextButton: React.FC<ButtonProps> = ({
  buttonText,
  underlined = false,
  disabled = false,
  buttonStyle = null,
  textStyle = null,
  onPress,
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleOnPressIn = () => {
    setIsClicked(true);
    onPress();
    setTimeout(() => setIsClicked(false), 100);
  };

  return (
    <Pressable
      style={[buttonStyle]}
      disabled={disabled}
      onPress={handleOnPressIn}>
      <Text
        style={[
          underlined || isClicked ? styles.underlinedText : null,
          textStyle,
        ]}>
        {buttonText}
      </Text>
    </Pressable>
  );
};

export default TextButton;
