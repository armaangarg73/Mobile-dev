import { useState } from "react";
import { Image, Pressable, Text, TextInput, View } from "react-native";

export default function HomeScreen() {
  const [name, setName] = useState("");
  return (
    <View>
      <Text numberOfLines={3}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id provident
        maiores incidunt quas labore dolor sint ipsam quisquam impedit placeat
        numquam vel tempora, repellendus nostrum iure nisi, fugiat excepturi
        veritatis. Corporis dolores minus repudiandae, molestiae a consequuntur
        in! Maiores temporibus veritatis vero obcaecati? Delectus eos id eum
        expedita, iusto recusandae!
      </Text>

      {/* Remote image from internet */}

      <Image
        source={{
          uri: "https://chaicode.com/assets/hitesh-piyush-dark-fpMoT6Mp.webp",
        }}
        width={200}
        height={200}
      />

      {/* Local image */}

      <Image
        source={require("@/assets/images/icon.png")}
        style={{
          width: 100,
          height: 100,
        }}
        blurRadius={10}
      />

      <TextInput
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
        placeholderTextColor={"#302c2c"}
        style={{
          borderWidth: 1,
          borderColor: "#aaa",
          marginTop: 10,
          fontSize: 24,
        }}
      />

      <Pressable
        onLongPress={() => alert("You have long pressed")}

        // You have onPressIn and onPressOut too

        onPress={() => alert("Button pressed")}
        style={({ pressed }) => ({
          backgroundColor: pressed ? "#4a42d4" : "#6c63ff",
        })}
        hitSlop={{
          top: 10 ,
          bottom : 10,
          left : 20,
          right : 20,
        }}
      >
        {({ pressed }) =>
          pressed ? <Text>Processing...</Text> : <Text>press me</Text>
        }
      </Pressable>
    </View>
  );
}

// android --> android.view.ViewGroup
// ios --> UIView

<!-- Scroll View -->
import React, { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  View,
} from "react-native";

const ScrollViewExample = () => {
  const items = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`);
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#aaa",
      }}
      contentContainerStyle={{
        padding: 16,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {items.map((item) => (
        <View
          key={item}
          style={{
            backgroundColor: "white",
            padding: 16,
            borderRadius: 10,
            marginBottom: 10,
            shadowColor: "#000",
            shadowOpacity: 0.05,
            shadowRadius: 4,
            elevation: 2,
          }}
        >
          <Text style={{ fontSize: 16 }}>{item}</Text>
        </View>
        // <Text key={item}>{item}</Text>
      ))}
      <Button
        title="Hello I am a button"
        color={"green"}
        onPress={() => alert("Hellooo")}
      />
      <Switch
        value={isDarkMode}
        onValueChange={setIsDarkMode}
        trackColor={{ false: "#ddd", true: "#6c63ff" }}
        thumbColor={"yellow"}
      />
    </ScrollView>
  );
};

export default ScrollViewExample;

const styles = StyleSheet.create({});

<!-- flat list -->
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const USERS = [
  { id: "1", name: "Alice Johnson", role: "Designer" },
  { id: "2", name: "Bob Smith", role: "Developer" },
  { id: "3", name: "Carol White", role: "Manager" },
  { id: "4", name: "David Brown", role: "Developer" },
  { id: "5", name: "Eve Davis", role: "Designer" },
];

const HomeScreen = () => {
  return (
    <FlatList
      data={USERS}
      // horizontal -> sb horizontal hojega
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ padding: 16 }}
      renderItem={({ item }) => (
        <Text>
          {item.name} - {item.role}
        </Text>
      )}
      ItemSeparatorComponent={() => (
        <View style={{ height: 1, backgroundColor: "black" }} />
      )}
    />
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

