import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dogs from '../Screens/Dogs';
import MyDogs from '../Screens/MyDogs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator   initialRouteName="Home"
    activeColor="#f0edf6"
    inactiveColor="#3e2465"
    barStyle={{ backgroundColor: '#694fad' } } >
      <Tab.Screen name="Dogs" component={Dogs}  options={{
       
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),}}/>
      <Tab.Screen  name="MyDogs" component={MyDogs} options={{
      
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="bell" color={color} size={26} />
        ), }}/>
    </Tab.Navigator>
  );
}
export default MyTabs