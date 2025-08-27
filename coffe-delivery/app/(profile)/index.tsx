import { useLocalSearchParams, useRouter } from "expo-router";
import Feather from "@expo/vector-icons/Feather";

import { Text, Button } from "@/components";

import { Colors } from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";

import {
  Container,
  Thumbanail,
  Content,
  Row,
  ContentButton,
  PressableCustom,
  ButtonBack,
  Footer,
} from "./styles";
import { TouchableOpacity, View } from "react-native";
import { useState } from "react";
import { useCoffeStore } from "@/store";

export default function ProfileScreen() {
  const { id, image, title, value, quantity } = useLocalSearchParams();

  const { fetch } = useCoffeStore();

  const router = useRouter();

  const [isLike, setIsLike] = useState(false);

  const [active, setActive] = useState({
    activeOat: true,
    activeSoy: false,
    activeaAlmond: false,
  });

  return (
    <Container>
      <ButtonBack onPress={() => router.back()}>
        <Feather
          name="arrow-left"
          size={24}
          color={Colors.light.backgroundTabBar}
        />
      </ButtonBack>

      <Thumbanail source={image} />

      <Content>
        <Row>
          <Text title="Cappuccino" color={Colors.light.background} size="24" />

          <TouchableOpacity
            onPress={() => setIsLike((prevState) => !prevState)}
          >
            <Ionicons
              name={isLike ? "heart" : "heart-outline"}
              size={40}
              color={Colors.light.red}
            />
          </TouchableOpacity>
        </Row>

        <Text title={title} color={Colors.light.background} size="16" />

        <Text
          title="A single espresso shot poured into hot foamy milk, with the surface topped with mildly sweetened cocoa powder and drizzled with scrumptious caramel syrup ... Read More"
          color={Colors.light.background}
          size="14"
        />
      </Content>

      <ContentButton>
        <Text
          title="Choice of Milk"
          color={Colors.light.background}
          size="16"
        />

        <Row>
          <PressableCustom
            outline={!active.activeOat}
            onPress={() => {
              setActive((prevState) => ({
                ...prevState,
                activeOat: true,
                activeSoy: false,
                activeaAlmond: false,
              }));
            }}
            style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
          >
            <Text
              title="Oat Milk"
              color={Colors.light.backgroundTabBar}
              style={{
                color: active.activeOat
                  ? Colors.light.backgroundTabBar
                  : Colors.light.iconFocused,
              }}
              size="14"
            />
          </PressableCustom>

          <PressableCustom
            outline={!active.activeSoy}
            onPress={() => {
              setActive((prevState) => ({
                ...prevState,
                activeSoy: true,
                activeaAlmond: false,
                activeOat: false,
              }));
            }}
            style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
          >
            <Text
              title="Soy Milk"
              style={{
                color: active.activeSoy
                  ? Colors.light.backgroundTabBar
                  : Colors.light.iconFocused,
              }}
              size="14"
            />
          </PressableCustom>

          <PressableCustom
            outline={!active.activeaAlmond}
            onPress={() => {
              setActive((prevState) => ({
                ...prevState,
                activeaAlmond: true,
                activeOat: false,
                activeSoy: false,
              }));
            }}
            style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
          >
            <Text
              title="Almond Milk"
              style={{
                color: active.activeaAlmond
                  ? Colors.light.backgroundTabBar
                  : Colors.light.iconFocused,
              }}
              color={Colors.light.backgroundTabBar}
              size="14"
            />
          </PressableCustom>
        </Row>
      </ContentButton>

      <Footer>
        <View>
          <Text title="PRICE" color={Colors.light.background} size="14" />
          <Text title={`$${value}`} color={Colors.light.background} size="24" />
        </View>

        <Button
          onPress={() =>
            fetch({
              id: id,
              title: title,
              value: Number(value),
              image: image,
              quantity: quantity,
            })
          }
          title="BUY NOW"
          style={({ pressed }) => [
            { opacity: pressed ? 0.7 : 1, width: "80%" },
          ]}
        >
          {" "}
        </Button>
      </Footer>
    </Container>
  );
}
