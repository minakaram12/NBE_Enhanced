import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "../../ContextAPI/ThemeContext";
import BottomTabsNavigation from "../atoms/BottomTabsNavigation/BottomTabNavigation.component";
import DrawerMenu from "../screens/DrawerNavigator/DrawerMenu";
import SplashScreen from "../screens/SplashScreen/SplashScreen";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import Signup from "../screens/Signup/Signup";
import { createStackNavigator } from "@react-navigation/stack";
import { icon } from "@fortawesome/fontawesome-svg-core";

const Stack = createStackNavigator();

const DefaultScreen: React.FC = () => {
  return (
    <DrawerMenu>
      <BottomTabsNavigation></BottomTabsNavigation>
    </DrawerMenu>
  
   
    
  )

}
export default DefaultScreen;