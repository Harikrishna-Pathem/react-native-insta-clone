import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { styles } from "@/styles/create.styles";
import { useRouter } from "expo-router";
import { COLORS } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import * as ImagePicker from "expo-image-picker";

export default function CreateScreen() {
  const router = useRouter();

  const [caption, setCaption] = useState("");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isSharing, setIsSharing] = useState(false);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.9,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  /* -------------------- STEP 1 : PICK IMAGE -------------------- */
  if (!selectedImage) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="close-outline" size={28} color={COLORS.white} />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>New post</Text>
          <View style={{ width: 28 }} />
        </View>

        <TouchableOpacity
          style={styles.emptyImageContainer}
          onPress={pickImage}
        >
          <Ionicons name="images-outline" size={50} color={COLORS.grey} />
          <Text style={styles.emptyImageText}>Select from gallery</Text>
        </TouchableOpacity>
      </View>
    );
  }

  /* -------------------- STEP 2 : CREATE POST -------------------- */
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            setSelectedImage(null);
            setCaption("");
          }}
          disabled={isSharing}
        >
          <Ionicons
            name="arrow-back"
            size={26}
            color={isSharing ? COLORS.grey : COLORS.white}
          />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>New post</Text>

        <TouchableOpacity disabled={isSharing}>
          {isSharing ? (
            <ActivityIndicator size="small" color={COLORS.primary} />
          ) : (
            <Text style={styles.shareText}>Share</Text>
          )}
        </TouchableOpacity>
      </View>

      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {/* IMAGE PREVIEW */}
        <View style={styles.previewWrapper}>
          <Image
            source={selectedImage}
            style={styles.previewImage}
            contentFit="cover"
          />

          <TouchableOpacity
            style={styles.changeImageButton}
            onPress={pickImage}
          >
            <Ionicons name="image-outline" size={18} color={COLORS.white} />
            <Text style={styles.changeImageText}>Change</Text>
          </TouchableOpacity>
        </View>

        {/* CAPTION ROW */}
        <View style={styles.captionRow}>
          <Image
            source={require("@/assets/images/dummy-profile.jpg")}
            style={styles.userAvatar}
          />
          <TextInput
            placeholder="Write a caption..."
            placeholderTextColor={COLORS.grey}
            style={styles.captionInput}
            multiline
            value={caption}
            onChangeText={setCaption}
          />
        </View>

        {/* OPTIONS (Instagram-style) */}
        <View style={styles.optionsContainer}>
          <OptionRow title="Tag people" />
          <OptionRow title="Add location" />
          <OptionRow title="Add music" />
          <OptionRow title="Advanced settings" />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

/* -------------------- OPTION ROW COMPONENT -------------------- */
function OptionRow({ title }: { title: string }) {
  return (
    <TouchableOpacity style={styles.optionRow}>
      <Text style={styles.optionText}>{title}</Text>
      <Ionicons name="chevron-forward" size={18} color="#777" />
    </TouchableOpacity>
  );
}


