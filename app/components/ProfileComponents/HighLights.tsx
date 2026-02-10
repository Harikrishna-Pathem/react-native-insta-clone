import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";

export default function HighLights() {
  const images = [
    require("@/assets/images/feed1.jpg"),
    require("@/assets/images/feed2.jpg"),
    require("@/assets/images/feed3.jpg"),
    require("@/assets/images/feed4.jpg"),
    require("@/assets/images/feed5.jpg"),
  ];
  return (
    <>
      <ScrollView horizontal>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 20,
            padding: 15,
          }}
        >
          <Pressable>
            <View style={{}}>
              <View
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 55,
                  justifyContent: "center",
                  alignItems: "center",
                  borderColor: "white",
                  borderStyle: "solid",
                  borderWidth: 0.5
                }}
              >
                <Ionicons name="add-outline" size={30} color={"white"} />
              </View>
              <Text
                style={{ color: "white", marginTop: 5, textAlign: "center" }}
              >
                New
              </Text>
            </View>
          </Pressable>
          {images.map((img, index) => (
            <Pressable key={index}>
              <View style={{}}>
                <View
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: 55,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#3a3a3aff",
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "#171717ff",
                      borderRadius: 50,
                      padding: 3,
                    }}
                  >
                    <Image
                      source={img}
                      style={{ width: 70, height: 70, borderRadius: 50 }}
                    />
                  </View>
                </View>
                <Text
                  style={{ color: "white", marginTop: 5, textAlign: "center" }}
                >
                  HighLights{index}
                </Text>
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </>
  );
}
