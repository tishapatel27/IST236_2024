// Importing necessary components and styles from React Native
import { Pressable, StyleSheet, View, Text, useWindowDimensions } from "react-native";

// Importing color constants
import Colors from "../constants/Colors";

// Functional component for a navigational button
function NavButton(props) {
  // Getting the window dimensions
  const { width, height } = useWindowDimensions();

  // JSX for rendering the navigational button
  return (
    <Pressable
      onPress={props.onPress}
      // By providing styling and checking for pressed, temporary styles can be set
      // that will only be active while pressed. This will take effect on iOS and Android
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <View style={styles.buttonContainer}>
        <View style={styles.textContainer}>
          <Text style={[styles.text, { fontSize: width * 0.07 }]}>
            {props.children}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

// Exporting the NavButton component
export default NavButton;

// Styles for the NavButton component
const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary500, // Setting the button background color from the Colors constant
    borderRadius: 300,
    width: 1000,
    maxWidth: "70%",
    marginHorizontal: 10,
    marginVertical: 10,
  },
  pressedItem: {
    opacity: 0.5, // Reducing opacity when the button is pressed
  },
  text: {
    padding: 8,
    fontFamily: "campsite", // Using the "campsite" font family
    textAlign: "center",
    color: Colors.primary300, // Setting the text color from the Colors constant
  },
});

  