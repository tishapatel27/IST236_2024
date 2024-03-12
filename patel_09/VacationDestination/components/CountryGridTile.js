import { LinearGradient } from "expo-linear-gradient"; // Import LinearGradient from Expo
import { Pressable, View, Text, StyleSheet } from "react-native"; // Import necessary components from React Native
import Colors from "../constants/Colors"; // Import Colors constant
import { Platform } from "react-native"; // Import Platform module from React Native

// CountryGridTile component
function CountryGridTile(props) {
    return (
        <View style={styles.gridItem}>
            {/* Pressable container for the grid item */}
            <Pressable
                style={({ pressed }) => [
                    styles.button,
                    pressed ? styles.buttonPressed : null,
                ]}
                android_ripple={{ color: Colors.primary300 }} // Ripple effect color on Android
                onPress={props.onPress} // Call onPress function when pressed
            >
                {/* LinearGradient to create gradient background */}
                <LinearGradient
                    colors={[props.color, props.color]} // Use props.color for gradient colors
                    style={styles.innerContainer}
                >
                    {/* Text to display country name */}
                    <Text
                        style={styles.name}
                    >
                        {props.name} {/* Display country name */}
                    </Text>
                </LinearGradient>
            </Pressable>
        </View>
    );
}

export default CountryGridTile; // Export CountryGridTile component

// Styles for the component
const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4, // Elevation for shadow on Android
        backgroundColor: "white", // Background color of the grid item
        shadowColor: "black", // Shadow color
        shadowOpacity: 0.25, // Shadow opacity
        shadowOffset: { width: 0, height: 2 }, // Shadow offset
        shadowRadius: 8, // Shadow radius
        overflow: Platform.OS === "android" ? "hidden" : "visible", // Handle overflow based on platform
    },

    button: {
        flex: 1,
    },

    innerContainer: {
        flex: 1,
        padding: 16,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
    },

    name: {
        textAlign: "center",
        fontSize: 24.5,
        fontFamily: 'vacay', // Custom font family
        color: '#36022f', // Custom text color
    },
});
