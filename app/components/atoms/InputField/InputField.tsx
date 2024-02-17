import React, {useEffect, useMemo, useState} from 'react';
import {
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
  View,
  TextInput,
  Pressable,
} from 'react-native';

import {layouts} from '../../../constants/styles';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEye} from '@fortawesome/free-solid-svg-icons/faEye';
import {faEyeSlash} from '@fortawesome/free-solid-svg-icons/faEyeSlash';
import {faCircleExclamation} from '@fortawesome/free-solid-svg-icons/faCircleExclamation';

import {IconProp} from '@fortawesome/fontawesome-svg-core';
import styles from './InputField.style';
import {Field, FormikValues, useFormikContext} from 'formik';

interface InputProps {
  name: string;
  label?: string;
  placeholder?: string;
  variant?: 'primary' | 'outline' | 'transparent';
  // styles
  outerContainerStyle?: StyleProp<ViewStyle> | Array<ViewStyle> | null;
  innerContainerStyle?: StyleProp<ViewStyle> | Array<ViewStyle> | null;
  labelStyle?: StyleProp<TextStyle> | Array<TextStyle> | null;
  // left icon
  leftIcon?: string;
  leftIconSize?: number;
  leftIconColor?: string;
  // boolean props
  disabled?: boolean;
  isPassword?: boolean;
}

const InputField: React.FC<InputProps> = ({
  name,
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

  const {values, errors, touched} = useFormikContext<FormikValues>();
  const isError = errors[name] && touched[name];

  useEffect(() => {
    if (isPassword) {
      setIsPasswordVisible(false);
    }
  }, [isPassword]);

  return (
    <View style={[outerContainerStyle]}>
      <View
        style={[
          layouts.row,
          layouts.allCentered,
          layouts.px.xl,
          styles.innerContainer,
          finalInnerContainerStyle,
          isError ? finalErrorInnerContainerStyle : null,
          innerContainerStyle,
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
            <Text
              style={[
                styles.label,
                layouts.mt.lg,
                finalLabelStyle,
                isError ? styles.errorTextColor : null,
                labelStyle,
              ]}>
              {label}
            </Text>
          )}
          <View style={[layouts.row, layouts.allCentered]}>
            <Field name={name}>
              {({field}) => (
                <TextInput
                  style={[styles.input, layouts.flexed]}
                  placeholder={placeholder}
                  secureTextEntry={isPasswordVisible ? false : true}
                  editable={disabled ? false : true}
                  selectTextOnFocus={disabled ? false : true}
                  placeholderTextColor={
                    variant === 'transparent' ? '#cfcfcf' : '#B7B7B7'
                  }
                  onChangeText={field.onChange(name)}
                  onBlur={field.onBlur(name)}
                  value={values[name]}
                />
              )}
            </Field>
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
      {isError && (
        <View style={[layouts.row, layouts.mt.md, layouts.yCentered]}>
          <FontAwesomeIcon icon={faCircleExclamation} size={16} color={'red'} />
          <Text style={[styles.label, layouts.ms.sm, styles.errorTextColor]}>
            {errors[name]}
          </Text>
        </View>
      )}
    </View>
  );
};

export default InputField;
