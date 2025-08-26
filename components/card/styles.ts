import { Colors } from "@/constants/Colors";
import { Image } from "expo-image";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 45%;
  /* height: 230px; */
  background-color: ${Colors.light.backgroundCard};
  border-radius: 16px;
  padding: 12px;
  gap: 8px;
  margin-right: 24px;
  margin-bottom: 16px;
`;

export const ImageCustom = styled(Image)`
  width: 100%;
  height: 111px;
  border-radius: 8px;
`;

export const ViewButton = styled.View`
  width: 100%;
  height: 40px;
  background-color: ${Colors.light.bakgroundButtonCard};
  border-radius: 16px;
  justify-content: center;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 24px;
  align-items: center;
`;

export const PressableCustom = styled.Pressable`
  width: 40px;
  height: 40px;
  background-color: ${Colors.light.iconFocused};
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;
