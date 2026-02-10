import { View, Image, StyleSheet, FlatList } from "react-native";

export default function ProfilePosts() {
  const images = [
    require("@/assets/images/feed1.jpg"),
    require("@/assets/images/feed2.jpg"),
    require("@/assets/images/feed3.jpg"),
    require("@/assets/images/feed4.jpg"),
    require("@/assets/images/feed5.jpg"),
  ];

  return (
    <FlatList
      data={images}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={styles.imageWrapper}>
          <Image source={item} style={styles.image} resizeMode="cover" />
        </View>
      )}
      contentContainerStyle={{ backgroundColor: "#030303" }}
    />
  );
}

const styles = StyleSheet.create({
  imageWrapper: {
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: 300, // 👈 give a height to make it visible
  },
});
