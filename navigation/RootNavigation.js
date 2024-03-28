import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Main from '../screens/Main';
import Register from '../screens/Register';

const Stack = createNativeStackNavigator();
const RootNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Login'>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Main" component={Main} />
        </Stack.Navigator>
    );
}

export default RootNavigation;