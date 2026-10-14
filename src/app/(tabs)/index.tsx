import PlaceHolderImage from "@/assets/images/background-image.png";
import Button from "@/components/button";
import ImageViewer from "@/components/image-viewer";
import * as ImagePicker from "expo-image-picker";
import { View } from "react-native";
import Toast from "react-native-toast-message";

export default function Index() {
  const pickImage = async () => {
    const asyncImageResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: false,
      quality: 1,
    });

    if (!asyncImageResult.canceled) {
      Toast.show({
        type: "success",
        text1: "Succesfully loaded Image",
        swipeable: true,
      });
      console.log(asyncImageResult);
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
        <ImageViewer imgSource={PlaceHolderImage} />
      </View>
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
      <Toast position="bottom" bottomOffset={20} />
    </View>
  );
}
