import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { ScrollView, State } from "react-native-gesture-handler";
import ImageComponent from "./src/Components/ImageComponent";
import { images } from "./src/Utils/Images";
import AnimatedBottomSheet from "./src/Components/AnimatedBottomSheet";
import Animated, {
  useCode,
  cond,
  Value,
  eq,
  set,
  not,
  interpolate,
} from "react-native-reanimated";
import { withTransition } from "react-native-redash";

export default function App() {
  // translateY = new Value(300);
  const state = new Value(State.UNDETERMINED);
  const isOpen = new Value(0);
  const transition = withTransition(isOpen);

  translateY = interpolate(transition, {
    inputRange: [0, 1],
    outputRange: [300, 0],
  });

  const zIndex = interpolate(translateY, {
    inputRange: [0, 299, 300],
    outputRange: [1, 1, -1],
  });

  useCode(() => cond(eq(state, State.END), set(isOpen, not(isOpen))), [
    state,
    isOpen,
  ]);

  return (
    <>
      <SafeAreaView style={{ backgroundColor: "black" }} />
      <View
        style={{
          height: 50,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "black",
        }}
      >
        <Text style={{ fontSize: 24, color: "white" }}>The Gram</Text>
      </View>
      <ScrollView>
        {images.map((image, index) => (
          <ImageComponent
            gestureHandler={{
              onHandlerStateChange: Animated.event([
                {
                  nativeEvent: { state },
                },
              ]),
            }}
            key={image.id}
            image={image}
          />
        ))}
      </ScrollView>

      <AnimatedBottomSheet
        zIndex={zIndex}
        gestureHandler={{
          onHandlerStateChange: Animated.event([
            {
              nativeEvent: { state },
            },
          ]),
        }}
        translateY={translateY}
      ></AnimatedBottomSheet>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
});
