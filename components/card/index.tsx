import { Colors } from "@/constants/Colors";
import { Text } from "../";
import AntDesign from "@expo/vector-icons/AntDesign";

import { Container, ImageCustom, ViewButton, PressableCustom } from "./styles";

export default function CardComponent() {
  return (
    <Container>
      <ImageCustom
        source={{
          uri: "https://plus.unsplash.com/premium_photo-1674327105074-46dd8319164b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29mZmV8ZW58MHx8MHx8fDA%3D",
        }}
      />

      <Text
        title="Cinnamon & Cocoa"
        size="14"
        color={Colors.light.background}
      />

      <ViewButton>
        <Text title="$5.99" size="16" color={Colors.light.background} />

        <PressableCustom
          style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
        >
          <AntDesign name="plus" size={24} color="black" />
        </PressableCustom>
      </ViewButton>
    </Container>
  );
}
