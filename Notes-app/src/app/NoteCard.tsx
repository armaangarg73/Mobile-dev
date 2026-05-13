import React from "react";
import { router } from "expo-router";

import { Pressable, StyleSheet, Text, useColorScheme, View } from "react-native";

type NoteProps = {
  note: {
    title: string;
    content: string;
    date: string;
  };
  onDelete: () => void;
};

export default function NoteCard({ note, onDelete }: NoteProps) {
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
          opacity: pressed ? 0.92 : 1,
          transform: [{ scale: pressed ? 0.98 : 1 }],
        },
      ]}
    >
      <View style={styles.accent} />
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
      <View style={styles.footer}>
        <Text
          style={[
            styles.date,
            {
              color: isDark ? "#9A9085" : "#8B8178",
            },
          ]}
        >
          {note.date}
        </Text>

        <Pressable
          onPress={onDelete}
          style={({ pressed }) => [
            styles.deleteButton,
            {
              opacity: pressed ? 0.85 : 1,
            },
          ]}
        >
          <Text style={styles.deleteText}>Delete</Text>
        </Pressable>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 22,
    borderRadius: 30,
    marginBottom: 20,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },

    shadowOpacity: 0.04,
    shadowRadius: 10,

    elevation: 3,
  },

  darkCard: {
    backgroundColor: "#2A2825",
  },

  lightCard: {
    backgroundColor: "#FFFDF9",
  },

  accent: {
    width: 52,
    height: 5,
    borderRadius: 10,
    backgroundColor: "#D4A373",
    marginBottom: 16,
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 12,
    letterSpacing: 0.3,
  },

  content: {
    fontSize: 15,
    lineHeight: 26,
  },

  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 18,
  },

  date: {
    fontSize: 13,
    fontWeight: "500",
  },

  deleteButton: {
    backgroundColor: "#D97B66",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 14,
  },

  deleteText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "700",
  },
});
