// Import necessary modules and components
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useState } from "react";
import HomeScreen from "./screens/HomeScreen";
import RecipeScreen from "./screens/RecipeScreen";
import AddRecipeScreen from "./screens/AddRecipeScreen";
import Colors from "./constants/Colors";

// Main App component
export default function App() {
  // Load custom fonts
  const [fontsLoaded] = useFonts({
    Papernotes: require("./assets/fonts/Papernotes.ttf"),
  });

  // State variables
  const [currentScreen, setCurrentScreen] = useState("home");
  const [currentID, setCurrentID] = useState(4);
  const [currentRecipes, setCurrentRecipes] = useState([
    {
      id: 1,
      title: "Pani Puri",
      text: "1. Fry semolina puris. \n2. Stuff with mashed potatoes and seasoned chickpeas. \n3. Top with spiced mint-coriander water and tamarind chutney to make Pani Puri.",
    },
    {
      id: 2,
      title: "Masala Chai",
      text: "1. Boil water with spices (ginger, cardamom, cloves), \n2. Add tea leaves, \n3. Simmer with milk and sugar, strain and serve",
    },
    {
      id: 3,
      title: "Pav Bhaji",
      text: "1. Saute mixed vegetables, \n2. Add Pav Bhaji masala, mash, \n3. Serve with buttered pav (bread rolls).",
    },
  ]);

  // Function to navigate to Home screen
  function homeScreenHandler() {
    setCurrentScreen("home");
  }

  // Function to navigate to Recipe screen
  function recipeScreenHandler() {
    setCurrentScreen("recipes");
  }

  // Function to navigate to Add Recipe screen
  function addRecipeScreenHandler() {
    setCurrentScreen("add");
  }

  // Function to add a new recipe
  function addRecipeHandler(enteredRecipeTitle, enteredRecipeText) {
    setCurrentRecipes((currentRecipes) => {
      return [
        ...currentRecipes,
        { id: currentID, title: enteredRecipeTitle, text: enteredRecipeText },
      ];
    });
    setCurrentID(currentID + 1);
    recipeScreenHandler();
  }

  // Function to delete a recipe
  function deleteRecipeHandler(id) {
    setCurrentRecipes((currentRecipes) => {
      return currentRecipes.filter((item) => item.id !== id);
    });
  }

  // Determine which screen to display based on the current state
  let screen = <HomeScreen onNext={recipeScreenHandler} />;
  if (currentScreen === "add") {
    screen = <AddRecipeScreen onAdd={addRecipeHandler} onCancel={recipeScreenHandler} />;
  }

  if (currentScreen === "recipes") {
    screen = (
      <RecipeScreen
        onHome={homeScreenHandler}
        onAdd={addRecipeScreenHandler}
        onDelete={deleteRecipeHandler}
        currentRecipes={currentRecipes}
      />
    );
  }

  // Return the main app structure
  return (
    <>
      {/* Set the status bar color to light */}
      <StatusBar style="light" />
      {/* Use SafeAreaProvider for the main container */}
      <SafeAreaProvider style={styles.container}>
        {/* Display the determined screen */}
        {screen}
      </SafeAreaProvider>
    </>
  );
}

// Styles for the main container
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accent800,
    alignItems: "center",
    justifyContent: "center",
  },
});
