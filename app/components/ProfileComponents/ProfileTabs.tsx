import React, { useState } from "react";
import {
  View,
  Dimensions,
  StyleSheet,
  Text,
  Pressable,
} from "react-native";
import { TabView } from "react-native-tab-view";

// Custom Icons
import GridIcon from "@/app/components/Icons/GridIcon";
import SavedIcon from "@/app/components/Icons/SavedIcon";
import TaggedIcon from "@/app/components/Icons/TaggedIcon";
import ProfilePosts from "./ProfilePosts";

// Tab Content Screens


const SavedRoute = () => (
  <View style={styles.scene}>
    <Text style={styles.text}>Saved Content</Text>
  </View>
);

const TaggedRoute = () => (
  <View style={styles.scene}>
    <Text style={styles.text}>Tagged Content</Text>
  </View>
);

export default function ProfileTabs() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "posts" },
    { key: "saved" },
    { key: "tagged" },
  ]);

  const renderScene = ({ route }: any) => {
    switch (route.key) {
      case "posts":
        return <ProfilePosts />;
      case "saved":
        return <SavedRoute />;
      case "tagged":
        return <TaggedRoute />;
      default:
        return null;
    }
  };

  const CustomTabBar = ({ navigationState, jumpTo }: any) => {
    return (
      <View style={styles.tabBarContainer}>
        {navigationState.routes.map((route: any, i: number) => {
          const isFocused = navigationState.index === i;
          const color = isFocused ? "white" : "gray";

          const icon = (() => {
            switch (route.key) {
              case "posts":
                return <GridIcon color={color} size={24} />;
              case "saved":
                return <SavedIcon color={color} size={24} />;
              case "tagged":
                return <TaggedIcon color={color} size={24} />;
              default:
                return null;
            }
          })();

          return (
            <Pressable
              key={route.key}
              onPress={() => jumpTo(route.key)}
              style={styles.tabItem}
            >
              {icon}
              {isFocused && <View style={styles.indicator} />}
            </Pressable>
          );
        })}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: Dimensions.get("window").width }}
        renderTabBar={(props) => <CustomTabBar {...props} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
   minHeight: 500
  },
  scene: {
    
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#030303",
  },
  text: {
    color: "white",
    fontSize: 16,
  },
  tabBarContainer: {
    flexDirection: "row",
    backgroundColor: "#030303",
    justifyContent: "space-around",
    paddingVertical: 8,
  },
  tabItem: {
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  indicator: {
  marginTop: 4,
  height: 2,
  width: 30,
  backgroundColor: "gray",
  borderRadius: 1,
},
});
