// Import necessary components and libraries
import { Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

// Define the Title component
function Title(props) {
  // Render a Text component with specified styles
  return <Text style={styles.title}>{props.children}</Text>;
}

// Export the Title component
export default Title;

// Styles for the Title component
const styles = StyleSheet.create({
  title: {
    // Set the font size to 50
    fontSize: 50,
    // Center the text horizontally
    textAlign: "center",
    // Set text color using the primary color from the Colors constant
    color: Colors.primary500,
    // Apply the Papernotes font from the Colors constant
    fontFamily: "Papernotes",
  },
});
