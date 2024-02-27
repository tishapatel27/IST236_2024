// Importing necessary modules and components
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { useCallback, useMemo, useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen";
import Colors from "./constants/Colors";
import HomeScreen from "./screens/HomeScreen";
import OrderReviewScreen from "./screens/OrderReviewScreen";

export default function App() {
  // Loading custom fonts
  const [fontsLoaded, fontError] = useFonts({
    italiana: require("./assets/fonts/Italiana-Regular.ttf"),
    italianno: require("./assets/fonts/Italianno-Regular.ttf"),
  });

  // Function to hide the splash screen once fonts are loaded
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  // State variables for current screen and price
  const [currentScreen, setCurrentScreen] = useState("");
  const [currentPrice, setCurrentPrice] = useState(0);

  // Radio buttons for repair time options
  const repairTimeRadioButtons = useMemo(
    () => [
      {
        id: "0",
        label: "Standard",
        value: "Standard",
        price: 0,
        borderColor: Colors.primary500,
        color: Colors.accent800,
      },
      {
        id: "1",
        label: "Expedited",
        value: "Expedited",
        price: 50,
        borderColor: Colors.primary500,
        color: Colors.accent800,
      },
      {
        id: "2",
        label: "Next Day",
        value: "Next Day",
        price: 100,
        borderColor: Colors.primary500,
        color: Colors.accent800,
      },
    ],
    []
  );

  // State variables for repair time, services, newsletter, and rental membership
  const [repairTimeId, setRepairTimeId] = useState(0);
  const [services, setServices] = useState([
    { id: 0, name: "Basic Tune-Up", value: false, price: 50 },
    { id: 1, name: "Comprehensive Tune-Up", value: false, price: 75 },
    { id: 2, name: "Flat Tire Repair", value: false, price: 20 },
    { id: 3, name: "Brake Servicing", value: false, price: 50 },
    { id: 4, name: "Gear Servicing", value: false, price: 40 },
    { id: 5, name: "Chain Servicing", value: false, price: 15 },
    { id: 6, name: "Frame Repair", value: false, price: 35 },
    { id: 7, name: "Safety Check", value: false, price: 25 },
    { id: 8, name: "Accessory Install", value: false, price: 10 },
  ]);

  const [newsletter, setNewsletter] = useState(false);
  const [rentalMembership, setRentalMembership] = useState(false);

  // Handler functions for setting services, newsletter, rental membership, etc.
  function setServicesHandler(id) {
    setServices((prevServices) =>
      prevServices.map((item) =>
        item.id === id ? { ...item, value: !item.value } : item
      )
    );
  }

  function unSetServicesHandler() {
    let changeValue = false;
    for (let i = 0; i < services.length; i++) {
      if (services[i].value) {
        services[i].value = changeValue;
      }
    }
  }

  function setNewsletterHandler() {
    setNewsletter((previous) => !previous);
  }

  function setRentalMembershipHandler() {
    setRentalMembership((previous) => !previous);
  }

  // Function to calculate total price and navigate to review screen
  function orderReviewHandler() {
    let price = 0;
    for (let i = 0; i < services.length; i++) {
      if (services[i].value) {
        price = price + services[i].price;
      }
    }

    if (rentalMembership) {
      price = price + 100;
    }
    price = price + repairTimeRadioButtons[repairTimeId].price;
    setCurrentPrice(price);
    setCurrentScreen("review");
  }
  
  // Function to reset all selections and navigate to home screen
  function homeScreenHandler() {
    setCurrentPrice(0);
    setRepairTimeId(0)
    unSetServicesHandler();
    setNewsletter(false);
    setRentalMembership(false);
    setCurrentScreen("home");
  }

  // Determining which screen to display
  let screen = (
    <HomeScreen
      repairTimeId={repairTimeId}
      repairTimeRadioButtons={repairTimeRadioButtons}
      services={services}
      newsletter={newsletter}
      rentalMembership={rentalMembership}
      onSetRepairTimeId={setRepairTimeId}
      onSetServices={setServicesHandler}
      onSetNewsLetter={setNewsletterHandler}
      onSetRentalMembership={setRentalMembershipHandler}
      onNext={orderReviewHandler}
    />
  );
  if (currentScreen === "review") {
    screen = (
      <OrderReviewScreen
        time={repairTimeRadioButtons[repairTimeId].value}
        services={services}
        newsletter={newsletter}
        rentalMembership={rentalMembership}
        price={currentPrice}
        onNext={homeScreenHandler}
      />
    );
  }

   // Rendering the app
  if (!fontsLoaded && !fontError) {
    return null;
  } else {
    return (
      <>
        <StatusBar style="dark" />
        <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
      </>
    );
  }
}

// Styles for the app
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accent500,
  },
});