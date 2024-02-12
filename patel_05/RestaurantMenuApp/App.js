import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "./screens/HomeScreen";
import MenuScreen from "./screens/MenuScreen";
import Colors from "./constants/colors";


export default function App() {
  const [currentScreen, setCurrentScreen] = useState("home");

  function menuScreenHandler() {
    setCurrentScreen("menu");
  }

  function homeScreenHandler() {
    setCurrentScreen("home");
  }

  let screen = <HomeScreen onNext={menuScreenHandler} />;

  if (currentScreen === "menu") {
    screen = <MenuScreen onNext={homeScreenHandler} />;
  }

  return (
    <>
      <StatusBar style="light" />
      <SafeAreaProvider style={styles.container}>
        {screen}
      </SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background500,
    alignItems: "center",
    justifyContent: "center",
  },
});