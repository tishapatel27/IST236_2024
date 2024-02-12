import { View, StyleSheet, Text, Linking, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import NavButton from "../components/NavButton";
import Colors from "../constants/colors";
import Title from "../components/Title";

function HomeScreen(props) {
  const insets = useSafeAreaInsets();

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
      <View style={styles.titleContainer}>
        <Title>El Patio Mexican Restaurant</Title>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/image1.jpg")}
        />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Restaurant</Text>
        <Text
          style={styles.infoText}
          onPress={() =>
            Linking.openURL("https://g.co/kgs/mZ2WpB7")
          }
        >
          2394 US-501{"\n"}Conway{"\n"}SC 29526
        </Text>
        <Text
          style={styles.infoText}
          onPress={() => Linking.openURL("tel:+18433476984")}
        >
          (843) 347-6984
        </Text>
        <Text
          style={styles.infoText}
          onPress={() => Linking.openURL("https://elpatiomexrest.com/")}
        >
          www.elpatiomexrest.com
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <NavButton onPress={props.onNext}>View Menu</NavButton>
      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.background500,
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
  },
  imageContainer: {
    flex: 4,
    borderWidth: 3,
    borderRadius: 15,
    borderColor: Colors.primary500,
    marginBottom: 25,
    overflow: 'hidden',
  },
    image: {
    resizeMode: "cover",
    height: "100%",
    width: 350,
  },
  infoContainer: {
    flex: 3,
    marginBottom: 25,
    justifyContent: "center",
    padding: 15,
    borderWidth: 3,
    borderRadius: 15,
    borderColor: Colors.primary500,
    backgroundColor: Colors.secondary500,
  },
  infoTitle: {
    fontSize: 45,
    textAlign: "center",
    color: Colors.background500,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-medium',
  },
  infoText: {
    fontSize: 22,
    marginBottom: 10,
    textAlign: "center",
    color: Colors.background500,
    fontFamily: 'sans-serif',
  },
  buttonContainer: {
    flex: 1,
  },
});