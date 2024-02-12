import { View, StyleSheet, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import NavButton from "../components/NavButton";
import Title from "../components/Title";
import { useState } from "react";
import MenuItem from "../components/MenuItem";

function MenuScreen(props) {
  const insets = useSafeAreaInsets();
  const [menuItems, setMenuItems] = useState([
    {
      id: 1,
      name: "Pina Loca",
      image: require("../assets/images/menu1.jpg"),
      price: "$16.00",
    },
    {
      id: 2,
      name: "Mojarra Dorada",
      image: require("../assets/images/menu2.jpg"),
      price: "$15.99",
    },
    {
      id: 3,
      name: "Carnitas",
      image: require("../assets/images/menu3.jpg"),
      price: "$12.75",
    },
    {
      id: 4,
      name: "Tengo Hambre",
      image: require("../assets/images/menu5.jpg"),
      price: "$18.99",
    },
    {
      id: 5,
      name: "Pollo Santafe",
      image: require("../assets/images/menu4.jpg"),
      price: "$9.00",
    },
  ]);

  return (
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
      <View style={styles.titleContainer}>
        <Title>Menu</Title>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.id}
          alwaysBounceVertical={false}
          showsVerticalScrollIndicator={false}
          renderItem={(itemData) => {
            return (
              <MenuItem
                name={itemData.item.name}
                image={itemData.item.image}
                price={itemData.item.price}
              />
            );
          }}
        ></FlatList>
      </View>
      <View style={styles.buttonContainer}>
        <NavButton onPress={props.onNext}>Return Home</NavButton>
      </View>
    </View>
  );
}

export default MenuScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: 400,
    alignItems: "center",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
  },
  listContainer: {
    flex: 5,
    width: "95%",
  },
  buttonContainer: {
    flex: 1,
    marginTop: 20,
  },
});