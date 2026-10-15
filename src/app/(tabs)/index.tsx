import PlaceHolderImage from "@/assets/images/background-image.png";
import Button from "@/components/button";
import IconButton from "@/components/iconButton";
import ImageViewer from "@/components/image-viewer";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { View } from "react-native";
import Toast from "react-native-toast-message";

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>();
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
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

  return (
    <View className="h-full flex justify-center bg-gray-500 items-center w-full">
      <View className="w-[320px] h-110 mb-2 ">
        <ImageViewer
          imgSource={PlaceHolderImage}
          selectedImage={selectedImage}
        />
      </View>
      {showAppOptions && (
        <View className="flex justify-between flex-row items-center p-2 w-77.5">
          <IconButton
            label={"Reset"}
            iconName="refresh-outline"
            onClick={() =>
              alert(() => {
                setShowAppOptions(false);
                setSelectedImage(undefined);
              })
            }
          />
          <Button
            label=""
            onClick={() => alert("yahoo")}
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

      <Toast position="bottom" bottomOffset={20} />
    </View>
  );
}
