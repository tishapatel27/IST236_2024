import { ScrollView, StyleSheet, TextInput, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import NavButton from "../components/NavButton";
import Colors from "../constants/Colors";
import { useState } from "react";

// Function to display the Add Recipe Screen
function AddRecipeScreen(props) {
  // Get safe area insets for adjusting to device edges
  const insets = useSafeAreaInsets();

  // State to manage the entered recipe title and text
  const [recipeTitle, setRecipeTitle] = useState("");
  const [recipeText, setRecipeText] = useState("");

  // Handler function to add a new recipe
  function addRecipeHandler() {
    props.onAdd(recipeTitle, recipeText);
    props.onCancel();
  }

  // Render the Add Recipe Screen
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
        <Title>Add a Recipe</Title>
      </View>

      {/* Container for the scrollable content */}
      <View style={styles.scrollContainer}>
        <ScrollView>
          {/* Container for recipe title input */}
          <View style={styles.recipeTitleContainer}>
            <TextInput
              placeholder="Recipe Title"
              style={styles.recipeTitle}
              onChangeText={setRecipeTitle}
            />
          </View>

          {/* Container for recipe text input */}
          <View style={styles.recipeTextContainer}>
            <TextInput
              placeholder="List Ingredients"
              style={styles.recipeText}
              onChangeText={setRecipeText}
              textAlignVertical="top"
              multiline={true}
              numberOfLines={50}
            />
          </View>

          {/* Container for navigation buttons */}
          <View style={styles.navButtonContainer}>
            <View style={styles.navButton}>
              {/* Button to add the recipe */}
              <NavButton onNext={addRecipeHandler}>Add</NavButton>
            </View>
            <View style={styles.navButton}>
              {/* Button to cancel and go back to the recipe screen */}
              <NavButton onNext={props.onCancel}>Back</NavButton>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export default AddRecipeScreen;

// Styles for the AddRecipeScreen component
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    marginBottom: 70,
  },
  scrollContainer: {
    flex: 10,
    width: 350,
  },
  recipeTitleContainer: {
    borderWidth: 4,
    backgroundColor: "white",
    borderColor: '#f55742',
  },
  recipeTitle: {
    color: "black",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: 'center',
  },
  recipeTextContainer: {
    marginVertical: 5,
    borderWidth: 3,
    backgroundColor: "white",
    borderColor:'#f55742',
    height: 400,
    textAlign: 'center',
  },
  recipeText: {
    color: "black",
    fontSize: 20,
    width: 150,
  },
  navButtonContainer: {
    flex: 2,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 25,
    marginTop: 20,
    marginBottom: 20,
  },
  navButton: {
    marginHorizontal: 10,
  },
});
