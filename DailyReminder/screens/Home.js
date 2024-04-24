import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity, Alert, FlatList } from 'react-native';
import React, { useLayoutEffect, useEffect, useState } from 'react';
import ItemCard from '../components/ItemCard';
import Ant from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/AntDesign';
import { LinearGradient } from 'expo-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import { markTaskAsFinished, removeTask } from '../redux/Reducers/TaskReducer';
import { Searchbar } from 'react-native-paper';
import { Colors } from '../constants/Colors'; // Importing color constants

const Home = ({ navigation }) => {
  const dispatch = useDispatch()
  const [DATA, setDATA] = useState([])
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc'); // Default sort order is ascending
  const tasks = useSelector(state => state.tasks.taskItems || []);
  
  useEffect(() => {
    const finishedTasks = tasks.filter(task => task.status === 'pending');
    setDATA(finishedTasks)
    setFilteredTasks(finishedTasks)
  }, [tasks]);
  
  const [query, setQuery] = useState('');
  
  const onChangeSearch = (query) => {
    setQuery(query);
    const filteredTasks = DATA.filter(task =>
      task.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredTasks(filteredTasks);
  };
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Finished')}>
          <Icon
            name={'checkcircle'}
            size={25}
            style={{ marginRight: 20 }}
            color={Colors.textColor}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  
  const deleteConfirm = (taskId) =>
    Alert.alert('Are you sure?', 'Delete task?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => dispatch(removeTask(taskId)) },
    ]);
  
  const handleMarkAsFinished = (taskId) => {
    dispatch(markTaskAsFinished(taskId));
  };
  
  const sortTasksByDueDate = () => {
    let sortedTasks;
    if (sortOrder === 'asc') {
      sortedTasks = [...filteredTasks].sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
      setSortOrder('desc'); // Toggle to descending order
    } else {
      sortedTasks = [...filteredTasks].sort((a, b) => new Date(b.dueDate) - new Date(a.dueDate));
      setSortOrder('asc'); // Toggle to ascending order
    }
    setFilteredTasks(sortedTasks);
  };

  return (
    <LinearGradient colors={[Colors.primaryGradientStart, Colors.primaryGradientMiddle, Colors.primaryGradientEnd]} style={styles.container}>
      <StatusBar backgroundColor={Colors.statusBarColor} barStyle={'light-content'} />
      {DATA.length > 0 &&
        <>
          <View style={{ flexDirection: 'row', width: '90%', alignItems: 'center', justifyContent: 'space-between', alignSelf:'center'}}>
            <Searchbar placeholder="Search task here..."
              placeholderTextColor={Colors.textColor}
              iconColor={Colors.textColor}
              inputStyle={styles.searchTxt}
              cursorColor={Colors.textColor}
              style={styles.search}
              onChangeText={onChangeSearch}
              value={query}
            />
            <TouchableOpacity style={styles.sortbtn} onPress={sortTasksByDueDate}>
              <Icon name='filter' color={Colors.textColor} size={20} />
            </TouchableOpacity>
          </View>
          <FlatList
            style={{ marginHorizontal: 5 }}
            data={filteredTasks}
            renderItem={({ item }) => (
              <ItemCard
                title={item.title}
                dueDate={item.dueDate}
                description={item.description}
                onDelete={() => deleteConfirm(item.id)}
                onPress={() => navigation.navigate('UpdateTask', { title: item.title, dueDate: item.dueDate, id: item.id, description: item.description })}
                onFinish={() => handleMarkAsFinished(item.id)} />
            )}
          />
        </>
      }
      {DATA.length === 0 &&
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
          <Image style={styles.img} source={require('../images/todo.png')} />
          <Text style={styles.txt}>Nothing to do</Text>
        </View>
      }
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('AddTask')}>
        <Ant name={'plus'} size={30} color={Colors.buttonIconColor} />
      </TouchableOpacity>
    </LinearGradient>
  )
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryGradientStart
  },
  img: {
    width: 350,
    height: 220,
    resizeMode: 'stretch'
  },
  txt: {
    color: Colors.textColor,
    fontSize: 16,
    alignSelf: 'center',
    fontFamily: 'Poppins-Medium'
  },
  btn: {
    backgroundColor: Colors.buttonBackgroundColor,
    width: 65,
    height: 65,
    position: 'absolute',
    bottom: 20, right: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50
  },
  search: {
    width: '82%',
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: Colors.primaryGradientStart,
    borderWidth: 0.5,
    marginTop: 15,
    borderColor: Colors.textColor
  },
  searchTxt: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: Colors.textColor,
  },
  sortbtn: {
    width:50,
    height:50,
    borderRadius: 10,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: Colors.primaryGradientStart,
    borderWidth: 0.5,
    marginTop: 15,
    borderColor: Colors.textColor
  }
});
