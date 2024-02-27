import {Text, ImageBackground, ScrollView, StyleSheet, View, Switch} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import NavButton from "../components/NavButton";
import Colors from "../constants/Colors";
import RadioButtonsGroup from "react-native-radio-buttons-group";
import BouncyCheckbox from "react-native-bouncy-checkbox";

function HomeScreen(props) {
  // insets are used for padding to avoid overlapping with system UI
  const insets = useSafeAreaInsets();

  return (
    <ImageBackground
      // The image used as a background for the screen
      source={require("../assets/images/bicyclebg.jpg")}
      resize="cover"
      style={styles.rootContainer}
      imageStyle={styles.backgroundImage}
    >
      <View
        style={[styles.rootContainer, {
            // Padding is added to avoid overlap with system UI
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
          },
        ]}
      >
        <View style={styles.titleContainer}>
          <Title>Bicycle Repair Shop</Title>
        </View>
        <ScrollView style={styles.scrollViewContainer}>
          <View style={styles.radioContainer}>
            <Text style={styles.radioHeader}>Service Times</Text>
            <RadioButtonsGroup
              // Radio buttons for selecting repair time
              radioButtons={props.repairTimeRadioButtons}
              onPress={props.onSetRepairTimeId}
              selectedId={props.repairTimeId}
              layout="row"
              containerStyle={styles.radioGroup}
              labelStyle={styles.radioGroupLabels}
            />
          </View>
          <View style={styles.rowContainer}>
            <View style={styles.checkBoxContainer}>
              <Text style={styles.checkBoxHeader}>Service Types</Text>
              <View style={styles.checkBoxSubContainer}>
                {props.services.map((item) => {
                  return (
                    <BouncyCheckbox
                      // Unique key for each checkbox
                      key={item.id}
                      // Name of the service
                      text={item.name}
                      onPress={props.onSetServices.bind(this, item.id)}
                      textStyle={{
                        textAlign: "center",
                        textDecorationLine: "none",
                        color: Colors.accent000,
                      }}
                      innerIconStyle={{
                        color: Colors.primary800,
                        borderRadius: 0,
                        borderColor: Colors.primary500,
                      }}
                      iconStyle={{
                        borderRadius: 0,
                      }}
                      fillColor={Colors.accent800}
                      style={{
                        padding: 4,
                      }}
                    />
                  );
                })}
              </View>
            </View>
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.addOnsHeader}>Subscription</Text>
            <View style={styles.addOnsContainer}>
                
              <View style={styles.addOnsSubContainer}>
                <Text style={styles.addOnsLabel}>Newspaper Sign Up ($0)</Text>
                <Switch
                  // Function to handle newsletter sign up
                  onValueChange={props.onSetNewsLetter}
                  // Current state of newsletter sign up
                  value={props.newsletter}
                  thumbColor={
                    props.newsletter ? Colors.accent800 : Colors.primary800
                  }
                  trackColor={{
                    false: Colors.primary500,
                    true: Colors.accent000,
                  }}
                />
              </View>
            </View>
            <View style={styles.addOnsContainer}>
              <View style={styles.addOnsSubContainer}>
                <Text style={styles.addOnsLabel}>Membership Sign Up ($100.00)</Text>
                <Switch
                  // Function to handle membership sign up
                  onValueChange={props.onSetRentalMembership}
                  // Current state of membership sign up
                  value={props.rentalMembership}
                  thumbColor={
                    props.rentalMembership ? Colors.accent800 : Colors.primary800
                  }
                  trackColor={{
                    false: Colors.primary500,
                    true: Colors.accent000,
                  }}
                />
              </View>
            </View>
          </View>
          <View style={styles.navButtonContainer}>
            <NavButton onPress = {props.onNext}>Submit</NavButton>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

export default HomeScreen;

  //styles for HomeSceen
  const styles = StyleSheet.create({
    rootContainer: {
      flex: 1,
      alignItems: "center",
    },
    backgroundImage: {
      opacity: 1,
    },
    titleContainer: {
      width: "90%",
      backgroundColor: Colors.primary800,
      borderColor: Colors.primary500,
      marginVertical: 10,
      paddingHorizontal: 30,
      borderWidth: 2,
      borderRadius: 8,
      justifyContent: "center",
      alignItems: "center",
    },
    scrollViewContainer: {
      flex: 1,
      width: "90%",
    },
    radioContainer: {
      backgroundColor: Colors.primary800,
      borderColor: Colors.primary500,
      justifyContent: "center",
      alignItems: "center",
      marginVertical: 15,
      paddingHorizontal: 10,
      borderWidth: 2,
      borderRadius: 10,
    },
    radioHeader: {
      fontSize: 25,
      paddingTop: 10,
      paddingBottom: 10,
      color: Colors.accent000,
    },
    radioGroup: {
      paddingBottom: 5,
    },
    radioGroupLabels: {
      fontSize: 15,
      color: Colors.accent000,
    },
    rowContainer: {
      backgroundColor: Colors.primary800,
      borderColor: Colors.primary500,
      marginVertical: 15,
      borderWidth: 2,
      borderRadius: 10,
      padding: 5,
    },
    checkBoxContainer: {
      alignItems: "center",
    },
    checkBoxHeader: {
      textAlign: "center",
      fontSize: 25,
      paddingTop: 10,
      paddingBottom: 10,
      color: Colors.accent000,
    },
    checkBoxSubContainer: {
      padding: 4,
    },
    addOnsHeader:{
      textAlign: "center",
      fontSize: 25,
      paddingTop: 10,
      paddingBottom: 10,
      color: Colors.accent000,
    },
    addOnsSubContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    addOnsLabel: {
      paddingHorizontal:5,
      color: Colors.accent000,
      fontSize: 15,
    },
    navButtonContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginVertical:10,
    },
  });