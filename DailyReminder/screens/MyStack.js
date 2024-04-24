import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import AddTask from './AddTask';
import UpdateTask from './UpdateTask';
import Finished from './Finished';
import Splash from './Splash';
import { Colors } from '../constants/Colors'; // Importing color constants

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
       <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}}/>
      <Stack.Screen name="Home" component={Home} options={{headerTitle:'All List',headerStyle:{backgroundColor:Colors.primaryGradientStart},headerTintColor:Colors.textColor}}/>
      <Stack.Screen name="AddTask" component={AddTask} options={{headerTitle:'New Task',headerStyle:{backgroundColor:Colors.primaryGradientStart},headerTintColor:Colors.textColor}}/>
      <Stack.Screen name="UpdateTask" component={UpdateTask} options={{headerTitle:'Update Task',headerStyle:{backgroundColor:Colors.primaryGradientStart},headerTintColor:Colors.textColor}}/>
      <Stack.Screen name="Finished" component={Finished} options={{headerTitle:'Finished Task',headerStyle:{backgroundColor:Colors.primaryGradientStart},headerTintColor:Colors.textColor}}/>
    </Stack.Navigator>
  );
}

export default MyStack;
