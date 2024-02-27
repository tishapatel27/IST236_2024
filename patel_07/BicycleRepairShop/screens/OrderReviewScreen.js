// Importing necessary components and libraries from React Native
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import NavButton from "../components/NavButton";
import Colors from "../constants/Colors";
import { LinearGradient } from "expo-linear-gradient";


// Functional component definition for the OrderReviewScreen
function OrderReviewScreen(props) {
  // Retrieve safe area insets using the useSafeAreaInsets hook
  const insets = useSafeAreaInsets();

  return (
    // Apply linear gradient background to the entire screen
    <LinearGradient
      colors={[Colors.accent800, Colors.accent800, Colors.primary800]}
      style={styles.rootContainer}
    >
      {/* Create a container for the main content */}
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
          {/* Render the Title component */}
          <Title>Order Summary</Title>
        </View>

        {/* Container for the subtitle */}
        <View style={styles.subTitleContainer}>
          {/* Render the subtitle text */}
          <Text style={styles.subTitle}>
            Your order has been placed with the details below.
          </Text>
        </View>

        {/* Container for the scrollable content */}
        <ScrollView style={styles.scrollViewContainer}>
          {/* Container for displaying selected services */}
          <View style={styles.servicesContainer}>
            {/* Display selected service time */}
            <View>
            <Text style={styles.serviceHeader}>Service Time:</Text>
            <Text style={styles.serviceType}>{props.time}</Text>
        </View>

            {/* Display selected services */}
            <Text style={styles.serviceHeader}>Service Type:</Text>
            {props.services.map((item) => {
              if (item.value) {
                // Display selected service
                return (
                  <Text
                    key={item.id}
                    price={item.price}
                    style={styles.serviceType}
                  >
                    {item.name}
                  </Text>
                )}; 
            })}

            {/* Display subscription information */}
            <Text style={styles.serviceHeader}>Subscription:</Text>
            <Text style={styles.serviceType}>
              {props.newsletter ? "Signed Up for Newsletter" : ""}
            </Text>
            <Text style={styles.serviceType}>
              {props.rentalMembership ? "Signed Up for Membership" : ""}
            </Text>
          </View>

          {/* Container for displaying pricing details */}
          <View style={styles.subTitleContainer}>
            <Text style={styles.subTitle}>
              Subtotal: ${props.price.toFixed(2)}
            </Text>
            <Text style={styles.subTitle}>
              Sales Tax: ${(props.price * 0.06).toFixed(2)}
            </Text>
            <Text style={styles.subTitle}>
              Total: ${(props.price + props.price * 0.06).toFixed(2)}
            </Text>
          </View>

          {/* Container for the navigation button */}
          <View style={styles.buttonContainer}>
            {/* Render a navigation button with an onPress event */}
            <NavButton onPress={props.onNext}> Home</NavButton>
          </View>
        </ScrollView>
      </View>
    </LinearGradient>
  );
}

// Export the OrderReviewScreen component as the default export
export default OrderReviewScreen;

//styles for OrderReviewScreen
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  titleContainer: {
    alignSelf:'center',
    width: "90%",
    backgroundColor: Colors.primary800,
    borderColor: Colors.primary500,
    marginVertical: 10,
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 35,
  },
  subTitleContainer: {
    backgroundColor: Colors.primary800,
    borderColor: Colors.primary500,
    marginVertical: 10,
    borderWidth: 2,
    borderRadius: 10,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 15,
    alignSelf:'center',
  },
  subTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.accent000,
  },
  scrollViewContainer: {
    alignSelf:'center',
    flex: 1,
    width: "90%",
  },
  servicesContainer: {
    flex: 2,
    backgroundColor: Colors.primary800,
    borderColor: Colors.primary500,
    marginVertical: 10,
    borderWidth: 2,
    borderRadius: 10,
  },
  serviceHeader: {
    padding: 5,
    textAlign: "center",
    fontSize: 20,
    color: Colors.accent000,
  },
  serviceType: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    padding: 5,
    color:"#d6bdd9",
  },
  buttonContainer: {
    alignItems: "center",
    marginVertical: 10,
  },
});