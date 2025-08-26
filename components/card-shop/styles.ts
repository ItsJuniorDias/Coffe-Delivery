import { Colors } from "@/constants/Colors";
import { Image } from "expo-image";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 96px;
  background-color: ${Colors.light.bakgroundButtonCard};
  border-radius: 16px;
  padding: 12px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const ImageCustom = styled(Image)`
  width: 72px;
  height: 72px;
  border-radius: 8px;
`;

export const Content = styled.View`
  padding-left: 16px;
  gap: 8px;
`;

export const ButtonContent = styled.View`
  width: 96px;
  height: 30px;
  background-color: ${Colors.light.backgroundCard};
  margin-right: 16px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Button = styled.Pressable`
  width: 30px;
  height: 30px;
  background-color: ${Colors.light.iconFocused};
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`;
