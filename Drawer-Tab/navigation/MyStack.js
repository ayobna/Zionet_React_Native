import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import MyDrawer from './MyDrawer';
import MyTabs from './MyTab';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="MyDrawer" component={MyDrawer} />
      <Stack.Screen name="MyTabs" component={MyTabs} />
    </Stack.Navigator>
  );
}

export default MyStack;