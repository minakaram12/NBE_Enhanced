import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {SelectList} from 'react-native-dropdown-select-list';

import Layouts from '../../../constants/styles/layouts';
import shadows from '../../../constants/styles/shadows';

import styles from './DropdownMenu.style';
const DropdownMenu = ({options, title}) => {
  const [selected, setSelected] = useState('');


  console.log(selected);

  return (
    <View style={[styles.card, shadows(), Layouts.my.md, Layouts.mx.lg]}>
      <View style={styles.content}>
        <Text style={[styles.title, Layouts.px.xl]}>{title}</Text>

        <SelectList
          setSelected={val => setSelected(val)}
          data={options}
          save="value"
          boxStyles={styles.dropBorder} // Customize dropdown background color
          inputStyles={styles.dropList}
          dropdownTextStyles={styles.dropList}
          dropdownStyles={styles.dropStyle}
          defaultOption={{key: options[0].key, value: options[0].value}}
        />
      </View>
    </View>
  );
};

// const styles = StyleSheet.create({
//   card: {
//     backgroundColor: '#ffffff',
//     borderRadius: 10,
//     borderWidth: 1,
//     borderColor: '#eeeeee',
//     overflow: 'hidden',
//   },

//   content: {
//     padding: 10,
//   },
//   title: {
//     fontSize: 17,
//     fontFamily: 'Roboto-Black',
//     color: '#1C2437',
//   },
//   dropBorder: {
//     borderColor: 'transparent',
//   },
//   dropList: {
//     fontFamily: 'Roboto-Regular',
//     fontSize: 20,
//     color: '#1C2437',
//   },
// });

export default DropdownMenu;
