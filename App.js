import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ImageComponent from "./src/Components/ImageComponent";
import { images } from "./src/Utils/Images";

export default function App() {
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
          <ImageComponent key={image.id} image={image} />
        ))}
      </ScrollView>
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
