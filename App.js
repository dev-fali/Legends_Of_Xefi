import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Home';
import PersonnagesScreen from './Personnages';
import AproposScreen from './Apropos';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Personnages" component={PersonnagesScreen} />
        <Tab.Screen name="A Propos" component={AproposScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
