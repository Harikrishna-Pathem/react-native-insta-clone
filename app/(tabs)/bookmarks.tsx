import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import pic from "@/assets/images/dummy-profile.jpg";
import feed1 from "@/assets/images/feed1.jpg";
import feed2 from "@/assets/images/feed2.jpg";
import feed3 from "@/assets/images/feed3.jpg";
import feed4 from "@/assets/images/feed4.jpg";
import feed5 from "@/assets/images/feed5.jpg";

const { width } = Dimensions.get("window");
const ITEM_SIZE = width / 3;

export default function Bookmarks() {
  const savedFeeds = [
    feed1,
    feed2,
    feed3,
    feed4,
    feed5,
    feed1,
    feed2,
    feed3,
    feed4,
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Saved</Text>
        <Ionicons name="bookmark" size={24} color="white" />
      </View>

      {/* Profile Info */}
      <View style={styles.profileRow}>
        <Image source={pic} style={styles.dp} />
        <View>
          <Text style={styles.username}>Hk Darling</Text>
          <Text style={styles.subText}>All saved posts</Text>
        </View>
      </View>

      {/* Grid */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.grid}>
          {savedFeeds.map((img, index) => (
            <TouchableOpacity key={index} activeOpacity={0.8}>
              <Image source={img} style={styles.gridImage} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#030303",
  },
  header: {
    height: 55,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 0.5,
    borderColor: "#222",
  },
  headerText: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
  },
  profileRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    padding: 15,
  },
  dp: {
    width: 55,
    height: 55,
    borderRadius: 30,
  },
  username: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  subText: {
    color: "#9d9d9d",
    fontSize: 13,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  gridImage: {
    width: ITEM_SIZE,
    height: ITEM_SIZE,
    borderWidth: 0.3,
    borderColor: "#111",
  },
});
