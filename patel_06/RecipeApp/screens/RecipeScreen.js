import { FlatList, Image, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import NavButton from "../components/NavButton";
import RecipeItem from "../components/RecipeItem";
import RecipeView from "../modals/RecipeView";
import { useState } from "react";

// Function to display the Recipe Screen
function RecipeScreen(props) {

  // Get safe area insets for adjusting to device edges
  const insets = useSafeAreaInsets();

  // State variables for handling modal visibility and content
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [modalRecipeTitle, setModalRecipeTitle] = useState("");
  const [modalRecipeText, setModalRecipeText] = useState("");

  // Function to handle showing recipe details in the modal
  function recipeViewHandler(title, text) {
    setModalRecipeTitle(title);
    setModalRecipeText(text);
    setModalIsVisible(true);
  }

  // Function to close the recipe details modal
  function closeRecipeViewHandler() {
    setModalIsVisible(false);
  }

  // Render the Recipe Screen
  return (
    <View
      style={[
        styles.rootContainer,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      {/* Container for the title */}
      <View style={styles.titleContainer}>
        <Title>List of Recipes</Title>
      </View>

      {/* Container for the list of recipes */}
      <View style={styles.itemContainer}>
        {/* FlatList to display individual recipe items */}
        <FlatList
          data={props.currentRecipes}
          keyExtractor={(item, index) => item.id.toString()} // Use item ID as the key
          alwaysBounceVertical={false}
          renderItem={(itemData) => {
            return (
              // Display each recipe item using RecipeItem component
              <RecipeItem
                id={itemData.item.id}
                title={itemData.item.title}
                onView={recipeViewHandler.bind(
                  this,
                  itemData.item.title,
                  itemData.item.text
                )}
                onDelete={props.onDelete.bind(this, itemData.item.id)}
              />
            );
          }}
        />
      </View>

      {/* Container for navigation buttons */}
      <View style={styles.navButtonContainer}>
        {/* Button to add a new recipe */}
        <View style={styles.navButton}>
          <NavButton onNext={props.onAdd}>Add a Recipe</NavButton>
        </View>
        {/* Button to return to the Home Screen */}
        <View style={styles.navButton}>
          <NavButton onNext={props.onHome}> Home</NavButton>
        </View>
      </View>

      {/* Display the RecipeView modal for showing detailed recipe information */}
      <RecipeView
        visible={modalIsVisible}
        title={modalRecipeTitle}
        text={modalRecipeText}
        onClose={closeRecipeViewHandler}
      />
    </View>
  );
}

export default RecipeScreen;

// Styles for the RecipeScreen component
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: "90%",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  itemContainer: {
    flex: 6,
  },
  navButtonContainer: {
    flex: 3,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
  },
  navButton: {
    marginHorizontal: 10,
  },
});
