import Ionicons, {
    IoniconsIconName,
} from "@react-native-vector-icons/ionicons";
import { Pressable, Text } from "react-native";

type Props = {
  label: string;
  iconName: IoniconsIconName;
  onClick: () => void;
};

export default function IconButton({ label, iconName, onClick }: Props) {
  return (
    <Pressable
      className="flex flex-col justify-center items-center"
      onPress={() => onClick()}
    >
      <Ionicons name={iconName} size={26} color={"white"} />
      <Text className="text-center text-xl  text-white">{label}</Text>
    </Pressable>
  );
}
