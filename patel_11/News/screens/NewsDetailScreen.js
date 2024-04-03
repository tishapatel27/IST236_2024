import { View, Text, StyleSheet, Image } from "react-native";
import { useState, useLayoutEffect } from "react";
import { NEWS } from "../data/dummy-data";
import BookmarkButton from "../components/BookmarkButton";
import Colors from "../constants/colors";

function NewsDetailScreen(props) {
  // Extracting newsId from route parameters
  const newsId = props.route.params.newsId;

  // Finding the selected news item using newsId
  const selectedNews = NEWS.find((news) => news.id === newsId);

  // State to track whether bookmark button is pressed
  const [pressed, setPressed] = useState(false);

  // Function to handle press on header button
  function headerButtonPressHandler() {
    setPressed(!pressed);
  }

  // Effect to update navigation options
  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: "",
      headerRight: () => {
        return (
          <BookmarkButton
            pressed={pressed}
            onPress={headerButtonPressHandler}
          />
        );
      },
    });
  }, [props.navigation, headerButtonPressHandler]);

  return (
    <View style={styles.rootContainer}>
      {/* Displaying news image */}
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: selectedNews.imageUrl }}
        />
      </View>

      {/* Displaying news details */}
      <View style={styles.infoContainer}>
        <Text style={styles.title}>
          {selectedNews.title}
        </Text>
        <Text style={styles.date}>
          {selectedNews.date}
        </Text>
        <Text style={styles.author}>
          By {selectedNews.author}
        </Text>
        <Text style={styles.source}>
          Source: {selectedNews.source}
        </Text>
        <Text style={styles.description}>
          {selectedNews.description}
        </Text>
      </View>
    </View>
  );
}

export default NewsDetailScreen;

// Styles
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  imageContainer: {
    marginVertical: 10,
    height: 300,
  },
  image: {
    height: "100%",
    resizeMode: "cover",
    borderRadius: 7,
  },
  infoContainer: {
    borderRadius: 7,
    backgroundColor: Colors.primary500o8,
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 25,
    color: 'black',
    fontFamily: "newsBold",
    paddingBottom: 5,
  },
  date: {
    color: Colors.primary300,
    fontSize: 18,
    fontFamily: "news",
    paddingBottom: 5,
  },
  author: {
    color: Colors.primary300,
    fontSize: 18,
    fontFamily: "news",
    paddingBottom: 5,
  },
  source: {
    color: Colors.primary300,
    fontSize: 18,
    fontFamily: "news",
    paddingBottom: 5,
  },
  description: {
    color: Colors.primary300,
    width: "100%",
    textAlign: "justify",
    fontSize: 15,
    fontFamily: "news",
  }
});
