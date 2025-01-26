import { Wallpaper } from "@/hooks/useWallpapers";
import {
  View,
  Image,
  StyleSheet,
  useColorScheme,
  Pressable,
} from "react-native";
import { ThemedText } from "./ThemedText";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

export default function ImageCard({
  Wallpaper,
  onPress,
}: {
  Wallpaper: Wallpaper;
  onPress: () => void;
}) {
  const theme = useColorScheme() ?? "light";
  return (
    <Pressable onPress={onPress}>
      <View>
        <Image source={{ uri: Wallpaper.url }} style={styles.image} />
        <View style={styles.labelContainer}>
          <ThemedText style={styles.label}>{Wallpaper.name}</ThemedText>
          <View style={styles.ioniconsContainer}>
            <Ionicons
              name={"heart"}
              size={28}
              color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
            />
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  ioniconsContainer: {
    display: "flex",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    height: 300,
    borderRadius: 20,
  },
  label: {
    color: "white",
  },
  labelContainer: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});
