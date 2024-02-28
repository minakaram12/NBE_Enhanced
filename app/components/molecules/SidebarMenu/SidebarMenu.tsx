import MenuItem from '../../atoms/MenuItem/MenuItem';
import { myArray,MenuItems } from '../../../Faker/Faker';
import SwitchBtn from '../../atoms/SwitchBtn/SwitchBtn';
import { styles } from './SidebarMenu.style';
import {View} from 'react-native';
 

  const Sidebar: React.FC  = () => {
 
    return (
        <View>
        {myArray.map((item: MenuItems, index: number) => (
          <View key={index}>
            {item.text === 'Dark Mode' ? (
              <View style={styles.DarkModeContainer}>
                <MenuItem iconName={item.icon} itemTitle={item.text} />
                <SwitchBtn />
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