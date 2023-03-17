import {createStackNavigator} from '@react-navigation/stack';
import {Home, Animation101, Animation102} from '../screens/index';

const Stack = createStackNavigator();

export const MyStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Animation101" component={Animation101} />
      <Stack.Screen name="Animation102" component={Animation102} />
    </Stack.Navigator>
  );
};
