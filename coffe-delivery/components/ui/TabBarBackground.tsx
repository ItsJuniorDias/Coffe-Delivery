import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { BlurView } from "expo-blur";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";

interface BlurTabBarBackgroundProps {
  styles: StyleProp<ViewStyle>;
}

export default function BlurTabBarBackground({
  styles,
}: BlurTabBarBackgroundProps) {
  return <BlurView tint="dark" style={[StyleSheet.absoluteFill, styles]} />;
}

export function useBottomTabOverflow() {
  return useBottomTabBarHeight();
}
