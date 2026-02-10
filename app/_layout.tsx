import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ClerkLoaded, ClerkProvider } from "@clerk/clerk-expo";

import { tokenCache } from '@clerk/clerk-expo/token-cache'

export default function RootLayout() {
  // const key = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

  // if (!key) {
  //   throw new Error("Missing token");
  // }

  return (
   
        <SafeAreaProvider>
          <SafeAreaView style={{ flex: 1, backgroundColor: "#030303" }}>
            <Stack screenOptions={{ headerShown: false }} />
          </SafeAreaView>
        </SafeAreaProvider>
  );
}
