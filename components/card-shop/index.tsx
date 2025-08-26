import { Text } from "@/components";

import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";

import {
  Button,
  ButtonContent,
  Container,
  Content,
  ImageCustom,
} from "./styles";
import { Colors } from "@/constants/Colors";
import { View } from "react-native";

interface CardShopComponentProsp {
  image: string;
  title: string;
  description: string;
  value: number;
}

export default function CardShopComponent({
  image,
  title,
  description,
  value,
}: CardShopComponentProsp) {
  return (
    <Container>
      <View style={{ flexDirection: "row" }}>
        <ImageCustom
          source={{
            uri: image,
          }}
        />

        <Content>
          <Text title={title} color={Colors.light.background} size="14" />
          <Text title={description} color={Colors.light.background} size="12" />
          <Text title={`$${value}`} color={Colors.light.background} size="16" />
        </Content>
      </View>

      <ButtonContent>
        <Button
          onPress={() => {}}
          style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
        >
          <AntDesign name="minus" size={24} color="black" />
        </Button>

        <Text title="1" color={Colors.light.background} size="20" />

        <Button
          onPress={() => {}}
          style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
        >
          <Entypo name="plus" size={24} color="black" />
        </Button>
      </ButtonContent>
    </Container>
  );
}
