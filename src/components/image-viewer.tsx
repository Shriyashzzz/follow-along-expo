import { Image } from "expo-image";
import { ImageSourcePropType } from "react-native";

type Props = {
  imgSource: ImageSourcePropType;
  selectedImage?: string;
};

export default function ImageViewer({ imgSource, selectedImage }: Props) {
  imgSource = selectedImage ? { uri: selectedImage } : imgSource;
  return (
    <Image
      source={imgSource}
      style={{ width: 320, height: 440, borderRadius: 18 }}
    />
  );
}
