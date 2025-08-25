import { Colors } from "@/constants/Colors";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 44px;
  background-color: ${Colors.light.backgroundInput};
  padding-left: 16px;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  margin-top: 16px;
`;

export const Input = styled.TextInput`
  width: 100%;
  color: ${Colors.light.iconFocused};
  font-family: "RosarivoRegular";
`;
