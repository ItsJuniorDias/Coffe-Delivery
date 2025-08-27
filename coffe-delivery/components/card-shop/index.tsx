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
import { useCoffeStore } from "@/store";

interface CardShopComponentProsp {
  id: string;
  image: string;
  title: string;
  description: string;
  value: number;
  quantity: number;
}

export default function CardShopComponent({
  id,
  image,
  title,
  description,
  value,
  quantity,
}: CardShopComponentProsp) {
  console.log(
    {
      id,
    },
    "QUANTITY"
  );

  const { setQuantityPlus, setQuantityMinus } = useCoffeStore();

  return (
    <Container>
      <View style={{ flexDirection: "row" }}>
        <ImageCustom
          source={{
            uri: image,
          }}
        />

        <Content>
          <Text
            numberOfLines={1}
            title={title}
            color={Colors.light.background}
            size="14"
          />
          <Text title={description} color={Colors.light.background} size="12" />
          <Text title={`$${value}`} color={Colors.light.background} size="16" />
        </Content>
      </View>

      <ButtonContent>
        <Button
          onPress={() => setQuantityMinus(id)}
          style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
        >
          <AntDesign name="minus" size={24} color="black" />
        </Button>

        <Text title={`${quantity}`} color={Colors.light.background} size="20" />

        <Button
          onPress={() => setQuantityPlus(id)}
          style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
        >
          <Entypo name="plus" size={24} color="black" />
        </Button>
      </ButtonContent>
    </Container>
  );
}
