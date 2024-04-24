import { StyleSheet, Text, View, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import Ant from 'react-native-vector-icons/AntDesign';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import DateTimePicker from '@react-native-community/datetimepicker'
import { addTask } from '../redux/Reducers/TaskReducer';
import Toast from 'react-native-simple-toast';
import { useDispatch } from 'react-redux';
import { Colors } from '../constants/Colors'; //color constants

const AddTask = ({ navigation }) => {
  const dispatch = useDispatch()
  const [title, settitle] = useState('')
  const [description, setdescription] = useState('')
  const [dueDate, setdueDate] = useState(new Date())
  const [show, setShow] = useState(false);
  
  const handleAddTask = () => {
    if (!title || !dueDate || !description) {
      Toast.show('All fields are mandatory', Toast.SHORT)
    } else {
      dispatch(addTask({ title, dueDate:dueDate.toDateString(), description }));
      Toast.show('Task added successfully', Toast.SHORT)
      navigation.goBack()
    }
  };
  
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setdueDate(currentDate);
  };
  
  return (
    <LinearGradient colors={[Colors.primaryGradientStart, Colors.primaryGradientMiddle, Colors.primaryGradientEnd]} style={styles.container}>
      <StatusBar backgroundColor={Colors.statusBarColor} barStyle={'light-content'} />
      <View style={{ margin: 10 }}>
        <Text style={styles.inputText}>Title:</Text>
        <TextInput style={styles.input} placeholder='Enter Task here' placeholderTextColor={Colors.inputPlaceholderColor} value={title}
          onChangeText={(txt) => settitle(txt)} />
        <Text style={styles.inputText}>Due date:</Text>
        <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
          <TextInput style={styles.dateInput} value={dueDate.toDateString()} placeholderTextColor={Colors.inputPlaceholderColor} placeholder='Date not set' />
          <TouchableOpacity style={{ position: 'relative', right: 40, top: -16 }} onPress={() => setShow(!show)}>
            <Ant name={'calendar'} size={26} color={Colors.textColor} />
          </TouchableOpacity>
        </View>
        <Text style={styles.inputText}>Description:</Text>
        <TextInput style={[styles.input, { textAlignVertical: 'top' }]} placeholder='Enter Description here' placeholderTextColor={Colors.inputPlaceholderColor} value={description}
          onChangeText={(txt) => setdescription(txt)} multiline numberOfLines={8} />
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={dueDate}
            mode={'date'}
            minimumDate={dueDate}
            onChange={onChange}
            display={'inline'}
          />
        )}
      </View>
      <TouchableOpacity style={styles.btn} onPress={handleAddTask}>
        <Ant name={'check'} size={30} color={Colors.buttonIconColor} />
      </TouchableOpacity>
    </LinearGradient>
  )
}

export default AddTask

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryGradientStart // Set background color using color constant
  },
  dateInput: {
    width: '95%',
    borderRadius: 6,
    borderWidth: 1,
    margin: 10,
    padding: 10,
    color: Colors.textColor, // Set text color using color constant
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    borderColor: Colors.inputBorderColor // Set border color using color constant
  },
  input: {
    width: '95%',
    borderWidth: 1,
    borderRadius: 6,
    margin: 10,
    padding: 15,
    color: Colors.textColor, // Set text color using color constant
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    borderColor: Colors.inputBorderColor // Set border color using color constant
  },
  inputText: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 2,
    marginLeft: 15,
    color: Colors.textColor, // Set text color using color constant
    fontFamily: 'Poppins-Regular',
  },
  btn: {
    backgroundColor: Colors.buttonBackgroundColor, // Set background color using color constant
    width: 65,
    height: 65,
    position: 'absolute',
    bottom: 20, right: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50
  }
});
