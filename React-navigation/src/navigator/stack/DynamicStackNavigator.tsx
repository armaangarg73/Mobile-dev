import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../screens/HomeScreen";
import DetailScreen from "../../screens/DetailScreen";
import ProfileScreen from "../../screens/ProfileScreen";
import { StatusBar } from "expo-status-bar";

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <>
      <StatusBar style="light" />

      <Stack.Navigator
      // screenOptions={{
      //   headerStyle: {
      //     backgroundColor: "#111827",
      //   },
      //   headerTintColor: "#fff",
      //   headerTitleStyle: {
      //     fontWeight: "bold",
      //     fontSize: 25
      //   },
      // }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            // headerShown:false,
            title: "Dashboard",
            headerStyle: {
              backgroundColor: "#111827",
            },
            headerTitleAlign: "center",
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 22,
            },
            animation: "slide_from_right",
          }}
        />

        <Stack.Screen name="Details" component={DetailScreen} />

        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </>
  );
}

export default function DynamicStackNavigator() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

// Animations padhna hai
