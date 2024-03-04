// Importing necessary components and libraries from React Native
import {
    Text,
    ImageBackground,
    ScrollView,
    StyleSheet,
    View,
    Pressable,
    Platform,
    Modal,
    Button,
    useWindowDimensions,
  } from "react-native";
  
  // Importing a hook from a third-party library for handling safe area insets
  import { useSafeAreaInsets } from "react-native-safe-area-context";
  
  // Importing a date and time picker component
  import DateTimePicker from "@react-native-community/datetimepicker";
  
  // Importing custom components
  import Title from "../components/Title";
  import NavButton from "../components/NavButton";
  
  // Importing color constants and dimensions
  import Colors from "../constants/Colors";
  import { Dimensions } from 'react-native';
  
  // Importing state management hook from React
  import { useState } from "react";
  
  // Importing a custom WheelPicker component
  import WheelPicker from "react-native-wheely";
  
  // Main function component for the Home screen
  function HomeScreen() {
    // Hook for safe area insets
    const insets = useSafeAreaInsets();
  
    // State variables for handling check-in and check-out dates
    const [checkIn, setCheckIn] = useState(new Date());
    const [checkOut, setCheckOut] = useState(new Date());
    
    // State variables and functions for showing/hiding date pickers
    const [showCheckIn, setShowCheckIn] = useState(false);
    const [showCheckOut, setShowCheckOut] = useState(false);
  
    // Function to show the check-in date picker
    function showCheckInPicker() {
      setShowCheckIn(true);
    }
  
    // Function to hide the check-in date picker
    function hideCheckInPicker() {
      setShowCheckIn(false);
    }
  
    // Function to handle changes in the check-in date
    function onChangeCheckIn(event, selectedDate) {
      const currentDate = selectedDate;
      if (Platform.OS === "android") {
        hideCheckInPicker(true);
      }
      setCheckIn(currentDate);
    }
  
    // Functions for handling check-out date
    function showCheckOutPicker() {
      setShowCheckOut(true);
    }
    function hideCheckOutPicker() {
      setShowCheckOut(false);
    }
    function onChangeCheckOut(event, selectedDate) {
      const currentDate = selectedDate;
      if (Platform.OS === "android") {
        hideCheckOutPicker(true);
      }
      setCheckOut(currentDate);
    }
  
    // Arrays defining possible guest and campsite counts
    const guestCounts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const campsiteCounts = [1, 2, 3, 4, 5];
  
    // State variables and functions for handling guest and campsite counts
    const [numGuests, setNumGuests] = useState(0);
    const [showNumGuests, setShowNumGuests] = useState(false);
    const [numCampSites, setCampSites] = useState(0);
    const [showNumCampSites, setShowNumCampSites] = useState(false);
  
    // Function to show the guest count picker
    function showNumGuestsPicker() {
      setShowNumGuests(true);
    }
  
    // Function to hide the guest count picker
    function hideNumGuestsPicker() {
      setShowNumGuests(false);
    }
  
    // Function to handle changes in the guest count
    function onChangeNumGuests(index) {
      setNumGuests(index);
    }
  
    // Function to show the campsite count picker
    function showNumCampsitesPicker() {
      setShowNumCampSites(true);
    }
  
    // Function to hide the campsite count picker
    function hideNumCampsitesPicker() {
      setShowNumCampSites(false);
    }
  
    // Function to handle changes in the campsite count
    function onChangeNumCampsites(index) {
      setCampSites(index);
    }
  
    // State variable for displaying reservation results
    const [results, setResults] = useState("");
  
    // Function to handle the reservation button press
    function onReserveHandler() {
      let res = `Check In:\t\t${checkIn.toDateString()}\n`;
      res = res + `Check Out:\t\t${checkOut.toDateString()}\n`;
      res = res + `Number of Guests:\t\t${guestCounts[numGuests]}\n`;
      res = res + `Number of Campsites:\t\t${campsiteCounts[numCampSites]}\n`;
      setResults(res);
    }
  
    // Dimensions hook to get the window width and height
    const { width, height } = useWindowDimensions();
  
    // Styles for dynamically adjusting font sizes based on window width
    const dateLabelFlex = {
      fontSize: width * 0.07,
    };
    const dateTextFlex = {
      fontSize: width * 0.05,
    };
  
    // JSX for the Home screen
    return (
      <ImageBackground
        source={require("../assets/images/camping.jpg")}
        resize="center"
        style={styles.rootContainer}
        imageStyle={styles.backgroundImage}
      >
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
          <ScrollView style={styles.scrollViewContainer}>
            <View style={styles.titleContainer}>
              <Title>Rishikesh Valley Camp</Title>
            </View>
            <View style={styles.tableContainer}>
              {/* Date Pickers */}
              <View style={styles.dateContainer}>
                <Text style={[styles.dateLabel, dateLabelFlex]}>Check In:</Text>
                <Pressable onPress={showCheckInPicker}>
                  <Text style={[styles.dateText, dateTextFlex]}>
                    {checkIn.toDateString()}
                  </Text>
                </Pressable>
              </View>
              <View style={styles.dateContainer}>
                <Text style={[styles.dateLabel, dateLabelFlex]}>Check Out:</Text>
                <Pressable onPress={showCheckOutPicker}>
                  <Text style={[styles.dateText, dateTextFlex]}>
                    {checkOut.toDateString()}
                  </Text>
                </Pressable>
              </View>
              <View>
                {/* Check-in date picker */}
                {showCheckIn && Platform.OS === "android" && (
                  <DateTimePicker
                    testID="dateTimePickerCheckInAndroid"
                    value={checkIn}
                    mode={"date"}
                    display="spinner"
                    onChange={onChangeCheckIn}
                  />
                )}
                {showCheckIn && Platform.OS === "ios" && (
                  // Check-in date picker modal for iOS
                  <Modal
                    animationType="slide"
                    transparent={true}
                    supportedOrientations={["portrait", "landscape"]}
                  >
                    <View style={styles.centeredModalView}>
                      <View style={styles.modalView}>
                        <DateTimePicker
                          testID="dateTimePickerCheckInIOS"
                          value={checkIn}
                          mode={"date"}
                          display="spinner"
                          onChange={onChangeCheckIn}
                        />
                        <Button title="Confirm" onPress={hideCheckInPicker} />
                      </View>
                    </View>
                  </Modal>
                )}
  
                {/* Check-out date picker */}
                {showCheckOut && Platform.OS === "android" && (
                  <DateTimePicker
                    testID="dateTimePickerCheckOutAndroid"
                    value={checkOut}
                    mode={"date"}
                    display="spinner"
                    onChange={onChangeCheckOut}
                  />
                )}
                {showCheckOut && Platform.OS === "ios" && (
                  // Check-out date picker modal for iOS
                  <Modal
                    animationType="slide"
                    transparent={true}
                    supportedOrientations={["portrait", "landscape"]}
                  >
                    <View style={styles.centeredModalView}>
                      <View style={styles.modalView}>
                        <DateTimePicker
                          testID="dateTimePickerCheckOutIOS"
                          value={checkOut}
                          mode={"date"}
                          display="spinner"
                          onChange={onChangeCheckOut}
                        />
                        <Button title="Confirm" onPress={hideCheckOutPicker} />
                      </View>
                    </View>
                  </Modal>
                )}
              </View>
  
              {/* Guest Count Picker */}
              <View style={styles.rowContainer}>
                <Text style={[styles.dateLabel, dateLabelFlex]}>
                  Number of Guests:
                </Text>
                <Pressable onPress={showNumGuestsPicker}>
                  <View style={styles.dateContainer}>
                    <Text style={[styles.dateText, dateTextFlex]}>
                      {guestCounts[numGuests]}
                    </Text>
                  </View>
                </Pressable>
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={showNumGuests}
                  supportedOrientations={["portrait", "landscape"]}
                >
                  <View style={styles.centeredModalView}>
                    <View style={styles.modalView}>
                      <Text>Enter Number of Guests:</Text>
                      <WheelPicker
                        selectedIndex={numGuests}
                        options={guestCounts}
                        onChange={onChangeNumGuests}
                        containerStyle={{ width: 200 }}
                      />
                      <Button title="Confirm" onPress={hideNumGuestsPicker} />
                    </View>
                  </View>
                </Modal>
              </View>
  
              {/* Campsite Count Picker */}
              <View style={styles.rowContainer}>
                <Text style={[styles.dateLabel, dateLabelFlex]}>
                  Number of Campsites:
                </Text>
                <Pressable onPress={showNumCampsitesPicker}>
                  <View style={styles.dateContainer}>
                    <Text style={[styles.dateText, dateTextFlex]}>
                      {campsiteCounts[numCampSites]}
                    </Text>
                  </View>
                </Pressable>
  
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={showNumCampSites}
                  supportedOrientations={["portrait", "landscape"]}
                >
                  <View style={styles.centeredModalView}>
                    <View style={styles.modalView}>
                      <Text style={[styles.dateText, dateTextFlex]}>
                        Enter Number of Campsites:
                      </Text>
                      <WheelPicker
                        selectedIndex={numCampSites}
                        options={campsiteCounts}
                        onChange={onChangeNumCampsites}
                        containerStyle={{ width: 200 }}
                      />
                      <Button title="Confirm" onPress={hideNumCampsitesPicker} />
                    </View>
                  </View>
                </Modal>
              </View>
            </View>
  
            {/* Reservation Button */}
            <View style={[styles.navButtonContainer]}>
              <NavButton onPress={onReserveHandler}>Reserve Now</NavButton>
            </View>
  
            {/* Displaying Reservation Results */}
            <View style={[styles.resultContainer]}>
              <Text style={[styles.results, dateLabelFlex]}>{results}</Text>
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    );
  }
  
  // Exporting the HomeScreen component
  export default HomeScreen;
  
  // Getting the screen width
  const windowWidth = Dimensions.get("screen").width;
  
  // Styles for the HomeScreen component
  const styles = StyleSheet.create({
    rootContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    backgroundImage: {
      opacity: 0.3,
    },
    titleContainer: {
      padding: 7,
      marginVertical: 20,
      marginHorizontal: 20,
      borderWidth: 2,
      borderRadius: 5,
      borderColor: Colors.primary500,
      backgroundColor: Colors.primary300,
    },
    scrollViewContainer: {
      flex: 1,
      width: 3000,
      maxWidth: "95%",
    },
    rowContainer: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      paddingBottom: 20,
      marginBottom: 20,
    },
    dateContainer: {
      backgroundColor: Colors.primary300o5,
      padding: 10,
      flex: 1,
      borderWidth: 1,
      borderRadius: 1,
    },
    dateLabel: {
      fontSize: 100,
      color: Colors.primary500,
      fontFamily: "camp",
      textShadowColor: "black",
      textShadowOffset: { width: 2, height: 2 },
      textShadowRadius: 2,
    },
    dateText: {
      color: Colors.primary800,
      fontSize: 18,
      fontWeight: "bold",
    },
    centeredModalView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: Colors.primary300,
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "black",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    buttonContainer: {
      alignItems: "center",
      justifyContent: "center",
    },
    results: {
      textAlign: "center",
      color: Colors.primary500,
      fontFamily: "camp",
      textShadowColor: "black",
      textShadowOffset: { width: 2, height: 2 },
      textShadowRadius: 2,
    }
  });
  