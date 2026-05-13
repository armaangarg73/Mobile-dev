import { router } from "expo-router";
import React, { useState } from "react";

import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  useColorScheme,
  useWindowDimensions,
  View,
} from "react-native";

import NoteCard from "./NoteCard";

import { useNotes } from "../context/NotesContext";

export default function Index() {
  const scheme = useColorScheme();

  const isDark = scheme === "dark";

  const { width } = useWindowDimensions();

  const { notes, deleteNote } = useNotes();

  const [search, setSearch] = useState("");

  const [enabled, setEnabled] = useState(isDark);

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(search.toLowerCase()),
  );

  const backgroundColor = enabled ? "#1B1A17" : "#F8F5F1";

  const textColor = enabled ? "#fff" : "#111";

  const inputBackground = enabled ? "#2A2825" : "#FFFDF9";

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor,
        },
      ]}
    >
      <View style={styles.header}>
        <View>
          <Text
            style={[
              styles.greeting,
              {
                color: enabled ? "#B7ADA3" : "#8B8178",
              },
            ]}
          >
            Take it slow today ☕
          </Text>

          <Text
            style={[
              styles.heading,
              {
                color: textColor,
              },
            ]}
          >
            My Notes
          </Text>

          <Text
            style={[
              styles.noteCount,
              {
                color: enabled ? "#9C9288" : "#8B8178",
              },
            ]}
          >
            {filteredNotes.length} Notes
          </Text>
        </View>

        <Switch value={enabled} onValueChange={setEnabled} />
      </View>

      <TextInput
        placeholder="Search little thoughts..."
        placeholderTextColor={enabled ? "#888" : "#999"}
        value={search}
        onChangeText={setSearch}
        style={[
          styles.searchInput,
          {
            backgroundColor: inputBackground,
            color: textColor,
          },
        ]}
      />

      <FlatList
        data={filteredNotes}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 120,
        }}
        renderItem={({ item }) => (
          <View
            style={{
              width: width > 700 ? "48%" : "100%",
              alignSelf: "center",
            }}
          >
            <NoteCard note={item} onDelete={() => deleteNote(item.id)} />
          </View>
        )}
      />

      <Pressable
        onPress={() => router.push("/editor")}
        style={({ pressed }) => [
          styles.fab,
          {
            opacity: pressed ? 0.9 : 1,
            transform: [
              {
                scale: pressed ? 0.95 : 1,
              },
            ],
          },
        ]}
      >
        <Text style={styles.fabText}>+</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 28,
  },

  greeting: {
    fontSize: 14,
    marginBottom: 4,
    fontWeight: "500",
  },

  heading: {
    fontSize: 36,
    fontWeight: "700",
    letterSpacing: 0.3,
  },

  noteCount: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "500",
  },

  searchInput: {
    height: 58,
    borderRadius: 22,
    paddingHorizontal: 20,
    fontSize: 16,
    marginBottom: 24,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },

    shadowOpacity: 0.04,
    shadowRadius: 8,

    elevation: 2,
  },

  fab: {
    position: "absolute",
    bottom: 30,
    right: 24,

    width: 70,
    height: 70,
    borderRadius: 35,

    backgroundColor: "#D4A373",

    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },

    shadowOpacity: 0.15,
    shadowRadius: 12,

    elevation: 6,
  },

  fabText: {
    color: "#fff",
    fontSize: 36,
    fontWeight: "300",
  },
});
