import BottomTabsNavigation from '../atoms/BottomTabsNavigation/BottomTabNavigation.component';
import DrawerMenu from '../screens/DrawerNavigator/DrawerMenu';

const DefaultScreen: React.FC = () => {
  return (
    <DrawerMenu>
      <BottomTabsNavigation></BottomTabsNavigation>
    </DrawerMenu>
  );
};
export default DefaultScreen;
