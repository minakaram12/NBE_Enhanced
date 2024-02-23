/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import type { PropsWithChildren } from 'react';
import Layouts from './constants/styles/layouts';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';
import DrawerMenu from './components/screens/DrawerNavigator/DrawerMenu';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import MainBtn from './components/atoms/MainBtn/MainBtn';
type SectionProps = PropsWithChildren<{
  title: string;
}>;
import TrasferScreen from './components/screens/TranferScreen/TransferScreen';
import TopNavImg from './components/atoms/TopNavImg/TopNavImg';
import MenuContent from './components/screens/DrawerNavigator/MenuContent';
import IconCard from './components/atoms/IconCard/IconCard';
import BellSvg from './assets/svgs/BellSvg';
import BackSvg from './assets/svgs/BackSvg';
import MenuTogglerSvg from './assets/svgs/MenuTogglerSvg';
import { width } from '@fortawesome/free-solid-svg-icons/faEye';
import Logo from './assets/svgs/Logo';
import TopNavigator from './components/molecules/TopNavigator/TopNavigator';
import { theme } from './theme/theme'
import { getTheme, setTheme  } from './storage/mmkv';
import { colors } from './theme/colors';
import { ThemeProvider } from './ContextAPI/ThemeContext';
function Section({ children, title }: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}



function App(): React.JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';


  // const [isEnabled, setIsEnabled] = useState(getTheme()=='Dark');
  // const [DarkMode, setIsDarkMode] = useState(getTheme());

  
  
  // const toggleSwitch = () => {
  //   setIsEnabled((previousState) => !previousState);
  //   const newTheme = isEnabled ? 'Light' : 'Dark';
  //   setIsDarkMode(newTheme);
    
  // };

  // useEffect(() => {
  //  setTheme(DarkMode);
  // }, [DarkMode ,getTheme()]); 


  // console.log("inAPP.TSX" + getTheme());
  // console.log(theme?.bg);

  const backgroundStyle = {
    backgroundColor: theme?.bg,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        // barStyle={isEnabled ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        // contentInsetAdjustmentBehavior="automatic"
        style={[backgroundStyle]}>
        {/* <Header /> */}
        <ThemeProvider>
           <DrawerMenu children={<></>}></DrawerMenu>
       </ThemeProvider> 
              
       
         {/* <Test isEnabledDark={isEnabled} toggleSwitch={toggleSwitch} /> */}
        <View
          // style={{
          //   backgroundColor: isDarkMode ? Colors.black : Colors.white,
          // }}
        >
          {/* <Section title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section> */}

          {/* <View style={[Layouts.row]}>
            <MainBtn children="Log in" />
            <Text>Helooooooooo</Text>
          </View> */}
          {/* <View style={{flexDirection: 'row', width: '100%'}}>
            <TouchableOpacity
              style={{flex: 2, backgroundColor: 'blue', padding: 10, margin: 5}}
              onPress={() => {
                // Handle button press
              }}>
              <Text style={{color: 'white'}}>Button</Text>
            </TouchableOpacity>

            <View
              style={{
                flex: 1,
                backgroundColor: 'green',
                padding: 10,
                margin: 5,
              }}>
              <Text style={{color: 'white'}}>Your Text</Text>
            </View>
          </View> */}


          {/* <DrawerMenu isEnabledDark={isEnabled} toggleSwitch={toggleSwitch}></DrawerMenu> */}

          {/* <IconCard icon={BackSvg} Type='back'/>
          <IconCard icon={BellSvg} Type="Notification" />
          <IconCard 
          icon={MenuTogglerSvg} 
          customContainerstyle={{ width: 60, height: 60, backgroundColor: 'black' }} 
          iconProps={{ fill: 'red' }}/>
          <IconCard icon={MenuTogglerSvg} iconProps={{ fill: 'red'}} />  */}
          {/* <IconCard icon={Logo} iconProps={{width: 20, height: 60}}></IconCard>

          {/* <TopNavigator
            contentLeft={<IconCard icon={MenuTogglerSvg}/> }
            contentMiddle={
              <TopNavImg
                name="Ahmed"
                imgUrl={require('./assets/images/dummyUser.png')}
              />
            }
            contentRight={
              <IconCard
                icon={BellSvg}
                Type='Notification'
              />
            }
          /> */}



          {/* 
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
