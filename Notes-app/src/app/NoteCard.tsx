import React from "react";
import { router } from "expo-router";

import { Pressable, StyleSheet, Text, useColorScheme } from "react-native";

type NoteProps = {
  note: {
    title: string;
    content: string;
    date: string;
  };
};

export default function NoteCard({ note }: NoteProps) {
  const scheme = useColorScheme();

  const isDark = scheme === "dark";
  const cardStyle = StyleSheet.compose(
    styles.card,
    isDark ? styles.darkCard : styles.lightCard,
  );

  return (
    <Pressable
      onPress={() => router.push("/editor")}
      style={({ pressed }) => [
        cardStyle,
        {
          opacity: pressed ? 0.9 : 1,
          transform: [{ scale: pressed ? 0.98 : 1 }],
        },
      ]}
    >
      <Text
        style={[
          styles.title,
          {
            color: isDark ? "#fff" : "#111",
          },
        ]}
      >
        {note.title}
      </Text>
      <Text
        numberOfLines={2}
        style={[
          styles.content,
          {
            color: isDark ? "#b0b0b0" : "#666",
          },
        ]}
      >
        {note.content}
      </Text>
      <Text
        style={[
          styles.date,
          {
            color: isDark ? "#888" : "#999",
          },
        ]}
      >
        {note.date}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 18,
    borderRadius: 22,
    marginBottom: 18,
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
  },

  darkCard: {
    backgroundColor: "#1A1A1D",
  },

  lightCard: {
    backgroundColor: "#fff",
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 10,
  },

  content: {
    fontSize: 14,
    lineHeight: 22,
  },

  date: {
    marginTop: 14,
    fontSize: 12,
    fontWeight: "500",
  },
});
