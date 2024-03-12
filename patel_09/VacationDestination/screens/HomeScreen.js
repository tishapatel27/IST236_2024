import React from "react";
import { View, Text, FlatList, ImageBackground, StyleSheet } from "react-native";
import { COUNTRIES, DESTINATIONS } from "../data/dummy-data";
import CountryGridTile from "../components/CountryGridTile";
import Title from "../components/title";

function HomeScreen(props) {
    // Function to render each country item in the FlatList
    function renderCountryItem(itemData) {
        // Function to handle press event when a country is selected
        function pressHandler() {
            // Navigate to VacationsOverviewScreen with the selected country's ID
            props.navigation.navigate("VacationsOverviewScreen", {
                countryId: itemData.item.id,
            });
        }
        // Render the CountryGridTile component for each country
        return (
            <CountryGridTile
                name={itemData.item.name}
                color={itemData.item.color}
                onPress={pressHandler}
            />   
        );
    }

    return (
        // Render the HomeScreen with background image
        <ImageBackground
            source={require("../assets/images/background.jpg")}
            resize="cover"
            style={styles.rootContainer}
            imageStyle={styles.backgroundImage}
        >
            {/* Container for the FlatList */}
            <View>
                {/* FlatList to display countries */}
                <FlatList
                    data={COUNTRIES}
                    keyExtractor={(item) => item.id}
                    renderItem={renderCountryItem} // Render each country item
                    numColumns={2} // Display 2 columns
                />
            </View>
        </ImageBackground>
    );
}

export default HomeScreen;

// Styles for the components
const styles = StyleSheet.create({
    rootContainer: {
      flex: 1, // Take up the entire screen
    },
    backgroundImage: {
      opacity: 0.4, // Set background image opacity
    },
});
