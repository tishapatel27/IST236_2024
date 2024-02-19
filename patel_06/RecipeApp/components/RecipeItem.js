import { Button, StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";


function RecipeItem(props) {
  return (
    <View style={styles.item}>
      <View style={styles.itemTitleContainer}>
        <Text style={styles.itemTitle}>{props.title}</Text>
      </View>
      <View style={styles.itemButtonsContainer}>
        <View style={styles.button}>
          <Button title="View" onPress={props.onView} color="#0000FF" />
        </View>
        <View style={styles.button}>
  <Button title="Delete" onPress={props.onDelete} color="#FF0000" />
</View>
      </View>
    </View>
  );
}

export default RecipeItem

const styles = StyleSheet.create({
    item:{
        flexDirection:'row',
        justifyContent:'space-between',
        margin:8,
        borderRadius:6,
        backgroundColor:Colors.accent500,
        borderColor:'#f54e42',
    },
    itemTitleContainer:{
        justifyContent:'center',
    },
    itemTitle:{
        fontFamily:'Papernotes',
        fontSize:20,
        color:Colors.primary300,
        padding:8,
    },
    itemButtonsContainer:{
        flexDirection:'row',
    },
    button:{
        marginVertical:5,
        marginHorizontal:3,
    },
})