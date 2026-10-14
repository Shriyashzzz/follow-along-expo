import Ionicons, {
    IoniconsIconName,
} from "@react-native-vector-icons/ionicons";
import { Pressable, Text, View } from "react-native";

type Props = {
  label: string;
  onClick: () => void;
  textStyle?: string;
  primary?: boolean;
  iconName?: IoniconsIconName;
};

export default function Button({
  label,
  onClick,
  textStyle,
  primary,
  iconName,
}: Props) {
  return (
    <View className={`w-80  h-15 flex justify-center items-center `}>
      {primary && (
        <Pressable
          onPress={() => onClick()}
          className="flex justify-center items-center w-full h-full rounded-xl flex-row gap-2 bg-amber-50"
        >
          {iconName && <Ionicons name={iconName} size={20} />}
          <Text className={textStyle}>{label}</Text>
        </Pressable>
      )}
      {!primary && (
        <Pressable
          onPress={() => onClick()}
          className="flex w-full h-full justify-center items-center"
        >
          <Text className={`${textStyle}`}>{label}</Text>
        </Pressable>
      )}
    </View>
  );
}
