import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import pic from "@/assets/images/dummy-profile.jpg";

import feed1 from "@/assets/images/feed1.jpg";
import feed2 from "@/assets/images/feed2.jpg";
import feed3 from "@/assets/images/feed3.jpg";
import feed4 from "@/assets/images/feed4.jpg";
import feed5 from "@/assets/images/feed5.jpg";

export default function Notifications() {
  const notifications = [
    {
      id: "1",
      user: "Sai tharun",
      action: "liked your post",
      time: "2h",
      postImage: feed1,
    },
    {
      id: "2",
      user: "Hari",
      action: "commented on your post",
      time: "5h",
      postImage: feed2,
    },
    {
      id: "3",
      user: "Krishna",
      action: "started following you",
      time: "1d",
      postImage: null,
    },
    {
      id: "4",
      user: "Tharun",
      action: "liked your post",
      time: "2d",
      postImage: feed3,
    },
    {
      id: "5",
      user: "Bunty",
      action: "saved your post",
      time: "4d",
      postImage: feed4,
    },
    {
      id: "6",
      user: "User123",
      action: "liked your post",
      time: "1w",
      postImage: feed5,
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.notificationRow}>
            {/* User avatar */}
            <Image source={pic} style={styles.avatar} />

            {/* Notification text */}
            <View style={styles.textContainer}>
              <Text style={styles.notificationText}>
                <Text style={styles.username}>{item.user}</Text> {item.action}
              </Text>
              <Text style={styles.time}>{item.time}</Text>
            </View>

            {/* Post preview (if exists) */}
            {item.postImage && (
              <Image source={item.postImage} style={styles.postPreview} />
            )}
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#030303",
  },

  notificationRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderBottomWidth: 0.5,
    borderColor: "#222",
  },

  avatar: {
    width: 44,
    height: 44,
    borderRadius: 25,
    marginRight: 12,
  },

  textContainer: {
    flex: 1,
  },

  notificationText: {
    color: "white",
    fontSize: 14,
  },

  username: {
    fontWeight: "600",
    color: "white",
  },

  time: {
    color: "#9d9d9d",
    fontSize: 12,
    marginTop: 2,
  },

  postPreview: {
    width: 44,
    height: 44,
    borderRadius: 4,
  },
});
