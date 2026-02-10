// utils/tokenService.ts
import axios from "axios";
import * as SecureStore from "expo-secure-store";

const API_BASE = "https://kernn.azurewebsites.net/auth";

export async function refreshTokenIfNeeded() {
  const refreshToken = await SecureStore.getItemAsync("refreshToken");
  if (!refreshToken) return;

  try {
    const res = await axios.post(`${API_BASE}/refresh`, {
      refreshToken,
    });

    await SecureStore.setItemAsync("accessToken", res.data.accessToken);
    console.log("Access token refreshed.");
  } catch (e) {
    console.error("Failed to refresh token:", e);
  }
}
