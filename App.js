import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import * as Font from 'expo-font';

import Nav from './components/Nav';

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'PoppinsRegular': require('./assets/fonts/Poppins-Regular.ttf'),
      });
      setFontsLoaded(true);
    };

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Nav />
    </NavigationContainer>
  );
}
