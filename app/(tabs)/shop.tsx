import { Colors } from "@/constants/Colors";
import { Image } from "expo-image";
import { Platform, StyleSheet, View } from "react-native";

export default function ShopScreen() {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.backgroundTabBar,
  },
});
