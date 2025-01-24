import { View, Text } from "react-native";
import { Link } from "expo-router";

export default function Accountinfo() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text >this is the account info page</Text>
      <Link href={"/profileinfo"} >
        <Text style={{ backgroundColor: "lightblue" }}>Profile info</Text>
      </Link>
    </View>
  );
}
