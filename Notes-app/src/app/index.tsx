import React, { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Switch,
  SafeAreaView,
  useColorScheme,
  useWindowDimensions,
} from "react-native";

import NoteCard from "./NoteCard"


const notes = [
  {
    id: "1",
    title: "React Native Assignment",
    content:
      "Finish Notes App UI using FlatList, Pressable and dark mode support.",
    date: "May 12",
  },

  {
    id: "2",
    title: "Late Night Thoughts",
    content: "Why do we suddenly become productivity experts at 2 AM?",
    date: "May 11",
  },

  {
    id: "3",
    title: "Shopping List",
    content:
      "Milk, bread, coffee, protein bars, instant noodles and self-respect.",
    date: "May 10",
  },

  {
    id: "4",
    title: "Gym Motivation",
    content:
      "Paid for 1 month membership. Went twice. Financial loss achieved.",
    date: "May 9",
  },

  {
    id: "5",
    title: "Startup Idea #27",
    content: "AI that reminds me where I kept my charger 4 minutes ago.",
    date: "May 8",
  },

  {
    id: "6",
    title: "Random Quote",
    content: "Your future self is watching you scroll right now.",
    date: "May 7",
  },

  {
    id: "7",
    title: "Coding Bug",
    content: "Fixed one bug. Accidentally created seventeen more.",
    date: "May 6",
  },

  {
    id: "8",
    title: "Sleep Schedule",
    content: "Today's bedtime goal: before sunrise.",
    date: "May 5",
  },

  {
    id: "9",
    title: "Movie List",
    content:
      "Interstellar, Fight Club, The Batman, Spider-Verse and Inception.",
    date: "May 4",
  },

  {
    id: "10",
    title: "Important Reminder",
    content: "Do not trust your brain after 11 PM.",
    date: "May 3",
  },

  {
    id: "11",
    title: "Future Goals",
    content:
      "Become wealthy, build cool apps and buy parents something amazing.",
    date: "May 2",
  },

  {
    id: "12",
    title: "Daily Reality",
    content:
      "Opened laptop to study. Somehow ended up watching space documentaries.",
    date: "May 1",
  },
];

export default function Index() {
  const scheme = useColorScheme();

  const isDark = scheme === "dark";

  const { width } = useWindowDimensions();

  const [search, setSearch] = useState("");

  const [enabled, setEnabled] = useState(isDark);

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(search.toLowerCase()),
  );

  const backgroundColor = enabled ? "#0D0D0D" : "#F4F4F4";

  const textColor = enabled ? "#fff" : "#111";

  const inputBackground = enabled ? "#1C1C1E" : "#fff";

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
              styles.subHeading,
              {
                color: enabled ? "#aaa" : "#666",
              },
            ]}
          >
            Organize your thoughts beautifully
          </Text>
        </View>

        <Switch value={enabled} onValueChange={setEnabled} />
      </View>

      <TextInput
        placeholder="Search notes..."
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
          paddingBottom: 30,
        }}
        renderItem={({ item }) => (
          <View
            style={{
              width: width > 700 ? "48%" : "100%",
              alignSelf: "center",
            }}
          >
            <NoteCard note={item} />
          </View>
        )}
      />
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
    marginBottom: 24,
  },

  heading: {
    fontSize: 34,
    fontWeight: "800",
  },

  subHeading: {
    fontSize: 15,
    marginTop: 6,
  },

  searchInput: {
    height: 55,
    borderRadius: 18,
    paddingHorizontal: 18,
    fontSize: 16,
    marginBottom: 24,
  },
});
