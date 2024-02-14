import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';

function BottomTabsNavigation() {

    const Tab = createBottomTabNavigator();

    return(
        <Tab.Navigator>
            <Tab.Screen name='Screen1' component={Screen1} />
            <Tab.Screen name='Screen2' component={Screen2} />
            <Tab.Screen name='Screen3' component={Screen3} />
            <Tab.Screen name='Screen4' component={Screen4} />
            <Tab.Screen name='Screen5' component={Screen5} />
        </Tab.Navigator>
    )
    
}

export default BottomTabsNavigation;

function Screen1(){
    return(
        <Text>screen 1</Text>
    )
}
function Screen2(){
    return(
        <Text>screen 2</Text>
    )
}
function Screen3(){
    return(
        <Text>screen 3</Text>
    )
}
function Screen4(){
    return(
        <Text>screen 4</Text>
    )
}
function Screen5(){
    return(
        <Text>screen 5</Text>
    )
}