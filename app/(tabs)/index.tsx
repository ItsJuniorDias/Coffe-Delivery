import { Colors } from "@/constants/Colors";
import { Image } from "expo-image";
import { FlatList, Pressable, StyleSheet, View } from "react-native";
import Constants from "expo-constants";

import { Text, Input, Card } from "@/components";

import avatar from "../../assets/images/avatar.png";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d73",
    title: "Fourth Item",
  },
];

export default function HomeScreen() {
  const renderItem = (props) => {
    return <Card />;
  };

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
            style={{ marginTop: -18 }}
          />
        </View>

        <Pressable
          onPress={() => {}}
          style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
        >
          <Image source={avatar} style={styles.image} />
        </Pressable>
      </View>

      <Input />

      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={{
          alignItems: "center",
          paddingTop: 24,
        }}
      />
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
