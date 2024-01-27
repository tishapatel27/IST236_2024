// App.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import MagicEightBall from './components/MagicEightBall';

const App = () => {
  return (
    <View style={styles.container}>
      <MagicEightBall />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});

export default App;
