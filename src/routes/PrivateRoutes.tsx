import { createDrawerNavigator } from '@react-navigation/drawer';
import HomePage from '../pages/HomePage';
import Shrek1 from '../pages/shrek/shrek1';
import Shrek2 from '../pages/shrek/shrek2';
import Shrek3 from '../pages/shrek/shrek3';
import Shrek4 from '../pages/shrek/shrek4';

const Drawer = createDrawerNavigator();

export default function PrivateRoutes() {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomePage} options={{ headerShown: true }} />
            <Drawer.Screen name="Shrek1" component={Shrek1} options={{ headerShown: true }} />
            <Drawer.Screen name="Shrek2" component={Shrek2} options={{ headerShown: true }} />
            <Drawer.Screen name="Shrek3" component={Shrek3} options={{ headerShown: true }} />
            <Drawer.Screen name="Shrek4" component={Shrek4} options={{ headerShown: true }} />
        </Drawer.Navigator>
    );
}
