import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="h-full flex justify-center bg-gray-500 items-center w-full">
      <Text className=" text-2xl text-white w-full text-center">Home ;)</Text>

      <Link
        href="/about"
        className="bg-inherit text-2xl text-amber-200  underline cursor-pointer"
      >
        {" "}
        Check out the about section?
      </Link>
    </View>
  );
}
