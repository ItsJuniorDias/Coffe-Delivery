import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { StripeProvider } from "@stripe/stripe-react-native";

import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    RosarivoRegular: require("../assets/fonts/Rosarivo-Regular.ttf"),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <StripeProvider
      publishableKey="pk_test_51S0Q1uEh4zjPHEag1ccdx44CrTXJavCokiAfWEsmA76BF35IKjdM2BOvlo3W1AZCZRfb6qZEpbl125rdTuns5xB600FfLttySw"
      merchantIdentifier="merchant.com.itsjuniordias1997.coffe-delivery"
    >
      <GestureHandlerRootView>
        <ThemeProvider
          value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
          <StatusBar
            style="light"
            backgroundColor={Colors.light.backgroundTabBar}
          />
          <Stack initialRouteName="(app)">
            <Stack.Screen
              name="(profile)/index"
              options={{ headerShown: false }}
            />

            <Stack.Screen name="(app)" options={{ headerShown: false }} />
          </Stack>
        </ThemeProvider>
      </GestureHandlerRootView>
    </StripeProvider>
  );
}
