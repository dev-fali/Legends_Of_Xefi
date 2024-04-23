import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const APropos = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = () => {
    // Logique pour envoyer le formulaire (à implémenter)
    console.log('Email:', email);
    console.log('Sujet:', subject);
    console.log('Message:', message);
    // Réinitialisation des champs après l'envoi
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>À Propos</Text>
      <Text style={styles.description}>Mystic Forge Studios
 
 Situés au cœur de l'innovation et de la créativité, nous sommes une équipe passionnée de développeurs, de designers et de conteurs dédiée à la création d'expériences vidéoludiques immersives et captivantes.
 
 Notre Mission
 
 Chez Mystic Forge Studios, notre mission est de transcender les frontières traditionnelles du jeu vidéo pour offrir des aventures uniques et mémorables. Nous croyons en la puissance du jeu pour rassembler les gens, raconter des histoires profondes et offrir des expériences enrichissantes qui restent avec les joueurs longtemps après qu'ils aient mis de côté leur console.Contact </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Adresse e-mail"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Sujet"
          value={subject}
          onChangeText={setSubject}
        />
        <TextInput
          style={[styles.input, styles.messageInput]}
          placeholder="Message"
          multiline
          numberOfLines={4}
          value={message}
          onChangeText={setMessage}
        />
        <Button title="Envoyer" onPress={handleSend} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  form: {
    width: '100%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  messageInput: {
    height: 100,
  },
});

export default APropos;
