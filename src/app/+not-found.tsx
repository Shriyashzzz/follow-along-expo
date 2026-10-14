import { Link, Stack } from "expo-router";
import { View } from "react-native";

export default function NotFoundRoute() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops! Not Foung" }} />
      <View>
        <Link href="/">Go Back Home?</Link>
      </View>
    </>
  );
}
