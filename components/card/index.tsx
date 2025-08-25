import { Colors } from "@/constants/Colors";
import { Text } from "../";
import AntDesign from "@expo/vector-icons/AntDesign";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";

import { Container, ImageCustom, ViewButton, PressableCustom } from "./styles";

export interface CardComponentProps {
  image: string;
  title: string;
  value: string;
}

export default function CardComponent({
  image,
  title,
  value,
}: CardComponentProps) {
  return (
    <Container>
      <ImageCustom
        source={{
          uri: image,
        }}
      />

      <Text title={title} size="14" color={Colors.light.background} />

      <ViewButton>
        <Text title={value} size="16" color={Colors.light.background} />

        <PressableCustom
          style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
        >
          <AntDesign name="plus" size={24} color="black" />
        </PressableCustom>
      </ViewButton>
    </Container>
  );
}
