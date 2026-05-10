import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import { useRouter } from "expo-router";
import React from "react";

export default function Index() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Image source={require("@/assets/images/icon.png")} />
      <Text style={styles.title}>Welcome To The App</Text>
      <Pressable onPress={() => router.push("/signin")}>
        <Text style={styles.buttonText}>Get Started</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#F6F6F6",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    borderColor: "#85CC18",
    borderWidth: 5,
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#85CC18",
  },
});
