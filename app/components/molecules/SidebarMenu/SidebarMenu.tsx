import MenuItem from '../../atoms/MenuItem/MenuItem';
import { myArray,MenuItems } from '../../../Faker';
import SwitchBtn from '../../atoms/SwitchBtn/SwitchBtn';
import { styles } from './SidebarMenu.style';
import {
    Text,
    View,
    Image,
  } from 'react-native';
  interface SidebarProps{
    isEnabledDark:boolean;
    toggleSwitch:()=>void;
  }

  const Sidebar: React.FC <SidebarProps> = ({ isEnabledDark, toggleSwitch }) => {
 
    return (
        <View>
        {myArray.map((item: MenuItems, index: number) => (
          <View key={index}>
            {item.text === 'Dark Mode' ? (
              <View style={styles.DarkModeContainer}>
                <MenuItem iconName={item.icon} itemTitle={item.text} />
                <SwitchBtn isEnabledDark={isEnabledDark} toggleSwitch={toggleSwitch}/>
              </View>
            ) : (
              <MenuItem iconName={item.icon} itemTitle={item.text} />
            )}
          </View>
        ))}
      </View>
  );
};
  
  export default Sidebar;