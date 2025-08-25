import { TextProps } from "react-native";
import { Text } from "./styles";

interface TextComponentProps extends TextProps {
  title: string;
  size: string;
  color: string;
}

export default function TextComponent({
  title,
  size,
  color,
  ...props
}: TextComponentProps) {
  return (
    <Text size={size} color={color} {...props}>
      {title}
    </Text>
  );
}
