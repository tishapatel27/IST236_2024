// NavButton.js

// Import necessary components and modules from React Native
import { Pressable, View, Text, StyleSheet } from "react-native";

// Import the Colors module to use color values
import Colors from "../constants/Colors";

// Functional component for rendering a navigation button
function NavButton(props) {
  return (
    // Use Pressable for handling press events and applying styles
    <Pressable
      onPress={props.onPress}
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      {/* Container for the button */}
      <View style={styles.buttonContainer}>
        {/* Container for the text inside the button */}
        <View style={styles.textContainer}>
          {/* Render the text inside the button */}
          <Text style={styles.text}>{props.children}</Text>
        </View>
      </View>
    </Pressable>
  );
}

// Export the NavButton component as the default export of this module
export default NavButton;

// Define the styles for the NavButton component using StyleSheet
const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: Colors.primary500,
    borderRadius: 300,
    backgroundColor: Colors.primary800,
    width: "100%",
    paddingHorizontal: 10,
  },
  pressedItem: {
    opacity: 0.3,
    overflow: "hidden",
  },
  textContainer: {},
  text: {
    padding: 8,
    fontSize: 25,
    textAlign: "center",
    fontFamily: "italiana",
    color: Colors.accent000,
  },
});
