import React, {useState} from 'react';
import {View, Text, ViewStyle} from 'react-native';
import {SelectList} from 'react-native-dropdown-select-list';

import Layouts from '../../../constants/styles/layouts';
import shadows from '../../../constants/styles/shadows';

import styles from './DropdownMenu.style';
import DropDownSvg from '../../../assets/svgs/DropDownSvg';
interface DropdownMenuProps {
  options: Array<object>;
  title: string;
  onSelectOption?: (value: string) => void;
  style?: Array<ViewStyle>;
}
const DropdownMenu: React.FC<DropdownMenuProps> = ({
  options,
  title,
  onSelectOption,
  style,
}) => {
  const [selected, setSelected] = useState('');

  return (
    <View style={[styles.card, shadows(), Layouts.my.md, Layouts.mx.lg, style]}>
      <View style={styles.content}>
        <Text style={[styles.title, Layouts.px.xl]}>{title}</Text>

        <SelectList
          setSelected={(val: React.SetStateAction<string>) => {
            setSelected(val);
            if (onSelectOption) {
              onSelectOption(selected);
            }
          }}
          data={options}
          save="value"
          boxStyles={styles.dropBorder}
          inputStyles={styles.dropList}
          dropdownTextStyles={styles.dropList}
          dropdownStyles={styles.dropStyle}
          arrowicon={<DropDownSvg />}
        />
      </View>
    </View>
  );
};

export default DropdownMenu;
