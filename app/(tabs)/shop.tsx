import {
  Dimensions,
  FlatList,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { Colors } from "@/constants/Colors";
import Constants from "expo-constants";
import { Image } from "expo-image";

import { Text, CardShop } from "@/components";

import { PanGestureHandler } from "react-native-gesture-handler";

import Animated, {
  useSharedValue,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  withSpring,
  runOnJS,
} from "react-native-reanimated";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";

const { width } = Dimensions.get("window");
const TRANSLATE_X_THRESHOLD = -width * 0.3;

type ItemProps = {
  id: string;
  image: string;
  title: string;
  description: string;
  value: number;
};

type SwipeableProps = {
  item: ItemProps;
  onDelete: (item: string) => void;
};

function SwipeableItem({ item, onDelete }: SwipeableProps) {
  // cada item tem seu próprio sharedValue
  const translateX = useSharedValue(0);

  const gestureHandler = useAnimatedGestureHandler({
    onActive: (event) => {
      translateX.value = Math.min(0, event.translationX); // só permite arrastar pra esquerda
    },
    onEnd: () => {
      if (translateX.value < TRANSLATE_X_THRESHOLD) {
        runOnJS(onDelete)(item.id); // remove do estado
      } else {
        translateX.value = withSpring(0);
      }
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  return (
    <>
      {/* Fundo vermelho com ícone de lixeira */}
      <View style={styles.deleteBackground}>
        <MaterialIcons name="delete" size={28} color="#fff" />
      </View>

      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View style={[animatedStyle]}>
          <CardShop {...item} />
        </Animated.View>
      </PanGestureHandler>
    </>
  );
}

export default function ShopScreen() {
  const [data, setData] = useState([
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
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28b2",
      image:
        "https://images.unsplash.com/photo-1534687941688-651ccaafbff8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q2FwcHVjY2lub3xlbnwwfHwwfHx8MA%3D%3D",
      title: "Cappuccino",
      description: "Cinnamon & Cocoa",
      value: 0.99,
    },
  ]);

  const handleDelete = (id: string) => {
    setData((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text title="Cart" color={Colors.light.background} size="24" />
      </View>

      <FlatList
        data={data}
        renderItem={({ item }) => (
          <SwipeableItem item={item} onDelete={handleDelete} />
        )}
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
  deleteBackground: {
    ...StyleSheet.absoluteFillObject,
    height: 96,
    backgroundColor: "red",
    borderRadius: 16,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingRight: 20,
  },
});
