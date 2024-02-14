import React from 'react';
import {
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
  View,
  TextInput,
  TextInputProps,
} from 'react-native';

import {layouts} from '../../../constants/styles';
import ClosedEye from './ClosedEye';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

interface InputProps extends TextInputProps {
  label: string;
  variant?: 'primary' | 'secondary' | 'transparent';
  disabled?: boolean;
  textStyle?: StyleProp<TextStyle> | null;
  disabledStyle?: StyleProp<ViewStyle> | null;
  leftIcon?: string;
  leftIconSize?: number;
  leftIconColor?: string;
}

const InputField: React.FC<InputProps> = ({
  label,
  //   variant = 'primary',
  //   disabled = false,
  //   textStyle = null,
  //   disabledStyle = null,

  leftIcon,
  leftIconSize = 20,
  leftIconColor = '#000',
  placeholder,
}) => {
  return (
    <View
      style={[
        layouts.row,
        layouts.allCentered,
        layouts.ps.xl,
        layouts.pe.xl,
        // eslint-disable-next-line react-native/no-inline-styles
        {
          borderWidth: 1,
          borderColor: 'black',
          borderRadius: 10,
          margin: 5,
          backgroundColor: '#fff',
        },
      ]}>
      <View style={[layouts.me.xl]}>
        <FontAwesomeIcon
          icon={leftIcon}
          size={leftIconSize}
          color={leftIconColor}
        />
      </View>
      {/* <View style={[layouts.me.xl]}>{leftIcon}</View> */}
      <View style={[layouts.flexed, {marginTop: 8}]}>
        <Text style={[{color: 'black', fontSize: 14, fontWeight: 'bold'}]}>
          {label}
        </Text>
        <View style={[layouts.row, layouts.allCentered]}>
          <TextInput
            inlineImageLeft="search_icon"
            style={[
              {margin: 0, padding: 0, paddingVertical: 5, fontSize: 16},
              layouts.flexed,
            ]}
            placeholder={placeholder}
          />
          <ClosedEye />
        </View>
      </View>
    </View>
  );
};

export default InputField;
