// Import necessary components and libraries
import { Pressable, View, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

// Define the NavButton component
function NavButton(props) {
    // Render the pressable button
    return (
        <Pressable
            android_ripple={{ color: 'blue' }}
            onPress={props.onNext}>
            {/* Main container for the button */}
            <View style={styles.buttonContainer}>
                {/* Container for the button text */}
                <View style={styles.textContainer}>
                    {/* Display the button text with specified styles */}
                    <Text style={styles.text}>{props.children}</Text>
                </View>
            </View>
        </Pressable>
    );
}

// Export the NavButton component
export default NavButton;

// Styles for the NavButton component
const styles = StyleSheet.create({
    // Main container style for the button
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: Colors.accent500,
        borderRadius: 300,
        backgroundColor: Colors.primary800,
        width: "100%",
        paddingHorizontal: 10,
    },
    // Container style for the button text
    textContainer: {},
    // Style for the button text
    text: {
        padding: 8,
        fontSize: 25,
        textAlign: 'center',
        fontFamily: "Papernotes",
        color: 'white',
    },
});
