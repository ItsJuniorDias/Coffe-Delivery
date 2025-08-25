import { Colors } from "@/constants/Colors";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import Constants from "expo-constants";

import { Text } from "@/components";

import avatar from "../../assets/images/avatar.png";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text
            title="déjà"
            color={Colors.light.iconFocused}
            size="36"
            style={{ opacity: 0.5 }}
          />
          <Text
            title="Brew"
            color={Colors.light.iconFocused}
            size="48"
            style={{ marginTop: -24 }}
          />
        </View>

        <Image source={avatar} style={styles.image} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.backgroundTabBar,
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 24,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
  },
});
