import Ionicons, {
    IoniconsIconName,
} from "@react-native-vector-icons/ionicons";
import { Pressable, Text, View } from "react-native";

const roundedMap = {
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  "3xl": "rounded-3xl",
  "4xl": "rounded-4xl",
  circle: "rounded-full",
} as const;

type Props = {
  label: string;
  onClick: () => void;
  textStyle?: string;
  primary?: boolean;
  iconName?: IoniconsIconName;
  width?: number;
  rounded?: keyof typeof roundedMap;
};

export default function Button({
  label,
  onClick,
  textStyle,
  primary,
  iconName,
  width = 320,
  rounded = "xl",
}: Props) {
  const height: number = rounded == "circle" ? width : 320;
  return (
    <View
      style={{ width, height }}
      className={`justify-center items-center border-3 p-0.5 border-yellow-600 ${roundedMap[rounded]}`}
    >
      {primary ? (
        <Pressable
          onPress={onClick}
          className={`w-full h-full flex-row justify-center items-center ${label && `gap-2`}  bg-gray-200  p-1 ${roundedMap[rounded]} `}
        >
          {iconName && <Ionicons name={iconName} size={20} />}
          <Text className={textStyle}>{label}</Text>
        </Pressable>
      ) : (
        <Pressable
          onPress={onClick}
          className="w-full h-full justify-center items-center"
        >
          <Text className={textStyle}>{label}</Text>
        </Pressable>
      )}
    </View>
  );
}
