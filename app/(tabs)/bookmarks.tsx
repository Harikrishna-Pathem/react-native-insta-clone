import { View, Text } from "react-native";
import React from "react";
import { styles } from "../../styles/dashboard.styles";

export default function bookmarks() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Bookmarks</Text>
    </View>
  );
}
