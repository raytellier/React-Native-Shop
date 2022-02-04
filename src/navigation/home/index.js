import { View, Text } from "react-native";
import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Feather } from "@expo/vector-icons";

// Create bottom tab nav
const Tab = createMaterialBottomTabNavigator();

// Temp screen to populate navigation
const EmptyScreen = () => {
  return <View></View>;
};

// Bottom navigation
export default function HomeScreen() {
  return (
    <Tab.Navigator
      barStyle={{ backgroundColor: "black" }}
      initialRouteName="home"
    >
      <Tab.Screen
        name="home"
        component={EmptyScreen}
        options={{
          tabBarIcon: ({ color }) => {
            <Feather name="home" size={24} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="shop"
        component={EmptyScreen}
        options={{
          tabBarIcon: ({ color }) => {
            <Feather name="search" size={24} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="profile"
        component={EmptyScreen}
        options={{
          tabBarIcon: ({ color }) => {
            <Feather name="radio" size={24} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
