import React, { createContext, useContext, useState } from "react";

type Note = {
  id: string;
  title: string;
  content: string;
  date: string;
};

type NotesContextType = {
  notes: Note[];

  addNote: (title: string, content: string) => void;

  deleteNote: (id: string) => void;
};

const NotesContext = createContext<NotesContextType | null>(null);

const initialNotes = [
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
    title: " Random Quote",
    content: "Your future self is watching you scroll right now.",
    date: "May 7",
  },

  {
    id: "7",
    title: " Movies to watch",
    content: "Spiderman, Because i like it!",
    date: "May 9",
  },
];

export function NotesProvider({ children }: { children: React.ReactNode }) {
  const [notes, setNotes] = useState(initialNotes);

  const addNote = (title: string, content: string) => {
    const newNote = {
      id: Date.now().toString(),
      title,
      content,
      date: "Today",
    };

    setNotes([newNote, ...notes]);
  };

  const deleteNote = (id: string) => {
    const updatedNotes = notes.filter((note) => note.id !== id);

    setNotes(updatedNotes);
  };

  return (
    <NotesContext.Provider
      value={{
        notes,
        addNote,
        deleteNote,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
}

export function useNotes() {
  const context = useContext(NotesContext);

  if (!context) {
    throw new Error("useNotes must be used inside NotesProvider");
  }

  return context;
}
