import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import SettingsScreen from '../screens/Settings';
import { Octicons, MaterialCommunityIcons, Ionicons, AntDesign } from "react-native-vector-icons"
import Profile from '../screens/Profile';
import Post from '../screens/Post';
import Notification from '../screens/Notification';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle: { backgroundColor: 'black', borderTopWidth: 0.3 }, tabBarShowLabel: false, tabBarActiveTintColor: 'white' }}
            initialRouteName='Home'
        >
            <Tab.Screen name="Home" component={HomeScreen} options={{
                tabBarIcon: ({ focused, color }) => {
                    if (focused) {
                        return <Octicons name="home" size={24} color={color} />
                    }
                    return <Octicons name="home" size={24} color={color} />
                },
            }} />
            <Tab.Screen name="Settings" component={SettingsScreen} options={{
                tabBarIcon: ({ focused, color }) => {
                    if (focused) {
                        return <MaterialCommunityIcons name="compass-outline" size={27} color={color} />
                    }
                    return <MaterialCommunityIcons name="compass-outline" size={27} color={color} />
                },
            }} />
            <Tab.Screen name="Post" component={Post}
                options={{
                    tabBarIcon: ({ focused, color }) => {
                        if (focused) {
                            return <Ionicons name="add-circle-outline" size={28} color={color} />
                        }
                        return <Ionicons name="add-circle-outline" size={28} color={color} />
                    }
                }} />
            <Tab.Screen name="Notification" component={Notification} options={{
                tabBarIcon: ({ focused, color }) => {
                    if (focused) {
                        return <Ionicons name="notifications-outline" size={24} color={color} />
                    }
                    return <Ionicons name="notifications-outline" size={24} color={color} />
                }
            }} />
            <Tab.Screen name="Profile" component={Profile} options={{
                tabBarIcon: ({ focused, color }) => {
                    if (focused) {
                        return <AntDesign name="user" size={24} color={color} />
                    }
                    return <AntDesign name="user" size={24} color={color} />
                }
            }} />

        </Tab.Navigator>
    );
}

export default Tabs