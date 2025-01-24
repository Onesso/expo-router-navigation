import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "purple",
        headerShown: false,
        tabBarStyle: {
          flexDirection: "row", // Arrange tabs horizontally
          justifyContent: "space-between", // Distribute tabs evenly
          paddingHorizontal: 10, // Add horizontal padding
          paddingVertical: 10,
          borderRadius: 10,
          minHeight: 70,
        },
        // tabBarShowLabel: false, // Hide the names under the tabs
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "For you",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={25} name="home" color={color} />
          ),
          tabBarLabelPosition: "below-icon",
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: "bold",
          },
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "explore",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={25} name="search" color={color} />
          ),
          tabBarLabelPosition: "below-icon",
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: "bold",
          },
        }}
      />
      <Tabs.Screen
        name="accounts"
        options={{
          title: "accounts",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={25} name="user" color={color} />
          ),
          tabBarLabelPosition: "below-icon",
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: "bold",
          },
        }}
      />
    </Tabs>
  );
}
