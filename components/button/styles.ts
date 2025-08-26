import { Colors } from "@/constants/Colors";
import styled from "styled-components/native";

export const Container = styled.Pressable`
  width: 100%;
  height: 45px;
  background-color: ${Colors.light.iconFocused};
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
`;
