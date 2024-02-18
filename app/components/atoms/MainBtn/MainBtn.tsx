import React, {useMemo} from 'react';
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StyleProp,
  ViewStyle,
  TextStyle,
  View,
} from 'react-native';

import styles from './MainBtn.style';
import {layouts} from '../../../constants/styles';

interface ButtonProps {
  onPress(): void;
  onLongPress?: () => void;
  buttonText: string;
  variant?: 'primary' | 'secondary' | 'outline';
  isLoading?: boolean;
  disabled?: boolean;
  buttonStyle?: StyleProp<ViewStyle> | null;
  textStyle?: StyleProp<TextStyle> | null;
  indicatorColor?: string | null;
  indicatorSize?: 'small' | 'large' | number;
  disabledStyle?: StyleProp<ViewStyle> | null;
  disabledTextStyle?: StyleProp<TextStyle> | null;
  iconLeft?: any;
  iconRight?: any;
}

const MainBtn: React.FC<ButtonProps> = ({
  onPress,
  onLongPress,
  buttonText ,
  variant = 'primary',
  isLoading = false,
  disabled = false,
  buttonStyle = null,
  textStyle = null,
  indicatorColor = null,
  indicatorSize = 20.25,
  disabledStyle = null,
  disabledTextStyle = null,

  iconLeft,
  iconRight,
}) => {
  const finalButtonStyle = useMemo(() => {
    switch (variant) {
      case 'primary':
        return styles.primaryButton;
      case 'secondary':
        return styles.secondaryButton;
      case 'outline':
        return styles.outlineButton;
      default:
        return styles.primaryButton;
    }
  }, [variant]);
  const finalTextStyle = useMemo(() => {
    switch (variant) {
      case 'primary':
        return styles.primaryText;
      case 'secondary':
        return styles.secondaryText;
      case 'outline':
        return styles.outlineText;
      default:
        return styles.primaryText;
    }
  }, [variant]);
  const finalIndicatorColor = useMemo(() => {
    switch (variant) {
      case 'primary':
        return '#ffffff';
      case 'secondary':
        return '#007236';
      case 'outline':
        return '#EB001B';
      default:
        return '#ffffff';
    }
  }, [variant]);

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      disabled={disabled || isLoading}
      style={[
        layouts.row,
        layouts.xCentered,
        layouts.yCentered,
        layouts.px.lg,
        layouts.rounded,
        styles.button,
        isLoading ? layouts.justifyAround : layouts.justifyBetween,
        disabled ? [styles.disabledButton, disabledStyle] : finalButtonStyle,
        buttonStyle,
      ]}>
      {isLoading ? (
        <ActivityIndicator
          color={indicatorColor || finalIndicatorColor}
          size={indicatorSize}
          style={[layouts.xCentered]}
        />
      ) : (
        <>
          <View>{iconLeft}</View>

          <Text
            style={[
              layouts.mx.md,
              // fontSizes.medium,
              styles.text,
              disabled ? disabledTextStyle : finalTextStyle,
              textStyle,
            ]}>
            {buttonText}
          </Text>

          <View>{iconRight}</View>
        </>
      )}
    </TouchableOpacity>
  );
};

export default MainBtn;
