import React from "react";
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Home from "./screens/Home";
import toppicDetail from "./screens/toppicDetail"
import { List } from "./List";
import { Platform } from "react-native";



export default function Navigator(){
    const Stack=createNativeStackNavigator()

    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={'home'} component={Home}/>
                <Stack.Screen name={'List'} component={List}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}