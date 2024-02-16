import React, {useEffect, useMemo, useState} from 'react';
import {
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
  View,
  TextInput,
  TextInputProps,
  Pressable,
} from 'react-native';

import {layouts} from '../../../constants/styles';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEye} from '@fortawesome/free-solid-svg-icons/faEye';
import {faEyeSlash} from '@fortawesome/free-solid-svg-icons/faEyeSlash';
import {faCircleExclamation} from '@fortawesome/free-solid-svg-icons/faCircleExclamation';

import {IconProp} from '@fortawesome/fontawesome-svg-core';
import styles from './InputField.style';

interface InputProps extends TextInputProps {
  label?: string;
  placeholder?: string;
  variant?: 'primary' | 'outline' | 'transparent';
  // styles
  outerContainerStyle?: StyleProp<ViewStyle> | null;
  innerContainerStyle?: StyleProp<ViewStyle> | null;
  labelStyle?: StyleProp<TextStyle> | null;
  // left icon
  leftIcon?: string;
  leftIconSize?: number;
  leftIconColor?: string;
  // boolean props
  disabled?: boolean;
  isPassword?: boolean;
  isRequired?: boolean;
  // functions
  validation?: (value: string) => string | null;
  onChangeText?: (text: string) => void;
}

const InputField: React.FC<InputProps> = ({
  label,
  placeholder,
  variant = 'primary',
  outerContainerStyle = null,
  innerContainerStyle = null,
  labelStyle = null,
  leftIcon,
  leftIconSize = 20,
  leftIconColor = '#B7B7B7',
  disabled = false,
  isPassword = false,
  isRequired = false,
  validation,
  onChangeText,
}) => {
  const finalInnerContainerStyle = useMemo(() => {
    switch (variant) {
      case 'primary':
        return styles.innerContainer;
      case 'outline':
        return styles.outlineContainer;
      case 'transparent':
        return styles.transparentContainer;
      default:
        return styles.innerContainer;
    }
  }, [variant]);

  const finalErrorInnerContainerStyle = useMemo(() => {
    switch (variant) {
      case 'primary':
        return styles.innerContainer;
      case 'outline':
        return styles.outlineErrorContainer;
      case 'transparent':
        return styles.transparentErrorContainer;
      default:
        return styles.innerContainer;
    }
  }, [variant]);

  const finalLabelStyle = useMemo(() => {
    switch (variant) {
      case 'primary':
        return null;
      case 'outline':
        return null;
      case 'transparent':
        return styles.whiteTextColor;
      default:
        return null;
    }
  }, [variant]);

  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(prevState => !prevState);
  };

  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleInputEndEditing = () => {
    if (isRequired && inputValue.trim() === '') {
      setErrorMessage('Field is required');
    } else if (validation) {
      const error = validation(inputValue);
      setErrorMessage(error);
    } else {
      setErrorMessage(null);
    }
  };

  useEffect(() => {
    if (isPassword) {
      setIsPasswordVisible(false);
    }
  }, [isPassword]);

  return (
    <View style={[styles.outerContainer]}>
      <View
        style={[
          layouts.row,
          layouts.allCentered,
          layouts.px.xl,
          styles.innerContainer,
          errorMessage ? finalErrorInnerContainerStyle : null,
          finalInnerContainerStyle,
        ]}>
        {leftIcon && (
          <View style={[layouts.me.xl]}>
            <FontAwesomeIcon
              icon={leftIcon as IconProp}
              size={leftIconSize}
              color={leftIconColor}
            />
          </View>
        )}
        <View style={[layouts.flexed, layouts.xCentered]}>
          {label && (
            <Text style={[styles.label, layouts.mt.lg, finalLabelStyle]}>
              {label}
            </Text>
          )}
          <View style={[layouts.row, layouts.allCentered]}>
            <TextInput
              style={[styles.input, layouts.flexed]}
              placeholder={placeholder}
              secureTextEntry={isPasswordVisible ? false : true}
              editable={disabled ? false : true}
              selectTextOnFocus={disabled ? false : true}
              placeholderTextColor={
                variant === 'transparent' ? '#cfcfcf' : '#B7B7B7'
              }
              onEndEditing={handleInputEndEditing}
              onChangeText={text => {
                setInputValue(text);
                if (onChangeText) {
                  onChangeText(text);
                }
                handleInputEndEditing(); // can run this if want check validation while text change
              }}
            />
            {isPassword && (
              <Pressable
                style={[styles.icon]}
                onPress={togglePasswordVisibility}>
                {/* <ClosedEye /> */}
                <FontAwesomeIcon
                  icon={isPasswordVisible ? faEye : faEyeSlash}
                  size={20}
                  color={variant === 'transparent' ? '#fff' : '#B7B7B7'}
                />
              </Pressable>
            )}
          </View>
        </View>
      </View>
      {errorMessage && (
        <View style={[layouts.row, layouts.mt.md, layouts.yCentered]}>
          <FontAwesomeIcon icon={faCircleExclamation} size={16} color={'red'} />
          <Text style={[styles.label, layouts.ms.sm, styles.errorTextColor]}>
            {errorMessage}
          </Text>
        </View>
      )}
    </View>
  );
};

export default InputField;
