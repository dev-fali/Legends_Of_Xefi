import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
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
};

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

export default HomeScreen;
