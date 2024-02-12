import {Text, StyleSheet} from "react-native"
import Colors from "../constants/colors"


function Title(props){
    return <Text style = {styles.title}>{props.children}</Text>
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 50,
        textAlign: "center",
        color: Colors.secondary500,
        fontWeight: 'bold',
        marginBottom: 10, 
        textTransform: 'uppercase', 
        letterSpacing: 1, 
        fontFamily: 'sans-serif',
    },
});
