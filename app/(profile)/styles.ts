import { Colors } from "@/constants/Colors";
import { Image } from "expo-image";
import styled from "styled-components/native";

export const Container = styled.ScrollView`
  flex: 1%;
  background-color: ${Colors.light.backgroundTabBar};
  padding: 16px;
`;

export const Thumbanail = styled(Image)`
  width: 100%;
  height: 411px;
  border-radius: 40px;
`;

export const Content = styled.View`
  margin-top: 16px;
  gap: 8px;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ContentButton = styled.View`
  width: 100%;
  margin-top: 32px;
  gap: 8px;
`;

export const PressableCustom = styled.Pressable`
  height: 34px;
  background-color: ${({ outline }) =>
    outline ? Colors.light.backgroundInput : Colors.light.iconFocused};
  align-items: center;
  border-color: ${({ outline }) =>
    outline ? Colors.light.iconFocused : Colors.light.iconFocused};
  border-width: 1px;
  justify-content: center;
  border-radius: 8px;
  padding-left: 16px;
  padding-right: 16px;
`;

export const ButtonBack = styled.TouchableOpacity`
  width: 55px;
  height: 55px;
  background-color: ${Colors.light.background};
  position: absolute;
  border-radius: 50px;
  align-items: center;
  left: 16px;
  z-index: 1;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
`;

export const Footer = styled.View`
  width: 100%;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;
  margin-top: 48px;
`;
