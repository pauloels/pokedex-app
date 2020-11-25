import 'react-native-gesture-handler'; // sempre importar no começo de acordo com a docuementação

import React from 'react';
import { View, StatusBar, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="#28262E"
      />

      <View style={{ flex: 1, backgroundColor: '#312E38' }}>
        <Routes />
      </View>
    </NavigationContainer>
  );
};

export default App;
