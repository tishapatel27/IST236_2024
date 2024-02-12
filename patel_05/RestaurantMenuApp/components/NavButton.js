import { Pressable, View, Text, StyleSheet } from "react-native"
import Colors from "../constants/colors";
function NavButton(props){

    return(
        <Pressable
        android_ripple={{color:'white',}}
        onPress={props.onPress}>
            <View style={styles.buttonContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{props.children}</Text>
                </View>
            </View>
        </Pressable>
    )
}

export default NavButton;

const styles = StyleSheet.create({
    buttonContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 3,
      borderRadius: 15,
      borderColor: Colors.primary500,
      backgroundColor: Colors.secondary500,
      width: "80%",
      paddingHorizontal: 15,
      marginBottom: 20,
    },
    textContainer: {},
    text: {
      padding: 12,
      fontSize: 25,
      textAlign: 'center',
      fontFamily: "sans-serif",
      color: Colors.background500,
    },
  });
