import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Downloadpicture } from "@/components/Downloadpicture";
import { Button } from "react-native";
import { useState, useEffect } from "react";

export default function explore() {
  const [pictureOpen, setPictureOpen] = useState(false);

  useEffect(() => {
    console.log("Updated pictureOpen state:", pictureOpen);
  }, [pictureOpen]); // Runs whenever pictureOpen changes

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Text>This is the explore page</Text>
        <Button
          title={pictureOpen ? "Close Download" : "Open Download"}
          onPress={() => {
            setPictureOpen((prevState) => !prevState);
            console.log(pictureOpen);
          }}
        ></Button>
        {pictureOpen && <Downloadpicture />}
      </View>
    </SafeAreaView>
  );
}
