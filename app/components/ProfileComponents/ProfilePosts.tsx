import { View, Image, StyleSheet, FlatList, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const ITEM_SIZE = width / 3;

export default function ProfilePosts() {
  const images = [
    require("@/assets/images/feed1.jpg"),
    require("@/assets/images/feed2.jpg"),
    require("@/assets/images/feed3.jpg"),
    require("@/assets/images/feed4.jpg"),
    require("@/assets/images/feed5.jpg"),
    require("@/assets/images/feed1.jpg"),
    require("@/assets/images/feed2.jpg"),
    require("@/assets/images/feed3.jpg"),
  ];

  return (
    <FlatList
      data={images}
      numColumns={3}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={styles.imageWrapper}>
          <Image source={item} style={styles.image} resizeMode="cover" />
        </View>
      )}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#030303",
  },
  imageWrapper: {
    width: ITEM_SIZE,
    height: ITEM_SIZE,
    borderWidth: 0.5,
    borderColor: "#111",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
