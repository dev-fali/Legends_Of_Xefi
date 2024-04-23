import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, FlatList, TouchableOpacity, Image } from 'react-native';

const Character = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  useEffect(() => {
    fetch('http://api-fantasygame.eu-4.evennode.com/get-characters')
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        setLoading(false);
      });
  }, []);

  const handleCharacterPress = (characterId) => {
    const character = characters.find((char) => char.id === characterId);
    setSelectedCharacter(character);
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {selectedCharacter ? (
        <View style={styles.characterDetails}>
          <Image source={{ uri: selectedCharacter.img }} style={styles.characterImage} />
          <Text style={styles.characterName}>{selectedCharacter.name}</Text>
          <Text style={styles.characterDescription}>{selectedCharacter.description}</Text>
          <Text style={styles.characterRarity}>Rarity: {selectedCharacter.rarity}</Text>
          <Text style={styles.characterStats}>HP: {selectedCharacter.hp}</Text>
          <Text style={styles.characterStats}>Attack Points: {selectedCharacter.attack_points}</Text>
          <Text style={styles.characterStats}>Main Attack: {selectedCharacter.main_attack}</Text>
          <TouchableOpacity style={styles.backButton} onPress={() => setSelectedCharacter(null)}>
            <Text style={styles.backButtonText}>Back</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={characters}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.characterCard} onPress={() => handleCharacterPress(item.id)}>
              <Text style={styles.characterName}>{item.name}</Text>
              <Text style={styles.characterDescription}>{item.description}</Text>
              <Text style={styles.characterRarity}>Rarity: {item.rarity}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  characterCard: {
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  characterDetails: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  characterImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  characterName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  characterDescription: {
    fontSize: 16,
    marginBottom: 10,
  },
  characterRarity: {
    fontSize: 14,
    fontStyle: 'italic',
    marginBottom: 5,
  },
  characterStats: {
    fontSize: 14,
    marginBottom: 5,
  },
  backButton: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 5,
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Character;
