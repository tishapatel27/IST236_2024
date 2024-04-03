import { View, Text } from "react-native";
import { useContext } from "react";
import NewsItem from "../components/List/NewsItem";
import { NEWS } from "../data/dummy-data";
import List from "../components/List/List";
import { StyleSheet } from "react-native";
import { BookmarksContext } from "../context/bookmarks-context";
import Colors from "../constants/colors";
Colors, NewsItem
function BookmarksScreen() {
  const bookmarkedArticlesCtx = useContext(BookmarksContext);
  const bookmarkedArticles = NEWS.filter((NewsItem) => {
    return bookmarkedArticlesCtx.ids.includes(NewsItem.id);
  });

  if (bookmarkedArticles.length === 0){
    return <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no saved articles yet!</Text>
    </View>
  }
  return <List items={bookmarkedArticles} />;
}

  // Export to different files
  export default BookmarksScreen;
  
  const styles = StyleSheet.create({
    rootContainer:{
      flex:1,
      justifyContent: 'center',
      alignItems:'center',
  },
  text: {
    fontSize: 26,
    textAlign:'center', 
    fontFamily:"newsBold",
},
});