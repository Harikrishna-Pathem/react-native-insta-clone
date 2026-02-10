import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "../../styles/dashboard.styles";

export default function notifications() {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => alert("Hello darling")}>
        <Text style={styles.title}>Check Alerts</Text>
      </TouchableOpacity>
    </View>
  );
}
