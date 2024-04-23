import * as React from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Legends of Xefi</Text>
      <Text style={styles.sectionTitle}>Bienvenue dans les Terres de Xefi</Text>
      <Text style={styles.sectionContent}>Plongez dans le monde enchanté de Legends of Xefi, un jeu de rôle épique qui vous emmène au cœur d'une saga héroïque où le destin de nombreux royaumes est en jeu. 
Dans ce monde peuplé de créatures mythiques, de guerriers valeureux et de magiciens aux pouvoirs incommensurables, chaque choix que vous faites peut changer le cours de l'histoire</Text>
      <Text style={styles.sectionTitle}>Explorez des Paysages Envoûtants</Text>
      <Text style={styles.sectionContent}>Voyagez à travers des forêts ancestrales, des montagnes interdites et des royaumes souterrains oubliés. 
Chaque région de Xefi offre ses propres défis et ses secrets à découvrir. Les graphismes somptueux et les environnements immersifs vous transportent dans un univers où la beauté se mêle au danger</Text>
      <Text style={styles.sectionTitle}>Rencontrez des Personnages Inoubliables</Text>
      <Text style={styles.sectionContent}>Xefi est peuplée de personnages complexes dotés de leurs propres histoires et motivations. 
Forgez des alliances ou rivalisez avec des héros et des antagonistes qui ne sont pas toujours ce qu'ils semblent être. 
Votre capacité à interagir avec ces personnages déterminera votre capacité à réussir dans les quêtes et à influencer le monde autour de vous</Text>
    </ScrollView>
  );
}

function PersonnagesScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

function AproposScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Personnages" component={PersonnagesScreen} />
        <Tab.Screen name="A Propos" component={AproposScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionContent: {
    fontSize: 16,
    marginBottom: 20,
  },
});
