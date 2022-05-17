import { createDrawerNavigator } from '@react-navigation/drawer';

import Dogs from '../Screens/Dogs';
import MyDogs from '../Screens/MyDogs';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Dogs" component={Dogs} />
      <Drawer.Screen name="MyDogs" component={MyDogs} />
    </Drawer.Navigator>
  );
}

export default MyDrawer