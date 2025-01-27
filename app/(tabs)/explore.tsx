import { View, Text, StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Downloadpicture } from "@/components/Downloadpicture";
import { Button } from "react-native";
import { useState, useEffect } from "react";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { Image } from "expo-image";
import { useWallpapers, Wallpaper } from "@/hooks/useWallpapers";
import ImageCard from "@/components/ImageCard";
import { ThemedView } from "@/components/ThemedView";

export default function explore() {

  const Wallpaper = useWallpapers();

  const [selectedWallpaper, setSelectedWallpaper] = useState<null | Wallpaper>(
    null
  );

  // chatgpt code that reset to enable opening of the image in every press
  const handlePress = (item: Wallpaper) => {
    setSelectedWallpaper(null); // Reset state
    setTimeout(() => setSelectedWallpaper(item), 0); // Set the new wallpaper after a short delay
    console.log(selectedWallpaper);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ParallaxScrollView
        headerBackgroundColor={{ dark: "black", light: "white" }}
        headerImage={
          <Image
            style={{ flex: 1, height: 400 }}
            source={{
              uri: Wallpaper[5]?.url ?? "",
            }}
          />
        }
      >
        {/* the ParallaxScrollView holds the parent image */}

        {/* the concurrent image is wrapped in a view that will align them side by side */}
        <ThemedView style={styles.container}>
          <ThemedView style={styles.innerContainer}>
            <FlatList
              data={Wallpaper.filter((_, index) => index % 2 === 0)}
              renderItem={({ item }) => (
                <View style={styles.imageContainer}>
                  <ImageCard
                    onPress={() => handlePress(item)}
                    Wallpaper={item}
                  />
                </View>
              )}
              keyExtractor={(item) => item.name}
              scrollEnabled={false}
            />
          </ThemedView>

          <ThemedView style={styles.innerContainer}>
            <FlatList
              data={Wallpaper.filter((_, index) => index % 2 === 1)}
              renderItem={({ item }) => (
                <View style={styles.imageContainer}>
                  <ImageCard
                    onPress={() => handlePress(item)}
                    Wallpaper={item}
                  />
                </View>
              )}
              keyExtractor={(item) => item.name}
              scrollEnabled={false}
            />
          </ThemedView>
        </ThemedView>
      </ParallaxScrollView>
      {selectedWallpaper && <Downloadpicture wallpaper={selectedWallpaper}/>}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  innerContainer: {
    flex: 1,
    padding: 2,
  },
  imageContainer: {
    padding: 10,
  },
});
