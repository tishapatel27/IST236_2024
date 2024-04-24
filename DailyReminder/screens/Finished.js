import { StyleSheet, Text, View, StatusBar, Image, Alert, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import FinishCard from '../components/FinishCard';
import { LinearGradient } from 'expo-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import { removeTask } from '../redux/Reducers/TaskReducer';
import { Colors } from '../constants/Colors'; // Importing color constants

const Finished = () => {
  const [DATA, setDATA] = useState([])
  const dispatch = useDispatch()
  
  const deleteConfirm = (taskId) =>
    Alert.alert('Are you sure?', 'Delete task?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => dispatch(removeTask(taskId)) },
    ]);

  const tasks = useSelector(state => state.tasks.taskItems || []);
  
  useEffect(() => {
    const finishedTasks = tasks.filter(task => task.status === 'finished');
    setDATA(finishedTasks)
  }, [tasks]);

  return (
    <LinearGradient colors={[Colors.primaryGradientStart, Colors.primaryGradientMiddle, Colors.primaryGradientEnd]} style={styles.container}>
      <StatusBar backgroundColor={Colors.statusBarColor} barStyle={'light-content'} />
      {DATA.length > 0 &&
        <FlatList
          style={{ marginHorizontal: 5 }}
          data={DATA}
          renderItem={({ item }) => (
            <FinishCard
              title={item.title}
              dueDate={item.dueDate}
              description={item.description}
              onDelete={() => deleteConfirm(item.id)} />
          )}
        />
      }

      {DATA.length === 0 &&
        <View style={{ alignItems: 'center' }}>
          <Image style={styles.img} source={require('../images/todo2.png')} />
          <Text style={styles.txt}>No finished task</Text>
        </View>
      }
    </LinearGradient>
  )
}

export default Finished

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.primaryGradientStart // Set background color using color constant
  },
  img: {
    width: 230,
    height: 200,
    resizeMode: 'stretch'
  },
  txt: {
    color: Colors.textColor, // Set text color using color constant
    fontSize: 16,
    alignSelf: 'center',
    fontFamily: 'Poppins-Medium'
  },
})
