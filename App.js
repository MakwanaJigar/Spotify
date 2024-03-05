import React from 'react';
import { View, StatusBar } from 'react-native'; // Import StatusBar from 'react-native'
import Navigation from './src/Screen/Navigations/Navigation';
import Login from './src/Screen/Login/Login';

const App = () => {
  return (
    <View style={{ flex: 1 }}>

      <StatusBar backgroundColor='black' />
      <Navigation />
   
    </View>
  );
}

export default App;
