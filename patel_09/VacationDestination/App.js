import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import VacationsOverviewScreen from './screens/VacationsOverviewScreen';
import Colors from './constants/Colors';
import Title from './components/title';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    vacay: require('./assets/fonts/OriginalSurfer-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  } else {
    return (
      <>
        <StatusBar style="auto" />
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName='HomeScreen'
            screenOptions={{
              headerBackTitleVisible: false,
              headerStyle: {backgroundColor: Colors.primary500},
              headerTintColor: Colors.primary300,
              headerTitleStyle: {fontFamily: "vacay", fontSize: 32},
              contentStyle: {backgroundColor: Colors.primary800},
            }}
          >
            <Stack.Screen
              name = "HomeScreen"
              component = {HomeScreen}
              options = {{
                title: "Vacation Destinations"
              }}
            />
            <Stack.Screen 
              name = "VacationsOverviewScreen"
              component = {VacationsOverviewScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});