import { Modal, View, Button, Image, StyleSheet, Text } from "react-native"; // Import necessary components from React Native
import Colors from "../constants/Colors"; // Import Colors constant
import NavButton from "../components/NavButton"; // Import NavButton component
import { DESTINATIONS } from "../data/dummy-data"; // Import DESTINATIONS data
import Destination from "../models/destinations"; // Import Destination model
import Country from "../models/countries"; // Import Country model

// ImageViewModal component
function ImageViewModal(props) {
  return (
    <View style={styles.container}>
      {/* Modal component to display the image and description */}
      <Modal
        visible={props.isVisible} // Pass modal visibility prop
        animationType="slide" // Set animation type
        transparent={false} // Set transparency
      >
        <View style={styles.modalContainer}>
          {/* Image component to display the image */}
          <Image style={styles.image} source={{ uri: props.imageUrl }} />
          {/* Text component to display the description */}
          <Text style={styles.description}>{props.desc}</Text>
          {/* NavButton component for closing the modal */}
          <NavButton onPress={props.onClose} />
        </View>
      </Modal>
    </View>
  );
}

export default ImageViewModal; // Export ImageViewModal component

// Styles for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary800, // Background color of the modal container
  },
  image: {
    width: "95%",
    height: "32%",
    resizeMode: "contain",
    marginTop: 250, // Set margin top for the image
  },
  description: {
    color: "white", // Text color
    fontSize: 15, // Font size
    fontFamily: 'vacay', // Custom font family
    paddingHorizontal: 30, // Horizontal padding
  }
});
