// Import necessary components and modules
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Colors from "./constants/colors"; // Import custom color constants
import BookmarksScreen from "./screens/BookmarksScreen";
import FocusedNewsScreen from "./screens/FocusedNewsScreen";
import NewsDetailScreen from "./screens/NewsDetailScreen";
import USNewsScreen from "./screens/USNewsScreen";
import WorldNewsScreen from "./screens/WorldNewsScreen";
import { Entypo, MaterialIcons, MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons"; // Import icons
import { useCallback } from "react";

// Create stack, drawer, and bottom tab navigators
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tabs = createBottomTabNavigator();

// Drawer Navigator component
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="NewsItems"
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: "black",
        headerTitleStyle: {
          fontFamily: "newsItalic",
          fontSize: 25,
          color: Colors.accent800,
        },
        sceneContainerStyle: {
          backgroundColor: Colors.primary300,
        },
        drawerContentStyle: { backgroundColor: Colors.primary500 },
        drawerInactiveTintColor: Colors.primary300,
        drawerActiveTintColor: Colors.accent500,
        drawerActiveBackgroundColor: Colors.primary800,
        drawerLabelStyle: { color: 'black' }, // Set drawer label color to black
      }}
    >
      {/* Drawer screens */}
      <Drawer.Screen
        name="NewsItems"
        component={TabsNavigator}
        options={{
          title: "ABC News",
          drawerLabel: "ABC News",
          drawerIcon: ({ color, size }) => (
            <Entypo name="list" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="BookmarkedNews"
        component={BookmarksScreen}
        options={{
          title: "Saved News",
          drawerLabel: "Saved News",
          drawerIcon: ({ color, size }) => (
            <Entypo name="bookmark" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

// Bottom tab navigator component
function TabsNavigator() {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarShowLabel: true,
        tabBarActiveBackgroundColor: Colors.primary800,
        tabBarActiveTintColor: Colors.accent500,
        tabBarInactiveBackgroundColor: Colors.primary500,
        tabBarInactiveTintColor: Colors.primary300,
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: "newsBold",
        },
        tabBarStyle: {
          backgroundColor: Colors.primary500,
        },
      }}
    >
      {/* Bottom tab screens */}
      <Tabs.Screen
        name="USNews"
        component={USNewsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="newspaper" size={size} color={color} />
          ),
          tabBarLabel: "US News",
        }}
      />
      <Tabs.Screen
        name="WorldNews"
        component={WorldNewsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="globe" size={size} color={color} />
          ),
          tabBarLabel: "World News",
        }}
      />
      <Tabs.Screen
        name="FocusedNews"
        component={FocusedNewsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="tshirt-crew-outline" size={size} color={color} />
          ),
          tabBarLabel: "Fashion News",
        }}
      />
    </Tabs.Navigator>
  );
}

// Main App component
export default function App() {
  // Load custom fonts
  const [fonstLoaded, fontError] = useFonts({
    news: require("./assets/fonts/NoticiaText-Regular.ttf"),
    newsBold: require("./assets/fonts/NoticiaText-Bold.ttf"),
    newsItalic: require("./assets/fonts/NoticiaText-Italic.ttf"),
  });

  // Hide splash screen when fonts are loaded
  const onLayoutRootView = useCallback(async () => {
    if (fonstLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  });

  // Check font loading status
  if (!fonstLoaded && !fontError) {
    return null;
  } else {
    return (
      <>
        <StatusBar style="light" />
        {/* Navigation container */}
        <NavigationContainer>
          {/* Stack navigator */}
          <Stack.Navigator
            initialRouteName="DrawerScreen"
            screenOptions={{
              headerTintColor: Colors.primary300,
              headerStyle: { backgroundColor: Colors.primary500 },
              contentStyle: { backgroundColor: "black" },
            }}
          >
            <Stack.Screen
              name="DrawerScreen"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="NewsDetail"
              component={NewsDetailScreen}
              options={{
                headerBackTitleVisible: false,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});