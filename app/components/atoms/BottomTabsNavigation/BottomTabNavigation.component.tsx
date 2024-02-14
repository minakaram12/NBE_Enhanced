import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';
import  Icon  from 'react-native-vector-icons/AntDesign';
import  IconFontAwsome  from 'react-native-vector-icons/FontAwesome';

function BottomTabsNavigation() {

    const Tab = createBottomTabNavigator();
    const addHomeIcon = {tabBarIcon:({size,color})=>{return <Icon  name="home" color={color} size={size}/>}};
    const addTransfer = {tabBarIcon:({size,color})=>{return(
    
        <IconFontAwsome name="paper-plane-o" color={color} size={size}/>
    )},


}

const globalStyle = {
    tabBarActiveBackgroundColor:"#007236",
    tabBarInactiveBackgroundColor:"#F1F3FB",
    tabBarActiveTintColor:"#ffffff",
    tabBarInactiveTintColor:"#B7B7B7",
    tabBarStyle:{height:70,          backgroundColor: 'blue',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,},
    showLabel:false,
    
}


    const  tabBarStyle = {
        style:{backgroundColor: '#e4e4e4'}
      };
    return(
        <Tab.Navigator initialRouteName='screen1' screenOptions={globalStyle} >
            <Tab.Screen name='Screen1' component={Screen1} options={{...addHomeIcon}}  />
            <Tab.Screen name='Screen2' component={Screen2} options={{...addTransfer}} />
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