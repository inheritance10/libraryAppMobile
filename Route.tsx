import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Login ve Register ekranları

//import RegisterScreen from './RegisterScreen';

// Dashboard ekranları
/*import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import SettingsScreen from './SettingsScreen';*/
import Login from './src/pages/login/login';
import Home from './src/pages/home/home';
import Books from "./src/pages/books/books";
import AddBook from "./src/pages/books/addBook";
import UpdateBook from "./src/pages/books/updateBook";
import Users from "./src/pages/users/users";


const Stack = createNativeStackNavigator();

const Route = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainStack} options={{ headerShown: false }} />
        <Stack.Screen name="DashboardStack" component={DashboardStack} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
      {/*<Stack.Screen name="Register" component={Register} />*/}
    </Stack.Navigator>
  );
}

const DashboardStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="Books" component={Books} />
            <Stack.Screen name="AddBook" component={AddBook} />
            <Stack.Screen name="UpdateBook" component={UpdateBook} />
            <Stack.Screen name="Users" component={Users} />
        </Stack.Navigator>
    );
}

export default Route;
