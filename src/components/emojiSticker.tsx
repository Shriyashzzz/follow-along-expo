import { ImageSourcePropType } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from "react-native-reanimated";

type Props = {
  imageSize: number;
  stickerSource: ImageSourcePropType;
};

export default function EmojiSticker({ imageSize, stickerSource }: Props) {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const scaleImage = useSharedValue(imageSize);

  const imageStyle = useAnimatedStyle(() => {
    return {
      width: withSpring(scaleImage.value),
      height: withSpring(scaleImage.value),
    };
  });

  const doubleTap = Gesture.Tap()
    .numberOfTaps(2)
    .onStart(() => {
      if (scaleImage.value !== imageSize * 2) {
        scaleImage.value = scaleImage.value * 2;
      } else {
        scaleImage.value = Math.round(scaleImage.value / 2);
      }
    });

  const drag = Gesture.Pan().onChange((event) => {
    const newX = translateX.value + event.changeX;
    const newY = translateY.value + event.changeY;
    if (newY > -220 && newY < 183 - (scaleImage.value - imageSize)) {
      translateY.value = newY;
    }
    if (newX > 1 && newX < 278 - (scaleImage.value - imageSize)) {
      translateX.value = newX;
    }
  });

  const containerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
      ],
    };
  });

  return (
    <GestureDetector gesture={drag}>
      <Animated.View style={[containerStyle, { top: -220 }]}>
        <GestureDetector gesture={doubleTap}>
          <Animated.Image
            source={stickerSource}
            style={[{ width: imageSize, height: imageSize }, imageStyle]}
          />
        </GestureDetector>
      </Animated.View>
    </GestureDetector>
  );
}
