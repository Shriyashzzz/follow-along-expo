import { Image } from "expo-image";
import { useState } from "react";
import { StyleSheet } from "react-native";

import {
    FlatList,
    ImageSourcePropType,
    Platform,
    Pressable,
} from "react-native";

type Props = {
  onSelect: (image: ImageSourcePropType) => void;
  onCloseModal: () => void;
};

export default function EmojiList({ onSelect, onCloseModal }: Props) {
  const [emoji] = useState<ImageSourcePropType[]>([
    require("@/assets/images/emoji1.png"),
    require("@/assets/images/emoji2.png"),
    require("@/assets/images/emoji3.png"),
    require("@/assets/images/emoji4.png"),
    require("@/assets/images/emoji5.png"),
    require("@/assets/images/emoji6.png"),
  ]);

  return (
    <FlatList
      className="bg-gray-700 flex flex-row "
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === "web"}
      data={emoji}
      renderItem={({ item, index }) => (
        <Pressable
          onPress={() => {
            onSelect(item);
            onCloseModal();
          }}
        >
          <Image
            style={{
              width: 100,
              height: 100,
              marginRight: 20,
            }}
            source={item}
            key={index}
          ></Image>
        </Pressable>
      )}
    />
  );
}
const styles = StyleSheet.create({
  image: {},
});
