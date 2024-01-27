import React from 'react';
import { View, Text, Image, Linking, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const App = () => {
  const myPhoto = require('./docs/IMG_7389.jpg');
  const email = 'tpatel@hgtc.edu';
  const phoneNumber = '+1234567890';
  const githubLink = 'https://github.com/tishapatel27/IST236_2024';

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Business Card App</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={myPhoto} style={styles.image} />
      </View>
      <View style={styles.contactContainer}>
        <Text style={styles.contactText}>Name: Tisha Patel</Text>
        <Text style={styles.contactText} onPress={() => Linking.openURL(`mailto:${email}`)}>
          Email: {email}
        </Text>
        <Text style={styles.contactText} onPress={() => Linking.openURL(`tel:${phoneNumber}`)}>
          Phone: {phoneNumber}
        </Text>
        <Text style={styles.contactText} onPress={() => Linking.openURL(githubLink)}>
          GitHub: {githubLink}
        </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#3498db',
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
  },
  imageContainer: {
    alignItems: 'center',
    margin: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  contactContainer: {
    margin: 20,
  },
  contactText: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default App;
