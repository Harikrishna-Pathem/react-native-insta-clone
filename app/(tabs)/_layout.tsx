import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Stack, Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/theme";
import logo from "@/assets/images/insta-text.png";
import { useNavigationState, useRoute } from "@react-navigation/native";

export default function TabLayout() {
  const currentTabIndex = useNavigationState((state) => state?.index ?? 0);
  const currentTabName = useNavigationState((state) => state?.routes?.[state.index]?.name ?? "");

   


  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: currentTabName === "profile" ? false : true,
        headerStyle: {
          height: 50,
          backgroundColor: "#030303",
        },
        headerLeft: () => (
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Image
              source={logo}
              style={{
                width: 100,
                height: 35,
                borderRadius: 10,
                marginLeft: 10,
                backgroundColor: "#030303",
                padding: 10,
                position: "relative",
                top: -25,
              }}
            />

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                gap: 20,
                position: "relative",
                top: -25,
                right: -230,
              }}
            >
              <Ionicons name="heart-outline" size={25} color={"white"} />
              <Ionicons name="chatbubbles-outline" size={25} color={"white"} />
            </View>
          </View>
        ),
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.gray,
        tabBarStyle: {
          backgroundColor: "#030303",
          borderTopWidth: 0,
          position: "absolute",
          elevation: 0,
          height: 46,
          paddingBottom: 8,
          paddingTop: 6,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="bookmarks"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="bookmark" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="add-circle" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="heart" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="person-circle" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
