import {
  Dimensions,
  FlatList,
  Platform,
  ScrollView,
  StyleSheet,
  View,
  Alert,
} from "react-native";
import { Colors } from "@/constants/Colors";
import Constants from "expo-constants";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Image } from "expo-image";

import { useStripe } from "@stripe/stripe-react-native";

import { Text, CardShop, Divider, Button } from "@/components";

import { PanGestureHandler } from "react-native-gesture-handler";

import Animated, {
  useSharedValue,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  withSpring,
  withTiming,
  runOnJS,
} from "react-native-reanimated";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { useCoffeStore } from "@/store";
import { api } from "@/service/api";

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
  const translateX = useSharedValue(0);

  const opacity = useSharedValue(1);

  const gestureHandler = useAnimatedGestureHandler({
    onActive: (event) => {
      translateX.value = Math.min(0, event.translationX);
    },
    onEnd: () => {
      if (translateX.value < TRANSLATE_X_THRESHOLD) {
        opacity.value = withTiming(0, { duration: 300 }, () => {
          runOnJS(onDelete)(item.id);
        });
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

  const animatedStyleFadeOut = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return (
    <>
      {/* Fundo vermelho com ícone de lixeira */}
      <View style={styles.deleteBackground}>
        <MaterialIcons name="delete" size={28} color="#fff" />
      </View>

      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View style={[animatedStyle, animatedStyleFadeOut]}>
          <CardShop {...item} />
        </Animated.View>
      </PanGestureHandler>
    </>
  );
}

export default function ShopScreen() {
  const { data, removeItem, total } = useCoffeStore();

  console.log(data, "DATA");

  const { initPaymentSheet, presentPaymentSheet, retrievePaymentIntent } =
    useStripe();

  async function openPaymentSheet() {
    try {
      const paymentIntent = await api.post("/create-payment-intent", {
        amount: `${total()}`.replace(/\./g, ""),
      });

      const { error: initError } = await initPaymentSheet({
        paymentIntentClientSecret: paymentIntent.data.clientSecret,
        merchantDisplayName: "merchant.com.itsjuniordias1997.coffe-delivery",
      });

      if (initError) {
        console.log("Erro ao inicializar Payment Sheet:", initError);
        return;
      }

      // 2. Agora você pode apresentar a Payment Sheet
      const { error: paymentError } = await presentPaymentSheet();

      if (paymentError) {
        console.log("Erro no pagamento:", paymentError);
      } else {
        console.log("Pagamento realizado com sucesso!");
      }
    } catch (err) {
      console.log("Erro inesperado:", err);
    }
  }

  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 96 }}
      style={styles.container}
    >
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
          <Text title="$0" size="14" color={Colors.light.background} />
          <Text title="$0" size="14" color={Colors.light.background} />
        </View>
      </View>

      <Divider />

      <View style={styles.footer}>
        <Text title="Grand Total" size="22" color={Colors.light.background} />

        <Text title={`$${total()}`} size="22" color={Colors.light.background} />
      </View>

      <Button
        onPress={() => openPaymentSheet()}
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
