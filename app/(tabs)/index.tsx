import { Colors } from "@/constants/Colors";
import { Image } from "expo-image";
import { FlatList, Pressable, StyleSheet, View } from "react-native";
import Constants from "expo-constants";

import { Text, Input, Card } from "@/components";

import avatar from "../../assets/images/avatar.png";
import { CardComponentProps } from "@/components/card";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Cinnamon & Cocoa",
    image:
      "https://plus.unsplash.com/premium_photo-1674327105074-46dd8319164b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29mZmV8ZW58MHx8MHx8fDA%3D",
    value: "$5.99",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Drizzled with Caramel",
    image:
      "https://images.unsplash.com/photo-1630040995437-80b01c5dd52d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvZmZlfGVufDB8fDB8fHww",
    value: "$9.89",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Bursting Blueberry",
    image:
      "https://plus.unsplash.com/premium_photo-1673545518947-ddf3240090b1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvZmZlfGVufDB8fDB8fHww",
    value: "$10.00",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d73",
    title: "Dalgona Whipped Macha",
    image:
      "https://images.unsplash.com/photo-1497636577773-f1231844b336?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29mZmV8ZW58MHx8MHx8fDA%3D",
    value: "$7.99",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d74",
    title: "Golden Bean",
    image:
      "https://images.unsplash.com/photo-1588483977150-9c2127ab7bcc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvZmZlfGVufDB8fDB8fHww",
    value: "$6.99",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d71",
    title: "Morning Essence",
    image:
      "https://images.unsplash.com/photo-1630040995437-80b01c5dd52d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvZmZlfGVufDB8fDB8fHww",
    value: "$9.99",
  },
];

export default function HomeScreen() {
  const renderItem = ({ title, image, value }: CardComponentProps) => {
    return <Card image={image} title={title} value={value} />;
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
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={{
          alignItems: "center",
          paddingTop: 24,
          paddingLeft: 16,
          paddingBottom: 80,
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
