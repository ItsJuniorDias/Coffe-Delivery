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
import AntDesign from "@expo/vector-icons/AntDesign";
import { Image } from "expo-image";

import { Text, CardShop, Divider, Button } from "@/components";

import { PanGestureHandler } from "react-native-gesture-handler";

import Animated, {
  useSharedValue,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  withSpring,
  runOnJS,
} from "react-native-reanimated";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { useUserStore } from "@/store";

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
  console.log(item, "ITEM");

  const translateX = useSharedValue(0);

  const gestureHandler = useAnimatedGestureHandler({
    onActive: (event) => {
      translateX.value = Math.min(0, event.translationX);
    },
    onEnd: () => {
      if (translateX.value < TRANSLATE_X_THRESHOLD) {
        runOnJS(onDelete)(item.id);
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
  const { data, removeItem } = useUserStore();

  console.log(data, "DATA");

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text title="Cart" color={Colors.light.background} size="24" />
      </View>

      <FlatList
        data={data}
        renderItem={({ item }) => (
          <SwipeableItem item={item} onDelete={removeItem} />
        )}
        keyExtractor={(item) => item.id}
      />

      <Divider />

      <View style={styles.badge}>
        <Text
          title="Apply Coupon Code"
          size="14"
          color={Colors.light.iconFocused}
        />

        <AntDesign name="right" size={24} color={Colors.light.iconFocused} />
      </View>

      <View style={styles.contentText}>
        <View style={{ gap: 4 }}>
          <Text
            title="Delivery Charges"
            size="14"
            color={Colors.light.background}
          />
          <Text title="Taxes" size="14" color={Colors.light.background} />
        </View>

        <View style={{ gap: 4 }}>
          <Text title="$7.99" size="14" color={Colors.light.background} />
          <Text title="$5.89" size="14" color={Colors.light.background} />
        </View>
      </View>

      <Divider />

      <View style={styles.footer}>
        <Text title="Grand Total" size="22" color={Colors.light.background} />

        <Text title="$50.00" size="22" color={Colors.light.background} />
      </View>

      <Button
        onPress={() => {}}
        title="PAY NOW"
        style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
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
    position: "absolute",
    right: 0,
    width: 55,
    height: 96,
    backgroundColor: Colors.light.red,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  badge: {
    width: "100%",
    height: 40,
    backgroundColor: Colors.light.badge,
    marginTop: 24,
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 4,
    paddingHorizontal: 24,
    flexDirection: "row",
  },
  contentText: {
    marginTop: 24,
    gap: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  footer: {
    marginTop: 24,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
