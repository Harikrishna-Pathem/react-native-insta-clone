import React from "react";
import { Text, TouchableOpacity, Alert } from "react-native";
import * as SecureStore from "expo-secure-store";
import { useRouter } from "expo-router";

export default function SignOutButton() {
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await SecureStore.deleteItemAsync("accessToken");
      await SecureStore.deleteItemAsync("refreshToken");

      // Optionally confirm
      Alert.alert("Signed Out", "You have been signed out.");

      router.replace("/sign-in");
    } catch (err) {
      console.error("Sign out error:", err);
      Alert.alert("Error", "Failed to sign out.");
    }
  };

  return (
    <TouchableOpacity onPress={handleSignOut}>
      <Text style={{ color: "red", fontSize: 16 }}>Sign Out</Text>
    </TouchableOpacity>
  );
};
