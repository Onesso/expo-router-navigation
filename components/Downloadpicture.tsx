import React, { useCallback, useMemo, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  useColorScheme,
  Pressable,
} from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { Wallpaper } from "@/hooks/useWallpapers";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { ThemedText } from "./ThemedText";

export const Downloadpicture = ({ wallpaper }: { wallpaper: Wallpaper }) => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  const theme = useColorScheme();

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  // renders
  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={["95%"]}
      onChange={handleSheetChanges}
      enablePanDownToClose={true}
      handleIndicatorStyle={{ height: 0 }}
      handleStyle={{ display: "none" }}
    >
      <BottomSheetView style={styles.contentContainer}>
        <Image style={styles.image} source={{ uri: wallpaper.url }} />
        <View style={styles.topBar}>
          <Ionicons
            name={"close"}
            size={38}
            color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
          />
          <View style={styles.topBarInner}>
            <Ionicons
              name={"heart"}
              size={38}
              color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
            />
            <Ionicons
              style={{ paddingLeft: 10 }}
              name={"save"}
              size={38}
              color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
            />
          </View>
        </View>
        <View style={styles.textContainer}>
          <ThemedText style={styles.text}>{wallpaper.name}</ThemedText>
        </View>
        <DownloadButton />
      </BottomSheetView>
    </BottomSheet>
  );
};

// a function button to download the image

function DownloadButton() {
  const theme = useColorScheme();
  return (
    <Pressable
      style={{
        backgroundColor: "black",
        marginVertical: 20,
        marginHorizontal: 40,
        padding: 10,
        justifyContent: "center",
        borderRadius: 20,
        flexDirection: "row",
        width: "50%",
        alignSelf: "center",
      }}
    >
      <Ionicons
        style={{ paddingRight: 10 }}
        name={"save"}
        size={28}
        color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
      />
      <Text style={{ color: "white", fontSize: 20, fontWeight: "600" }}>
        Download
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },

  image: {
    height: "70%",
    borderRadius: 15,
  },
  topBar: {
    position: "absolute",
    padding: 10,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
  },
  topBarInner: {
    display: "flex",
    flexDirection: "row",
  },
  textContainer: {
    width: "100%",
  },
  text: {
    textAlign: "center",
    paddingTop: 20,
    fontSize: 30,
    fontWeight: "600",
  },
});
