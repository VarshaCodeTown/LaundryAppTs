// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import React from 'react';
// import type {PropsWithChildren} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//      <Text>Hello</Text>
//     </View>
//   );
// }

// function App(): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.tsx</Text> to change this
//             screen and then come back to see your edits.
//           </Section> 
//       </ScrollView>
//     </SafeAreaView>
//   );
// }
// export default App;


import { NavigationContainer } from '@react-navigation/native';
import React, { FC } from 'react';
import {View,Text} from 'react-native';
import MainBtnComponent from './src/component/MainBtnComponent';
import AuthstackNavigator from './src/navigation/AuthstackNavigator';
import SelectArea from './src/screen/SelectArea';
import SelectLocation from './src/screen/SelectLocation';
import Signup from './src/screen/Signup';
import VerificationCode from './src/screen/VerificationCode';

const App:FC =()=>{
  return(
    
    <NavigationContainer>
      <AuthstackNavigator/>
    </NavigationContainer>
    
  )
}
export default App;