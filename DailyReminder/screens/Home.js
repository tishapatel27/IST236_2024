import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity, Alert, FlatList } from 'react-native'
import React, { useState, useLayoutEffect } from 'react'
import ItemCard from '../components/ItemCard'
import Ant from 'react-native-vector-icons/AntDesign'
import Icon from 'react-native-vector-icons/AntDesign';
import { LinearGradient } from 'expo-linear-gradient';
const Home = ({ navigation }) => {
  const [loading, setloading] = useState(true)
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Finished')}>
          <Icon
            name={'checkcircle'}
            size={25}
            style={{ marginRight: 20 }}
            color="rgba(255, 255, 255, 1)"
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  const deleteConfirm = (id) =>
    Alert.alert('Are you sure?', 'Delete task?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => console.log('delete Pressed') },
    ]);
  const eiditStatus = (taskId) => {
    console.log('task update: ', taskId)
  };
  const DATA=[
    {
      id:1,
      title:'Do Something',
      description:'I will complete my app before 23rd.',
      dueDate:'12 jun 2024'
    },
    {
      id:2,
      title:'Do Something',
      description:'I will stop procastinating.',
      dueDate:'15 jun 2024'
    }
  ]
  return (
    <LinearGradient colors={['#833ab4', '#fd1d1d', '#fcb045']} style={styles.container}>
      <StatusBar backgroundColor={'#833ab4'} barStyle={'light-content'} />
      {DATA.length > 0 &&
        <FlatList
          style={{ marginHorizontal: 5 }}
          data={DATA}
          renderItem={({ item }) => {
            return <ItemCard title={item.title} dueDate={item.dueDate}
              onDelete={() => deleteConfirm(item.id)} onPress={() => navigation.navigate('UpdateTask', { title: item.title, dueDate: item.dueDate, id: item.id })} onEidit={() => eiditStatus(item.id)} />
          }}
        />
      }

      {loading === false && DATA.length === 0 &&
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
          <Image style={styles.img} source={require('../images/todo.png')} />
          <Text style={styles.txt}>Nothing to do</Text>
        </View>
      }
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('AddTask')}>
        <Ant name={'plus'} size={30} color={'#156ced'} />
      </TouchableOpacity>
    </LinearGradient>
  )
}
export default Home
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#156ced'
  },
  img: {
    width: 350,
    height: 220,
    resizeMode: 'stretch'
  },
  txt: {
    color: '#ffffff',
    fontSize: 16,
    alignSelf: 'center',
    fontFamily: 'Poppins-Medium'
  },
  btn: {
    //backgroundColor:'#87CEEB',
    // backgroundColor:'#FFA500',
    // backgroundColor:'#D3D3D3',
    backgroundColor: '#ffffff',
    // backgroundColor:'#FF0000',
    width: 65,
    height: 65,
    position: 'absolute',
    bottom: 20, right: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50
  }

})