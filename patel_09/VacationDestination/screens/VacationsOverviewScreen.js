import React from "react"; // Import React to use JSX
import { FlatList, Text, View, StyleSheet } from "react-native"; // Import necessary components from React Native
import { useEffect, useLayoutEffect } from "react"; // Import useEffect and useLayoutEffect hooks
import { COUNTRIES } from "../data/dummy-data"; // Import COUNTRIES data
import { DESTINATIONS } from "../data/dummy-data"; // Import DESTINATIONS data
import VacationItem from "../components/VacationItem"; // Import VacationItem component

function VacationsOverviewScreen(props) {
    const countryId = props.route.params.countryId; // Get countryId from route params

    // Use useLayoutEffect to update navigation options when countryId changes
    useLayoutEffect(() => {
        // Find country with given countryId
        const country = COUNTRIES.find((country) => country.id === countryId);
        // Set navigation options with country name
        props.navigation.setOptions({ title: country ? country.name : null});
    }, [countryId, props.navigation]);

    // Filter displayed vacations by countryId
    const displayedVacations = DESTINATIONS.filter((vacationItem) => {
        return vacationItem.countryId === countryId;
    });

    // Function to render each vacation item
    function renderVacationItem(itemData) {
        // Props for VacationItem component
        const vacationItemProps = {
            name: itemData.item.name,
            vCost: itemData.item.vCost,
            foundedYear: itemData.item.foundedYear,
            rating: itemData.item.rating,
            imageUrl: itemData.item.imageUrl,
            description: itemData.item.desc,
            listIndex: itemData.index,
        }
        // Render VacationItem component with props
        return <VacationItem {...vacationItemProps}/>
    }

    return(
        // View container for FlatList
        <View>
            {/* FlatList to display vacation items */}
            <FlatList
                data={displayedVacations}
                keyExtractor={(item) => item.id}
                renderItem={renderVacationItem} // Render each vacation item
            />
        </View>
    )
};

export default VacationsOverviewScreen; // Export VacationsOverviewScreen component

// Styles for the component
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})
