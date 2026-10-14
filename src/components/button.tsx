import { Pressable, Text, View } from "react-native";

type Props = {
  label: string;
  onClick: () => void;
  textStyle: string;
};

export default function Button({ label, onClick, textStyle }: Props) {
  return (
    <View className={`w-80 mt-2 h-10 flex justify-center items-center `}>
      <Pressable
        onPress={() => onClick()}
        className="flex  w-full h-full justify-center items-center"
      >
        <Text className={`${textStyle}`}>{label}</Text>
      </Pressable>
    </View>
  );
}
