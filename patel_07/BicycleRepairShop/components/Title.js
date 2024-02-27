// Title.js

// Import necessary components and modules from React Native
import { Text, StyleSheet } from "react-native";

// Import the Colors module to use color values
import Colors from "../constants/Colors";

// Functional component for rendering a styled title
function Title(props) {
    // Return a Text component with the specified style
    return <Text style={styles.title}>{props.children}</Text>;
}

// Export the Title component as the default export of this module
export default Title;

// Define the styles for the Title component using StyleSheet
const styles = StyleSheet.create({
    title: {
        fontSize: 35,                   // Set font size to 35
        textAlign: "center",            // Center-align the text
        color: Colors.accent000,        // Use the dark accent color from Colors module
        fontFamily: "italianno",        // Set the font family to "italianno"
    },
});
