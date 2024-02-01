import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const movies = [
  { title: 'Kabhi Khushi Kabhi Gham', rating: '8.7/10', image: require('./assets/images/imgone.jpg') },
  { title: 'Yeh Jawani Hai Deewani', rating: '9/10', image: require('./assets/images/imgtwo.jpg') },
  { title: '3 Idiots', rating: '10/10', image: require('./assets/images/imgthree.jpg') },
  { title: 'RRR', rating: '10/10', image: require('./assets/images/imgfour.jpg') },
  { title: 'Animal', rating: '8/10', image: require('./assets/images/imgfive.jpg') },
  { title: 'Tiger Zinda Hai', rating: '7.4/10', image: require('./assets/images/imgsix.jpg') },
  { title: 'Pathaan', rating: '7/10', image: require('./assets/images/imgseven.jpg') },
  { title: 'Golmaal', rating: '9.3/10', image: require('./assets/images/imgeight.jpg') },
  { title: 'Welcome', rating: '9.2/10', image: require('./assets/images/imgnine.jpg') },
  { title: 'Zindagi Na Milegi Dobara', rating: '8.9/10', image: require('./assets/images/imgten.jpg') },
];

const MovieItem = ({ title, rating, image }) => (
  <View style={styles.movieContainer}>
    <Image source={image} style={styles.movieImage} />
    <Text style={styles.movieTitle}>{title}</Text>
    <Text style={styles.movieRating}>{`Rating: ${rating}`}</Text>
  </View>
);

const App = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Top Ten Movies</Text>
    <FlatList
      data={movies}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => <MovieItem {...item} />}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  movieContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  movieImage: {
    width: "100%",
    height: 300,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 10,
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  movieRating: {
    fontSize: 16,
  },
});

export default App;
