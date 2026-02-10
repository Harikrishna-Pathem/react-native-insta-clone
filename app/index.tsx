import React, { useEffect, useState } from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import * as SecureStore from "expo-secure-store";
import { Redirect } from "expo-router";

export default function IndexPage() {
  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = await SecureStore.getItemAsync("accessToken");
        setIsLoggedIn(!!token); // true if token exists
      } catch (err) {
        console.error("Error checking access token:", err);
      } finally {
        setChecking(false);
      }
    };

    checkToken();
  }, []);

  if (checking) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  return isLoggedIn ? <Redirect href="/(tabs)" /> : <Redirect href="/sign-in" />;
}

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#030303",
  },
});
