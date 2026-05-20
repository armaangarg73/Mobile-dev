import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function UnsafeScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#1c1c1e" }}>
      <Text style={{ color: "#fff", fontSize: 18, padding: 16 }}>
        Header (bleeds under notch!)
      </Text>

      <Text style={{ color: "#aaa", padding: 16 }}>
        This content might be hidden behind the status bar in dark mode
      </Text>
    </View>
  );
}

function SafeScreen() {
  return (
    <SafeAreaView
      edges={["bottom", "top"]}
      style={{ flex: 1, backgroundColor: "#1c1c1e" }}
    >
      <Text style={{ color: "#fff", fontSize: 18, padding: 16 }}>
        Header (safely below notch!)
      </Text>

      <Text style={{ color: "#aaa", padding: 16 }}>
        This content respects the safe area on all devices
      </Text>
    </SafeAreaView>
  );
}

const index = () => {
  return (
    <>
      <SafeScreen />
    </>
  );
};

export default index;

const styles = StyleSheet.create({});

import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = () => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{ flex: 1, paddingTop: insets.top, paddingBottom: insets.bottom }}
    >
      <StatusBar barStyle={"dark-content"}/>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

import React from "react";
import {  StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <StatusBar style="dark"/>
      <View style={styles.card}>
        <Text style={styles.title}>HomeScreen</Text>
        <Text style={styles.subtitle}>Hello</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "grey",
    borderRadius: 16,
    padding: 20,
    margin: 16,
    elevation: 4,
    // for ios
    // shadowColor: "#000",
    // shadowOpacity: 0.1,
    // shadowRadius: 8,
    // -------------------------------------------
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  subtitle: {
    fontSize: 14,
    marginTop: 4,
    color: "#222020",
  },
});

import React from "react";
import { StyleSheet, Text, View } from "react-native";

const HomeScreen = () => {
  const isActive = true;

  const buttonStyle = StyleSheet.compose(
    styles.button,
    isActive ? styles.activeButton: null
  )
  return (
    <View style={styles.container}>
      {/* @ts-ignore */}
      <View style={buttonStyle}>
        <Text style={styles.buttonText}>Composed Style</Text>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    backgroundColor: "#ccc",
  },
  activeButton: {
    backgroundColor: "#6C63FF", // overrid to purple when active
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Text style={flat}>Flattened style</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styleA = StyleSheet.create({ text: { color: "red", fontSize: 16 } });
const styleB = StyleSheet.create({
  text: { fontSize: 24, fontWeight: "bold" },
});
const flat = StyleSheet.flatten([styleA.text , styleB.text])

import * as ScreenOrientation from "expo-screen-orientation";
import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  const { height, width } = useWindowDimensions();
  const isTablet = width >= 768;
  const isLandscape = width > height;

  const lockLandscape = async () => {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE,
    );
  };

  const lockPortrait = async () => {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.PORTRAIT,
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: width * 0.06 }}>Responsive Text📱</Text>

      <View
        style={{
          flexDirection: isTablet ? "row" : "column",
        }}
      >
        <View
          style={{
            width: isTablet ? width / 2 : width - 32,
            backgroundColor: "#6c63ff",
            padding: 20,
            borderRadius: 12,
            marginBottom: isTablet ? 0 : 12,
          }}
        >
          <Text style={{ color: "white" }}>Card 1</Text>
        </View>

        <View
          style={{
            width: isTablet ? width / 2 : width - 32,
            backgroundColor: "#ff6584",
            padding: 20,
            borderRadius: 12,
          }}
        >
          <Text style={{ color: "white" }}>Card 2</Text>
        </View>
      </View>
      <Text style={{ color: "#888", marginTop: 16 }}>
        Screen: {Math.round(width)} x {Math.round(height)}
        {isLandscape ? "(Landscape)" : "(Portrait)"}
      </Text>

      <View style={{ flexDirection: "row", gap: 12, marginTop: 24 }}>
        <Pressable
          onPress={lockLandscape}
          style={{
            flex: 1,
            backgroundColor: "#6c63ff",
            padding: 12,
            borderRadius: 8,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white" }}>Force Landscape 🔄️</Text>
        </Pressable>

        <Pressable
          onPress={lockPortrait}
          style={{
            flex: 1,
            backgroundColor: "#ff6584",
            padding: 12,
            borderRadius: 8,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white" }}>Force Portrait 🔄️</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});



