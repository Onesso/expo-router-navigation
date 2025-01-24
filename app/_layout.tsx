import { Slot, Stack } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Layout() {
  return (
    <GestureHandlerRootView>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="(notbottomtab)/accountinfo"
          options={{
            headerShown: true,
            headerTitle: "Account info",
            headerBackTitle: "back",
            headerStyle: { backgroundColor: "blue" },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="(notbottomtab)/profileinfo"
          options={{
            headerShown: true,
            headerTitle: "account info",
            headerStyle: { backgroundColor: "blue" },
            headerTintColor: "#fff",
          }}
        />
      </Stack>
    </GestureHandlerRootView>
  );
}
