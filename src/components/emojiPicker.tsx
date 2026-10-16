import Ionicons from "@react-native-vector-icons/ionicons";
import { PropsWithChildren } from "react";
import { Modal, Pressable, Text, View } from "react-native";

type Props = PropsWithChildren<{
  isVisible: boolean;
  onClose: () => void;
}>;

export default function EmojiPicker({ isVisible, children, onClose }: Props) {
  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={isVisible}>
        <View className="flex w-full h-full justify-end  ">
          <View className="pb-25  bg-gray-700 ">
            <View className="flex flex-row  w-full justify-between p-3 bg-gray-600 mb-5 items-start rounded-xl h-fit">
              <Text className="text-white text-xl">Choose a Sticker! </Text>
              <Pressable onPress={onClose}>
                <Ionicons name="close" color="#fff" size={25}></Ionicons>
              </Pressable>
            </View>
            {children}
          </View>
        </View>
      </Modal>
    </View>
  );
}
