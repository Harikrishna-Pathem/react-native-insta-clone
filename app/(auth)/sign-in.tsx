import React, { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Image,
  Alert,
  ActivityIndicator,
} from "react-native";
import * as SecureStore from "expo-secure-store";
import { useRouter } from "expo-router";
import axios from "axios";

const API_BASE = "http://localhost:8080/auth"; // replace with your API

export default function Page() {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const sendOtp = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`${API_BASE}/login`, { mobile });
      console.log(response);
      if (response.status === 200) {
        setOtpSent(true);
        Alert.alert("OTP Sent", "Please check your phone.");
      }
    } catch (error) {
      Alert.alert("Error", "Failed to send OTP.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const verifyOtp = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`${API_BASE}/verify-otp`, {
        mobile,
        otp,
      });

      console.log(response);

      const { accessToken, refreshToken } = response.data;

      await SecureStore.setItemAsync("accessToken", accessToken);
      await SecureStore.setItemAsync("refreshToken", refreshToken);

      router.replace("/(tabs)");
    } catch (error) {
      Alert.alert("Error", "Invalid OTP or server error.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={styles.container}
    >
      <View style={styles.innerContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/images/insta-logo.png")}
            style={styles.logoImage}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.title}>
          {otpSent ? "Enter OTP" : "Welcome, Sign In"}
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Mobile Number"
          placeholderTextColor="#999"
          keyboardType="phone-pad"
          value={mobile}
          onChangeText={setMobile}
        />

        {otpSent && (
          <TextInput
            style={styles.input}
            placeholder="Enter OTP"
            placeholderTextColor="#999"
            keyboardType="numeric"
            value={otp}
            onChangeText={setOtp}
          />
        )}

        <TouchableOpacity
          style={[styles.button, loading && { opacity: 0.7 }]}
          onPress={otpSent ? verifyOtp : sendOtp}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator size="small" color="black" />
          ) : (
            <Text style={styles.buttonText}>
              {otpSent ? "Verify OTP" : "Send OTP"}
            </Text>
          )}
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#030303",
    justifyContent: "space-between",
    padding: 24,
  },
  innerContainer: {
    marginTop: 80,
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 60,
  },
  logoImage: {
    width: 100,
    height: 100,
    marginBottom: 12,
  },
  title: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "600",
    marginBottom: 24,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#1e1e1e",
    color: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 16,
    borderColor: "#333",
    borderWidth: 1,
  },
  button: {
    backgroundColor: "#fff",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "500",
  },
});
