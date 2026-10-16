import PlaceHolderImage from "@/assets/images/background-image.png";
import Button from "@/components/button";
import EmojiList from "@/components/emojiList";
import EmojiPicker from "@/components/emojiPicker";
import EmojiSticker from "@/components/emojiSticker";
import IconButton from "@/components/iconButton";
import ImageViewer from "@/components/image-viewer";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { ImageSourcePropType, View } from "react-native";
import Toast from "react-native-toast-message";

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>();
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isEmojiVisible, setEmojiIsVisible] = useState<boolean>(false);
  const [pickedEmoji, setPickedEmoji] = useState<
    ImageSourcePropType | undefined
  >(undefined);

  const pickImage = async () => {
    const asyncImageResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
      aspect: [4, 3],
    });

    if (!asyncImageResult.canceled) {
      Toast.show({
        type: "success",
        text1: "Succesfully loaded Image",
        swipeable: true,
      });
      setSelectedImage(asyncImageResult.assets[0].uri);
      setShowAppOptions(true);
    } else {
      Toast.show({
        type: "info",
        text1: "No photos selected",
        text1Style: {
          fontSize: 18,
        },
        swipeable: true,
      });
    }
  };

  const onResetState = () => {
    setShowAppOptions(false);
    setSelectedImage(undefined);
  };
  const onAddEmoji = () => {
    setEmojiIsVisible(true);
  };
  const onSaveImage = () => {};

  const onCloseEmojiPicker = () => {
    setEmojiIsVisible(false);
  };

  return (
    <View className="h-full flex justify-center bg-gray-500 items-center w-full">
      <View className="w-[320px] h-110 mb-2 ">
        <ImageViewer
          imgSource={PlaceHolderImage}
          selectedImage={selectedImage}
        />
        {pickedEmoji && (
          <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />
        )}
      </View>
      {showAppOptions && (
        <View className="flex justify-between flex-row items-center p-2 w-77.5">
          <IconButton
            label={"Reset"}
            iconName="refresh-outline"
            onClick={onResetState}
          />
          <Button
            label=""
            onClick={onAddEmoji}
            iconName="add-outline"
            primary={true}
            width={70}
            rounded="circle"
            border={true}
          />
          <IconButton
            label={"Save"}
            iconName="download-outline"
            onClick={() => alert("save button")}
          />
        </View>
      )}
      {!showAppOptions && (
        <View>
          <Button
            onClick={() => pickImage()}
            label="Choose a photo"
            textStyle="text-black text-xl"
            primary={true}
            iconName="image-outline"
          />
          <Button
            label="Use this photo"
            onClick={() => alert("this is the secindary button")}
            textStyle="text-white text-xl"
          />
        </View>
      )}
      <EmojiPicker isVisible={isEmojiVisible} onClose={onCloseEmojiPicker}>
        <EmojiList
          onCloseModal={() => onCloseEmojiPicker()}
          onSelect={setPickedEmoji}
        />
      </EmojiPicker>
      <Toast position="bottom" bottomOffset={20} />
    </View>
  );
}
