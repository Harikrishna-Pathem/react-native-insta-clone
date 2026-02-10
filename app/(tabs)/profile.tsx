import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  CollapsibleTabView,
  Tabs,
} from "react-native-collapsible-tab-view";
import pic from "@/assets/images/dummy-profile.jpg";
import HighLights from "../components/ProfileComponents/HighLights";

const HEADER_HEIGHT = 260; // adjust as needed

export default function ProfileScreen() {
  const renderHeader = () => (
    <View style={styles.header}>
      {/* Profile picture and stats */}
      <View style={styles.topRow}>
        <Image style={styles.profilePic} source={pic} />
        <View style={{ flex: 1, marginLeft: 15 }}>
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

      <Text style={styles.bio}>Oka manchi bio</Text>

      <View style={styles.buttonsRow}>
        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Edit Profile</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Share Profile</Text></TouchableOpacity>
        <TouchableOpacity style={styles.smallButton}>
          <Ionicons name="person-add-outline" size={20} color={"white"} />
        </TouchableOpacity>
      </View>

      <HighLights />
    </View>
  );

  return (
    <CollapsibleTabView
      renderHeader={renderHeader}
      headerHeight={HEADER_HEIGHT}
      containerStyle={{ backgroundColor: "#030303" }}
    >
      <Tabs.FlatList
        name="Posts"
        data={[1, 2, 3, 4, 5, 6]}
        keyExtractor={(i) => i.toString()}
        renderItem={({ item }) => (
          <View style={{ height: 300, marginBottom: 10, backgroundColor: "#222" }}>
            <Text style={{ color: "white", padding: 10 }}>Post #{item}</Text>
          </View>
        )}
      />

      <Tabs.ScrollView name="Saved" style={{ flex: 1 }}>
        <Text style={{ color: "white", padding: 20 }}>Saved Content</Text>
      </Tabs.ScrollView>

      <Tabs.ScrollView name="Tagged" style={{ flex: 1 }}>
        <Text style={{ color: "white", padding: 20 }}>Tagged Content</Text>
      </Tabs.ScrollView>
    </CollapsibleTabView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#030303",
    padding: 15,
  },
  topRow: { flexDirection: "row", alignItems: "center" },
  profilePic: { width: 80, height: 80, borderRadius: 50 },
  name: { color: "white", fontSize: 16, marginBottom: 10 },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 200,
    marginTop: 10,
  },
  statValue: { color: "white", fontWeight: "600", fontSize: 17 },
  statLabel: { color: "white", fontWeight: "400" },
  bio: { color: "white", marginTop: 10 },
  buttonsRow: { flexDirection: "row", marginTop: 10 },
  button: {
    backgroundColor: "#282828ff",
    borderRadius: 6,
    marginRight: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  buttonText: { color: "white", textAlign: "center", fontWeight: "600" },
  smallButton: {
    backgroundColor: "#282828ff",
    borderRadius: 6,
    paddingVertical: 5,
    paddingHorizontal: 7,
  },
});
