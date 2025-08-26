import { Colors } from "@/constants/Colors";
import { Container, Input } from "./styles";
import Feather from "@expo/vector-icons/Feather";
import { View } from "react-native";
import { useState } from "react";

interface InputComponentProps {
  value: string;
  handleChange: (item: string) => void;
}

export default function InputComponent({
  value,
  handleChange,
}: InputComponentProps) {
  return (
    <Container>
      <View>
        <Feather name="search" size={24} color={Colors.light.iconFocused} />
      </View>

      <Input
        value={value}
        onChangeText={handleChange}
        placeholder="Browse your favourite coffee..."
        placeholderTextColor={Colors.light.iconFocused}
      />
    </Container>
  );
}
