import {StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import 'react-native-gesture-handler';
import {MyStack} from './src/navigation/MyStack';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
