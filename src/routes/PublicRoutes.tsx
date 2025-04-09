import { NavigationIndependentTree } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import Shrek1 from "../pages/shrek/shrek1";
import Shrek2 from "../pages/shrek/shrek2";
import Shrek3 from "../pages/shrek/shrek3";
import Shrek4 from "../pages/shrek/shrek4";

const Stack = createNativeStackNavigator();
export default function PublicRoutes() {
    return (
        <NavigationIndependentTree>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={HomePage} options={{ headerShown: false }} />
                <Stack.Screen name="Shrek1" component={Shrek1} options={{ headerShown: false }} />
                <Stack.Screen name="Shrek2" component={Shrek2} options={{ headerShown: false }} />
                <Stack.Screen name="Shrek3" component={Shrek3} options={{ headerShown: false }} />
                <Stack.Screen name="Shrek4" component={Shrek4} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationIndependentTree>
    )
}
