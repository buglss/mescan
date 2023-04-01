import React from "react";
import Home from "../views/Home";
import Details from "../views/Details";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Mescan" component={Home} />
                <Stack.Screen name="Detay" component={Details} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default HomeStack;