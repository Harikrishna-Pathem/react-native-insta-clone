import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import pic from "@/assets/images/dummy-profile.jpg";
import HighLights from "../components/ProfileComponents/HighLights";
import ProfilePosts from "../components/ProfileComponents/ProfilePosts";

export default function ProfileScreen() {
  const [activeTab, setActiveTab] = useState<"Posts" | "Saved" | "Tagged">(
    "Posts",
  );

  const renderHeader = () => (
    <View style={styles.header}>
      {/* Top row */}
      <View style={styles.topRow}>
        <Image source={pic} style={styles.profilePic} />
        <View style={styles.statsContainer}>
          <Text style={styles.name}>Harikrishna Pathem</Text>

          <View style={styles.statsRow}>
            <View>
              <Text style={styles.statValue}>0</Text>
              <Text style={styles.statLabel}>posts</Text>
            </View>
            <View>
              <Text style={styles.statValue}>522</Text>
              <Text style={styles.statLabel}>followers</Text>
            </View>
            <View>
              <Text style={styles.statValue}>428</Text>
              <Text style={styles.statLabel}>following</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Bio */}
      <Text style={styles.bio}>Oka manchi bio</Text>

      {/* Buttons */}
      <View style={styles.buttonsRow}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Share Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.smallButton}>
          <Ionicons name="person-add-outline" size={20} color="white" />
        </TouchableOpacity>
      </View>

      {/* Highlights */}
      <HighLights />

      {/* Tabs */}
      <View style={styles.tabBar}>
        {["Posts", "Saved", "Tagged"].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tabItem, activeTab === tab && styles.activeTabItem]}
            onPress={() => setActiveTab(tab as any)}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.activeTabText,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );

  const renderContent = () => {
    if (activeTab === "Posts") {
      return <ProfilePosts />;
    }

    if (activeTab === "Saved") {
      return <Text style={styles.placeholderText}>Saved Content</Text>;
    }

    return <Text style={styles.placeholderText}>Tagged Content</Text>;
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {renderHeader()}
      {renderContent()}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#030303",
  },

  /* Header */
  header: {
    padding: 15,
    backgroundColor: "#030303",
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  profilePic: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  statsContainer: {
    flex: 1,
    marginLeft: 15,
  },
  name: {
    color: "white",
    fontSize: 16,
    marginBottom: 8,
    fontWeight: "600",
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 200,
  },
  statValue: {
    color: "white",
    fontWeight: "600",
    fontSize: 17,
    textAlign: "center",
  },
  statLabel: {
    color: "#cfcfcf",
    fontSize: 13,
    textAlign: "center",
  },
  bio: {
    color: "white",
    marginTop: 10,
  },

  /* Buttons */
  buttonsRow: {
    flexDirection: "row",
    marginTop: 12,
    alignItems: "center",
  },
  button: {
    backgroundColor: "#282828",
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginRight: 6,
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
  },
  smallButton: {
    backgroundColor: "#282828",
    borderRadius: 6,
    padding: 6,
  },

  /* Tabs */
  tabBar: {
    flexDirection: "row",
    marginTop: 15,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: "#222",
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
  },
  activeTabItem: {
    borderBottomWidth: 2,
    borderColor: "white",
  },
  tabText: {
    color: "#777",
    fontWeight: "500",
  },
  activeTabText: {
    color: "white",
    fontWeight: "600",
  },

  /* Grid */
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  gridItem: {
    width: "33.33%",
    aspectRatio: 1,
    backgroundColor: "#222",
    borderWidth: 0.5,
    borderColor: "#111",
  },

  placeholderText: {
    color: "white",
    padding: 20,
  },
});
