import { StyleSheet, Text, View, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import Ant from 'react-native-vector-icons/AntDesign';
import React, { useState, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import DateTimePicker from '@react-native-community/datetimepicker';
import { editTask } from '../redux/Reducers/TaskReducer';
import Toast from 'react-native-simple-toast';
import { useDispatch } from 'react-redux';
import { Colors } from '../constants/Colors'; // Importing color constants

const UpdateTask = ({ navigation, route }) => {
  const dispatch = useDispatch()
  const { title, id, description } = route.params;
  const [etitle, setetitle] = useState('')
  const [dueDate, setdueDate] = useState(new Date())
  const [edescription, setedescription] = useState('')
  const [show, setShow] = useState(false);
  
  const handleUpdateTask = () => {
    if (!etitle || !dueDate || !edescription) {
      Toast.show('All fields are mandatory', Toast.SHORT)
    } else {
      dispatch(editTask({ id, title: etitle, dueDate: dueDate.toDateString(), description: edescription }));
      Toast.show('Task updated successfully', Toast.SHORT)
      navigation.goBack()
    }
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setdueDate(currentDate);
  };

  useEffect(() => {
    setetitle(title)
    setedescription(description)
  }, [])

  return (
    <LinearGradient colors={[Colors.primaryGradientStart, Colors.primaryGradientMiddle, Colors.primaryGradientEnd]} style={styles.container}>
      <StatusBar backgroundColor={Colors.statusBarColor} barStyle={'light-content'} />
      <View style={{ margin: 10 }}>
        <Text style={styles.inputText}>Title:</Text>
        <TextInput style={styles.input} placeholder='Enter Task here' placeholderTextColor={Colors.inputPlaceholderColor} value={etitle}
          onChangeText={(txt) => setetitle(txt)} />
        <Text style={styles.inputText}>Due date:</Text>
        <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
          <TextInput style={styles.dateInput} value={dueDate.toDateString()} placeholderTextColor={Colors.inputPlaceholderColor} placeholder='Date not set' />
          <TouchableOpacity style={{ position: 'relative', right: 40, top: -16 }} onPress={() => setShow(!show)}>
            <Ant name={'calendar'} size={26} color={Colors.textColor} />
          </TouchableOpacity>
        </View>
        <Text style={styles.inputText}>Description:</Text>
        <TextInput style={[styles.input, { textAlignVertical: 'top' }]} placeholder='Enter Description here' placeholderTextColor={Colors.inputPlaceholderColor} value={edescription}
          onChangeText={(txt) => setedescription(txt)} multiline numberOfLines={8} />
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
      <TouchableOpacity style={styles.btn} onPress={handleUpdateTask}>
        <Ant name={'check'} size={30} color={Colors.buttonIconColor} />
      </TouchableOpacity>
    </LinearGradient>
  )
}
export default UpdateTask

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.cardBackgroundColor
  },
  dateInput: {
    width: '95%',
    borderRadius: 6,
    borderWidth: 1,
    margin: 10,
    padding: 10,
    color: Colors.textColor,
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    borderColor: Colors.inputBorderColor
  },
  input: {
    width: '95%',
    borderWidth: 1,
    borderRadius: 6,
    margin: 10,
    padding: 15,
    color: Colors.textColor,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    borderColor: Colors.inputBorderColor
  },
  inputText: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 2,
    marginLeft: 15,
    color: Colors.textColor,
    fontFamily: 'Poppins-Regular',
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
  }
})
