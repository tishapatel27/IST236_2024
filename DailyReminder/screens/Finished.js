import { StyleSheet, Text, View, StatusBar, Image, Alert, FlatList } from 'react-native'
import React from 'react'
import FinishCard from '../components/FinishCard';
import { LinearGradient } from 'expo-linear-gradient';
const Finished = () => {
  const tasks=[
    {
      id:1,
      title:'One task is finished',
      description:'Expo provides its own navigation solution called Expo Router.',
      dueDate:'12 jun 2024'
    },
    {
      id:2,
      title:'Second finished task',
      description:'Expo provides its own navigation solution called Expo Router.',
      dueDate:'15 jun 2024'
    },
    {
      id:3,
      title:'Third finished task',
      description:'Expo provides its own navigation solution called Expo Router.',
      dueDate:'15 jun 2024'
    }
  ]
  const deleteConfirm = (id) =>
    Alert.alert('Are you sure?', 'Delete task?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => console.log('delete Pressed') },
    ]);
  return (
    <LinearGradient colors={['#833ab4', '#fd1d1d', '#fcb045']} style={styles.container}>
      <StatusBar backgroundColor={'#833ab4'} barStyle={'light-content'} />
      {tasks.length > 0 &&
        <FlatList
          style={{ marginHorizontal: 5 }}
          data={tasks}
          renderItem={({ item }) => {
            return <FinishCard title={item.title} dueDate={item.dueDate} onDelete={() => deleteConfirm(item.id)} />
          }}
        />
      }

      {tasks.length === 0 &&
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
    backgroundColor: '#156ced'
  },
  img: {
    width: 230,
    height: 200,
    resizeMode: 'stretch'
  },
  txt: {
    color: '#ffffff',
    fontSize: 16,
    alignSelf: 'center',
    fontFamily: 'Poppins-Medium'
  },
})