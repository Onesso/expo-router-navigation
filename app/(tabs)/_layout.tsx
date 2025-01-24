import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "purple",
        headerShown: false,
        tabBarStyle: {
          paddingHorizontal: 30, // Add horizontal padding
          borderRadius: 20, // Add rounded corners
          marginHorizontal: 20, // Add margin to the left and right
          marginBottom: 5, // Add margin to the bottom
          backgroundColor: "#f8f8f8", // Optional: customize background color
          elevation: 15, // Add shadow for Android
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.5,
          shadowRadius: 3,
        },
        tabBarShowLabel: false, // Hide the names under the tabs
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "explore",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="search" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="accounts"
        options={{
          title: "accounts",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="cog" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
