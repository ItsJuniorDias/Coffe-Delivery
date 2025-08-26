import { Colors } from "@/constants/Colors";
import { View } from "react-native";
import Svg, { Line } from "react-native-svg";

export default function Divider() {
  return (
    <View style={{ flexDirection: "row" }}>
      <Svg height="2" width="200">
        <Line
          x1="0"
          y1="1"
          x2="200"
          y2="1"
          stroke={Colors.light.iconFocused}
          strokeWidth="2"
          strokeDasharray="6,4"
        />
      </Svg>

      <Svg height="2" width="200">
        <Line
          x1="0"
          y1="1"
          x2="150"
          y2="1"
          stroke={Colors.light.iconFocused}
          strokeWidth="2"
          strokeDasharray="6,4"
        />
      </Svg>
    </View>
  );
}
