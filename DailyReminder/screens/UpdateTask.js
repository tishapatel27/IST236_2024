import { StyleSheet, Text, View, StatusBar, TextInput, TouchableOpacity } from 'react-native'
import Ant from 'react-native-vector-icons/AntDesign'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import DateTimePicker from '@react-native-community/datetimepicker'
const AddTask = ({ navigation }) => {
  const [title, settitle] = useState('')
  const [description, setdescription] = useState('')
  const [dueDate, setdueDate] = useState(new Date())
  const [show, setShow] = useState(false);
  const addTask = () => {
    navigation.goBack();
  }
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setdueDate(currentDate);
  };
  return (
    <LinearGradient colors={['#833ab4', '#fd1d1d', '#fcb045']} style={styles.container}>
      <StatusBar backgroundColor={'#833ab4'} barStyle={'light-content'} />
      <View style={{ margin: 10 }}>
        <Text style={styles.inputText}>Title:</Text>
        <TextInput style={styles.input} placeholder='Enter Task here' placeholderTextColor={'#f0f2f5'} value={title}
          onChangeText={(txt) => settitle(txt)} />
        <Text style={styles.inputText}>Due date:</Text>
        <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
          <TextInput style={styles.dateInput} value={dueDate.toDateString()} placeholderTextColor={'#f0f2f5'} placeholder='Date not set' />
          <TouchableOpacity style={{ position: 'relative', right: 40, top: -16 }} onPress={() => setShow(!show)}>
            <Ant name={'calendar'} size={26} color={'#ffffff'} />
          </TouchableOpacity>
        </View>
        <Text style={styles.inputText}>Description:</Text>
        <TextInput style={[styles.input, { textAlignVertical: 'top' }]} placeholder='Enter Description here' placeholderTextColor={'#f0f2f5'} value={description}
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
      <TouchableOpacity style={styles.btn} onPress={addTask}>
        <Ant name={'check'} size={30} color={'#156ced'} />
      </TouchableOpacity>
    </LinearGradient>
  )
}
export default AddTask
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#156ced'
  },
  dateInput: {
    width: '95%',
    borderRadius: 6,
    borderWidth: 1,
    margin: 10,
    padding: 10,
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    borderColor: '#dedcdc'
  },
  input: {
    width: '95%',
    borderWidth: 1,
    borderRadius: 6,
    margin: 10,
    padding: 15,
    color: '#ffffff',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    borderColor: '#dedcdc'
  },
  inputText: {
    fontSize: 18,
    fontWeight: '600',
    margin: 10,
    marginLeft: 15,
    color: '#FFFFFF',
    fontFamily: 'Poppins-Regular',
  },
  btn: {
    backgroundColor: '#ffffff',
    width: 65,
    height: 65,
    position: 'absolute',
    bottom: 20, right: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50
  }
})