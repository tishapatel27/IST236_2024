import { NavigationContainer } from '@react-navigation/native';
import MyStack from './screens/MyStack'
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persister } from './redux/Store';
const App = () => {
  let [fontsLoaded] = useFonts({
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.otf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.otf'),
    'Poppins-Medium': require('./assets/fonts/Poppins-Medium.otf'),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <Provider store={store}>
    <PersistGate persistor={persister}>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </PersistGate>
  </Provider>
  )
}
export default App;