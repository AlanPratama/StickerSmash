import { Image, StyleSheet } from "react-native";

export const ImageViewer = ({ placeholdImage, selectedImage }) => {
  const imgSource = selectedImage ? { uri: selectedImage } : placeholdImage
  return <Image source={imgSource} style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 10,
  },
});
