import { registerRootComponent } from 'expo';

import App from './app/index';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);

// import 'react-native-gesture-handler';
// import MainRoutes from "./src/routes/MainRoutes";
// import { View } from "react-native";
//
// export default function Index() {
//     return (
//         <View style={{ flex: 1 }}>
//             <MainRoutes />
//         </View>
//     );
// }
