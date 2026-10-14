import PlaceHolderImage from "@/assets/images/background-image.png";
import Button from "@/components/button";
import ImageViewer from "@/components/image-viewer";
import { View } from "react-native";

export default function Index() {
  return (
    <View className="h-full flex justify-center bg-gray-500 items-center w-full">
      <View className="w-[320px] h-110 ">
        <ImageViewer imgSource={PlaceHolderImage} />
      </View>
      <View>
        <Button
          label="Use this photo"
          onClick={() => {}}
          textStyle="text-white text-xl"
        />
      </View>
    </View>
  );
}
