import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screenName } from "../../utils/screenName";
import { Home } from "../../screen/Home";
import { Details } from "../../screen/Details";

const Stack = createNativeStackNavigator();

export const AppStack = ()=>{
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name={screenName.HOME}
                component={Home}
            />
<Stack.Screen
                name={screenName.DETAILS}
                component={Details}
            />
            
        </Stack.Navigator>
    )
}