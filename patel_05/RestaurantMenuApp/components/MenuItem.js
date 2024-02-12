import {View,Text, Image, StyleSheet} from "react-native"
import Colors from "../constants/colors";

function MenuItem(props){

    return(
        <View style={styles.itemContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{props.name}</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={props.image}/>
            </View>
            <View style={styles.priceContainer}>
                <Text style={styles.price}>{props.price}</Text>
            </View>
        </View>
    );

}
export default MenuItem;

const styles = StyleSheet.create({
    itemContainer: {
      marginBottom: 20,
      backgroundColor: Colors.background500,
      borderRadius: 15,
      overflow: 'hidden',
      elevation: 5,
    },
    titleContainer: {
      backgroundColor: Colors.primary500,
      paddingVertical: 12,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
    },
    title: {
      fontSize: 30,
      textAlign: 'center',
      color: Colors.background500,
      fontFamily: 'sans-serif-medium',
    },
    imageContainer: {
      alignItems: 'center',
    },
    image: {
      width: "100%",
      height: 200,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      resizeMode: 'cover',
    },
    priceContainer: {
      backgroundColor: Colors.primary500,
      paddingVertical: 12,
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
    },
    price: {
      fontSize: 25,
      textAlign: 'center',
      color: Colors.background500,
      fontFamily: 'sans-serif-medium',
    },
  });