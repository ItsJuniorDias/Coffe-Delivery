import { Colors } from "@/constants/Colors";
import styled from "styled-components/native";

type TextProps = {
  size: string;
  color: string;
};

export const Text = styled.Text<TextProps>`
  font-family: "RosarivoRegular";
  font-size: ${({ size }) => size}px;
  color: ${({ color }) => color};
`;
