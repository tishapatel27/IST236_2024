// Import necessary components and libraries
import { Modal, View, Text, StyleSheet } from "react-native";
import NavButton from "../components/NavButton";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Colors from "../constants/Colors";

// Define the RecipeView component
function RecipeView(props) {
  // Get safe area insets to adjust styling based on device boundaries
  const insets = useSafeAreaInsets();

  // Render a modal with slide animation
  return (
    <Modal visible={props.visible} animationType="slide">
      {/* Create a container for the modal content */}
      <View
        style={[
          styles.rootContainer,
          {
            // Apply safe area insets for padding
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
          },
        ]}
      >
        {/* Container for the recipe title */}
        <View style={styles.titleContainer}>
          {/* Display the recipe title */}
          <Text style={styles.title}>{props.title}</Text>
        </View>
        {/* Container for the recipe text (ingredients) */}
        <View style={styles.textContainer}>
          {/* Display the recipe text (ingredients) */}
          <Text style={styles.text}>{props.text}</Text>
        </View>
        {/* Container for the navigation button */}
        <View style={styles.navButtonContainer}>
          {/* Render a navigation button to close the modal and return to recipes */}
          <NavButton onNext={props.onClose}>Return To Recipes</NavButton>
        </View>
      </View>
    </Modal>
  );
}

// Export the RecipeView component
export default RecipeView

// Styles for the RecipeView component
const styles = StyleSheet.create({
  rootContainer: {
    // Set the root container to take up the entire screen
    flex: 1,
    width: "100%",
    // Set background color using the accent color from the Colors constant
    backgroundColor: Colors.accent500,
    alignItems: 'center', // Center the content horizontally
  },
  titleContainer: {
    // Use flex property to take up a portion of the screen
    flex: 1,
    justifyContent: 'center', // Center the content vertically
  },
  title: {
    // Styling for the recipe title
    fontSize: 40,
    textAlign: 'center', // Center the text within its container
    fontFamily: 'Papernotes', // Apply the Papernotes font from the Constants
    color: Colors.primary800, // Set the text color using the primary color from the Colors constant
  },
  textContainer: {
    // Use flex property to take up a larger portion of the screen
    flex: 5,
    width: "90%", // Set the width to 90% of the parent container
    borderWidth: 3, // Add a border around the container
    backgroundColor: Colors.primary500, // Set background color using the primary color from the Colors constant
    borderColor: Colors.accent800, // Set border color using the accent color from the Colors constant
    padding: 10, // Add padding inside the container
  },
  text: {
    // Styling for the recipe text (ingredients)
    color: 'black', // Set text color to black
    fontSize: 20, // Set font size to 20
    fontFamily: 'Papernotes', // Apply the Papernotes font from the Constants
  },
  navButtonContainer: {
    marginTop: 10, // Add top margin to the container
    flex: 1, // Use flex property to take up a smaller portion of the screen
  },
});
