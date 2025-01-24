import { Link } from "expo-router";
import { View, Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Accounts() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>This is the account page</Text>
        <Link href={"/accountinfo"}>
          <Text
            style={{
              backgroundColor: "lightblue",
              borderWidth: 5,
              borderRadius: 30,
            }}
          >
            Account info
          </Text>
        </Link>
      </View>
    </SafeAreaView>
  );
}
