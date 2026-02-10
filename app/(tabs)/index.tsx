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
import pic from "@/assets/images/dummy-profile.jpg";
import { LinearGradient } from "expo-linear-gradient";
import feed1 from "@/assets/images/feed1.jpg";
import feed2 from "@/assets/images/feed2.jpg";
import feed3 from "@/assets/images/feed3.jpg";
import feed4 from "@/assets/images/feed4.jpg";
import feed5 from "@/assets/images/feed5.jpg";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

export default function Index() {
  const list = [
    "bunty",
    "Hk Darling",
    "Sai tharun",
    "tharun",
    "user1",
    "user2",
    "user3",
    "user4",
    "user5",
  ];

  const feeds = [
    {
      user: "bunty",
      image: feed1,
      caption: "Enjoying the sunset vibes 🌅",
      time: "2 hours ago",
      likes: 128,
      comments: ["So beautiful!", "Where is this?", "Golden hour! 😍"],
      tags: ["#sunset", "#nature", "#peace"],
    },
    {
      user: "Hk darling",
      image: feed2,
      caption: "Weekend mode ON! 😎",
      time: "4 hours ago",
      likes: 215,
      comments: ["🔥🔥", "Stylish bro!", "Weekend goals!"],
      tags: ["#weekend", "#relax", "#chill"],
    },
    {
      user: "Hari",
      image: feed3,
      caption: "Nature always wears the colors of the spirit 🌿",
      time: "1 day ago",
      likes: 340,
      comments: ["True words 🙌", "Love the greenery!", "Wow!"],
      tags: ["#greenlife", "#naturelovers", "#positivevibes"],
    },
    {
      user: "Sai tharun",
      image: feed4,
      caption: "New adventures loading... 🚗💨",
      time: "3 days ago",
      likes: 89,
      comments: ["Where to?", "Take me with you 😄", "Travel safe!"],
      tags: ["#travel", "#roadtrip", "#explore"],
    },
    {
      user: "Krishna",
      image: feed5,
      caption: "Coffee and calm mornings ☕✨",
      time: "5 days ago",
      likes: 172,
      comments: ["I need this now!", "Aesthetic vibes ✨", "Love it!"],
      tags: ["#morningroutine", "#coffee", "#calm"],
    },
    {
      user: "Tharun",
      image: feed1,
      caption: "Back to hustle! 💻🔥",
      time: "1 week ago",
      likes: 201,
      comments: ["Keep grinding!", "Let's gooo!", "All the best!"],
      tags: ["#workmode", "#motivation", "#productivity"],
    },
  ];

  return (
    <>
      <View style={styles.feeds}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.profiles}>
                <View style={styles.pics}>
                  {/* <LinearGradient
                    colors={[
                      "#feda75",
                      "#fa7e1e",
                      "#d62976",
                      "#962fbf",
                      "#4f5bd5",
                    ]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.gradientBorder}
                  > */}
                  <View style={styles.innerCircle}>
                    <Image source={pic} style={styles.pic} />
                  </View>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#006efeff",
                      position: "absolute",
                      borderRadius: 50,
                      top: 50,
                      right: 0,
                      borderWidth: 3,
                      borderStyle: "solid",
                      borderColor: "#030303"
                    }}
                  >
                    <Ionicons name="add-outline" size={20} color={"white"} />
                  </TouchableOpacity>
                  {/* </LinearGradient> */}
                  <Text style={styles.text}>Your Story</Text>
                </View>
                {list.map((n) => (
                  <View key={n} style={styles.pics}>
                    <LinearGradient
                      colors={[
                        "#feda75",
                        "#fa7e1e",
                        "#d62976",
                        "#962fbf",
                        "#4f5bd5",
                      ]}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 1 }}
                      style={styles.gradientBorder}
                    >
                      <View style={styles.innerCircle}>
                        <Image source={pic} style={styles.pic} />
                      </View>
                    </LinearGradient>
                    <Text style={styles.text}>{n}</Text>
                  </View>
                ))}
              </View>
            </ScrollView>
          </View>
          {feeds.map((feed, index) => (
            <View style={styles.feed} key={index}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingEnd: 10,
                }}
              >
                <View style={styles.feedHeader}>
                  <Image style={styles.dp} source={pic} />
                  <Text style={styles.text2}>{feed.user}</Text>
                </View>
                <View style={{ paddingTop: 10 }}>
                  <Ionicons
                    name="ellipsis-vertical"
                    size={20}
                    color={"white"}
                  />
                </View>
              </View>
              <View style={styles.imageContainer}>
                <Image source={feed.image} style={styles.image} />
              </View>
              <View style={styles.feedFooter}>
                <View style={styles.heartIcons}>
                  <Ionicons name="heart-outline" size={32} color={"white"} />
                  <Ionicons
                    name="chatbubble-outline"
                    size={30}
                    color={"white"}
                  />
                  <Ionicons
                    name="paper-plane-outline"
                    size={30}
                    color={"white"}
                  />
                </View>
                <View style={styles.saveIcon}>
                  <Ionicons name="bookmark-outline" size={30} color={"white"} />
                </View>
              </View>
              <Text
                style={{
                  color: "#b2b2b2ff",
                  padding: 5,
                  fontSize: 16,
                  paddingLeft: 15,
                }}
              >
                Liked by{" "}
                <Text style={{ fontWeight: 600, color: "white" }}>
                  Hari and {feed.likes} others
                </Text>
              </Text>
              <Text
                style={{ fontWeight: 600, color: "white", paddingLeft: 15 }}
              >
                {feed.user}{" "}
                <Text style={{ fontWeight: 500, color: "#c6c6c6ff" }}>
                  {feed.caption}
                </Text>
              </Text>
              <Text
                style={{ color: "#4180ffff", padding: 15, paddingBottom: 5 }}
              >
                {feed.tags.map((tag, index) => (
                  <Text key={index}>{tag} </Text>
                ))}
              </Text>
              <Text
                style={{ color: "#9d9d9dff", paddingLeft: 15, fontSize: 12 }}
              >
                {feed.time}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#030303",
    height: 130,
    padding: 10,
  },
  profiles: {
    flexDirection: "row",
    gap: 5,
    height: 200,
  },
  pics: {
    alignItems: "center",
    marginRight: 15,
    marginBottom: 120,
  },
  gradientBorder: {
    width: 80,
    height: 80,
    borderRadius: 55,
    justifyContent: "center",
    alignItems: "center",
  },
  innerCircle: {
    backgroundColor: "#171717ff",
    borderRadius: 50,
    padding: 3,
  },
  pic: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  dp: {
    width: 45,
    height: 45,
    borderRadius: 25,
  },
  text: {
    color: "white",
    paddingTop: 5,
    textAlign: "center",
    fontSize: 12,
  },
  feeds: {
    flex: 1,
    backgroundColor: "#030303",
  },
  feed: {
    width: "100%",
    marginBottom: 20,
  },
  feedHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: 10,
  },
  text2: {
    color: "white",
    fontSize: 18,
  },
  imageContainer: {
    width: width,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: width,
    height: width * 1.2, // Adjust based on your image ratio
    resizeMode: "cover",
  },
  feedFooter: {
    padding: 10,
    width: width,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  heartIcons: {
    width: "auto",
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  saveIcon: {},
});
