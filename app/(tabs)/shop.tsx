import { Colors } from "@/constants/Colors";
import Constants from "expo-constants";
import { Image } from "expo-image";

import { Text, CardShop } from "@/components";

import { FlatList, Platform, ScrollView, StyleSheet, View } from "react-native";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    image:
      "https://images.unsplash.com/photo-1577968897411-6973c2e2452a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvZmZlJTIwZ3JlZW58ZW58MHx8MHx8fDA%3D",
    title: "Cappuccino",
    description: "Dalgona Macha",
    value: 5.99,
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28b1",
    image:
      "https://images.unsplash.com/photo-1654200390170-91af88e67120?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvZmZlJTIwZ3JlZW58ZW58MHx8MHx8fDA%3D",
    title: "Cappuccino",
    description: "Bursting Blueberry",
    value: 8.99,
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28b1",
    image:
      "https://images.unsplash.com/photo-1534687941688-651ccaafbff8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q2FwcHVjY2lub3xlbnwwfHwwfHx8MA%3D%3D",
    title: "Cappuccino",
    description: "Cinnamon & Cocoa",
    value: 0.99,
  },
];

export default function ShopScreen() {
  const renderItem = ({ image, title, description, value }) => {
    return (
      <CardShop
        image={image}
        title={title}
        description={description}
        value={value}
      />
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text title="Cart" color={Colors.light.background} size="24" />
      </View>

      <FlatList
        data={DATA}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={(item) => item.id}
      />
    </ScrollView>
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
    width: "100%",
    alignItems: "center",
    marginBottom: 24,
  },
});
