import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Animated from "react-native-reanimated";
import { TapGestureHandler } from "react-native-gesture-handler";
const { width, height } = Dimensions.get("window");

const AnimatedBottomSheet = ({ translateY, gestureHandler, zIndex }) => (
  <>
    <TapGestureHandler {...gestureHandler}>
      <Animated.View
        style={{
          ...StyleSheet.absoluteFill,
          backgroundColor: "rgba(0,0,0,0.5)",
          zIndex: zIndex,
        }}
      />
    </TapGestureHandler>
    <Animated.View
      style={{
        ...styles.bottomSheet,
        transform: [{ translateY: translateY }],
        zIndex: 100,
      }}
    >
      <Text>AnimatedBottomSheet</Text>
    </Animated.View>
  </>
);
export default AnimatedBottomSheet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomSheet: {
    position: "absolute",
    bottom: 0,
    width: width - 20,
    height: 300,
    backgroundColor: "white",
    borderRadius: 25,
    marginHorizontal: 10,
    alignItems: "center",
  },
});
