import React from "react";
import Home from "../views/Home";
import Activities from "../views/Activities";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Mescan" component={Home} />
                <Stack.Screen name="Aktiviteler" component={Activities} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default HomeStack;