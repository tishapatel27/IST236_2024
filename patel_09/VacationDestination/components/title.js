import { StyleSheet, Text, useWindowDimensions } from "react-native";
import Colors from "../constants/Colors.js";

function Title(props) {
  const { width, height} = useWindowDimensions();
  return <Text style={[styles.title, {fontSize: width * 0.13}]}>{props.children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    flex: 1,
    textAlign: "center",
    fontFamily: "vacay",
    color: Colors.primary300,
  },
});