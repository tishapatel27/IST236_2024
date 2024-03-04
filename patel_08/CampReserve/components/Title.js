// Importing necessary components and styles from React Native
import { Text, StyleSheet, useWindowDimensions } from "react-native";

// Importing color constants
import Colors from "../constants/Colors";

// Functional component for displaying a title with dynamic font size
function Title(props) {
  // Getting the window dimensions
  const { width, height } = useWindowDimensions();

  // JSX for rendering the title with a dynamic font size
  return <Text style={[styles.title, { fontSize: width * 0.13 }]}>{props.children}</Text>;
}

// Exporting the Title component
export default Title;

// Styles for the Title component
const styles = StyleSheet.create({
  title: {
    fontFamily: "campsite",   // Using the "campsite" font family
    color: Colors.primary500, // Setting the title color from the Colors constant
    textAlign: "center",      // Center-aligning the text
  },
});
