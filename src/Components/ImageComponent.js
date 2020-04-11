import React from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";
import { Entypo } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const ImageComponent = ({ image, gestureHandler }) => {
  return (
    <>
      <View style={{ ...styles.imageHeader }}>
        <Entypo name="dots-three-horizontal" size={24} />
      </View>
      <View style={{ ...styles.imageContainer }}>
        <Image source={image.uri} style={{ ...styles.image }} />
      </View>
    </>
  );
};
export default ImageComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    height: 300,
    width: width,
  },
  imageHeader: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingHorizontal: 10,
    backgroundColor: "white",
  },
  image: {
    flex: 1,
    height: null,
    width: null,
  },
});
