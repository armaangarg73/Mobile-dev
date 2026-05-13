import { router } from "expo-router";
import React, { useState } from "react";
import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  useWindowDimensions,
  View,
} from "react-native";
import { useNotes } from "../context/NotesContext";

export default function EditorScreen() {
  const scheme = useColorScheme();

  const isDark = scheme === "dark";

  const { width } = useWindowDimensions();

  const [title, setTitle] = useState("");

  const [content, setContent] = useState("");

  const { addNote } = useNotes();

  const backgroundColor = isDark ? "#0D0D0D" : "#F4F4F4";

  const textColor = isDark ? "#fff" : "#111";

  const inputBackground = isDark ? "#1C1C1E" : "#fff";

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor,
        },
      ]}
    >
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <ImageBackground
            source={{
              uri: "https://images.unsplash.com/photo-1517842645767-c639042777db",
            }}
            style={styles.headerImage}
            imageStyle={{
              borderRadius: 28,
            }}
          >
            <View style={styles.overlay}>
              <Text style={styles.headerText}>Write Your Thoughts</Text>
            </View>
          </ImageBackground>

          <TextInput
            placeholder="Note Title"
            placeholderTextColor={isDark ? "#888" : "#999"}
            value={title}
            onChangeText={setTitle}
            style={[
              styles.titleInput,
              {
                backgroundColor: inputBackground,
                color: textColor,
                width: width > 700 ? "70%" : "100%",
              },
            ]}
          />

          <TextInput
            placeholder="Start writing your note..."
            placeholderTextColor={isDark ? "#888" : "#999"}
            multiline
            textAlignVertical="top"
            value={content}
            onChangeText={setContent}
            style={[
              styles.contentInput,
              {
                backgroundColor: inputBackground,
                color: textColor,
                width: width > 700 ? "70%" : "100%",
              },
            ]}
          />

          <View style={styles.buttonContainer}>
            <Pressable
              onPress={() => router.back()}
              style={({ pressed }) => [
                styles.backButton,
                {
                  opacity: pressed ? 0.8 : 1,
                },
              ]}
            >
              <Text style={styles.buttonText}>Back</Text>
            </Pressable>

            <Pressable
              onPress={() => {
                if (!title.trim() || !content.trim()) {
                  return;
                }

                addNote(title, content);

                router.back();
              }}
              style={({ pressed }) => [
                styles.saveButton,
                {
                  opacity: pressed ? 0.8 : 1,
                },
              ]}
            >
              <Text style={styles.buttonText}>Save</Text>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  headerImage: {
    height: 220,
    justifyContent: "flex-end",
    marginBottom: 28,
  },

  overlay: {
    backgroundColor: "rgba(0,0,0,0.35)",
    padding: 24,
    borderRadius: 28,
  },

  headerText: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "800",
  },

  titleInput: {
    alignSelf: "center",
    height: 60,
    borderRadius: 20,
    paddingHorizontal: 18,
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 20,
  },

  contentInput: {
    alignSelf: "center",
    minHeight: 260,
    borderRadius: 24,
    padding: 20,
    fontSize: 16,
    lineHeight: 28,
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 28,
    marginBottom: 40,
  },

  backButton: {
    flex: 1,
    backgroundColor: "#555",
    paddingVertical: 18,
    borderRadius: 18,
    alignItems: "center",
    marginRight: 10,
  },

  saveButton: {
    flex: 1,
    backgroundColor: "#4F46E5",
    paddingVertical: 18,
    borderRadius: 18,
    alignItems: "center",
    marginLeft: 10,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});
