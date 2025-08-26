import { Text } from "@/components";

import { Container } from "./styles";
import { Colors } from "@/constants/Colors";
import { PressableProps } from "react-native";

interface ButtonComponentProps extends PressableProps {
  title: string;
}

export default function ButtonComponent({
  title,
  ...props
}: ButtonComponentProps) {
  return (
    <Container {...props}>
      <Text title={title} size="16" color={Colors.light.badge} />
    </Container>
  );
}
