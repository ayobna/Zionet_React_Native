import { createDrawerNavigator } from '@react-navigation/drawer';
import Article from '../Screens/Article';
import Feed from '../Screens/Feed';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Article" component={Article} />
    </Drawer.Navigator>
  );
}

export default MyDrawer