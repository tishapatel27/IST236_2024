import { Image, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import NavButton from "../components/NavButton";

// Function to display the Home Screen
function HomeScreen(props) {
  // Get safe area insets for adjusting to device edges
  const insets = useSafeAreaInsets();

  // Render the Home Screen
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
        <Title>Tisha's Recipes</Title>
      </View>

      {/* Container for the image */}
      <View style={styles.imageContainer}>
        {/* Display the image using Image component */}
        <Image
          source={require("../assets/images/img.jpg")}
          style={styles.image}
        />
      </View>

      {/* Container for navigation button */}
      <View style={styles.navButtonContainer}>
        {/* Button to navigate to the recipe suggestion screen */}
        <NavButton onNext={props.onNext}>Suggest Recipes</NavButton>
      </View>
    </View>
  );
}

export default HomeScreen;

// Styles for the HomeScreen component
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: "95%",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  imageContainer: {
    flex: 2,
    justifyContent: "center",
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "yellow",
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: 5,
    resizeMode: "cover",
  },
  navButtonContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
});
