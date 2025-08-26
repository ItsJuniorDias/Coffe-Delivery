import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";

import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useCoffeStore } from "@/store";

export default function TabLayout() {
  const { data } = useCoffeStore();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.light.iconFocused,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: () => (
          <TabBarBackground
            styles={{
              backgroundColor: Colors.light.backgroundTabBar,
            }}
          />
        ),
        tabBarShowLabel: false,
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" size={32} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="shop"
        options={{
          tabBarBadge: data.length,
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="shopping-cart" size={32} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
