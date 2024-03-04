// Importing necessary components and styles from React Native and other libraries
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Colors from "./constants/Colors";
import { useCallback } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

// Importing the HomeScreen component
import HomeScreen from "./screens/HomeScreen";

// Main App component
export default function App() {
  // Loading custom fonts for the application
  const [fontsLoaded, fontError] = useFonts({
    camp: require("./assets/fonts/PTSansNarrow-Regular.ttf"),
    campsite: require("./assets/fonts/Anton-Regular.ttf"),
  });

  // Callback function to hide the splash screen when fonts are loaded
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  });

  // Determining the initial screen based on font loading state
  let screen = <HomeScreen />;

  // Returning null if fonts are still loading to avoid rendering incomplete UI
  if (!fontsLoaded && !fontError) {
    return null;
  } else {
    // Rendering the StatusBar, SafeAreaProvider, and the selected screen
    return (
      <>
        <StatusBar style="dark" />
        <SafeAreaProvider style={styles.container} onLayout={onLayoutRootView}>
          {screen}
        </SafeAreaProvider>
      </>
    );
  }
}

// Styles for the main container
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accent300, // Setting the background color from the Colors constant
  },
});

