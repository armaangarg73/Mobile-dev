import {
  View,
  Text,
  TextInput,
  Pressable,
  Alert,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { Ionicons } from "@expo/vector-icons";

import { styles } from "./style";

import { useState } from "react";

import { useRouter } from "expo-router";

export default function SignIn() {
  const router = useRouter();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill all fields");

      return;
    }

    Alert.alert("Success", "Signed In Successfully");
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          bounces={false}
          contentContainerStyle={{
            paddingHorizontal: 20,
            paddingBottom: 40,
          }}
        >
          <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
            accessible={false}
          >
            <View>
              <Image
                source={require("@/assets/images/icon.png")}
                style={styles.logo}
              />

              <Text style={styles.title}>Sign In</Text>

              <Text style={styles.subtitle}>
                Let's experience the joy of telecare AI.
              </Text>

              <Text style={styles.label}>Email Address</Text>

              <View style={styles.inputContainer}>
                <Ionicons name="mail-outline" size={22} color="#777" />

                <TextInput
                  placeholder="Enter your email..."
                  placeholderTextColor="#999"
                  style={styles.input}
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  returnKeyType="next"
                />
              </View>

              <Text style={styles.label}>Password</Text>

              <View style={styles.inputContainer}>
                <Ionicons name="lock-closed-outline" size={22} color="#777" />

                <TextInput
                  placeholder="Enter your password..."
                  placeholderTextColor="#999"
                  secureTextEntry={!showPassword}
                  style={styles.input}
                  value={password}
                  onChangeText={setPassword}
                  autoCapitalize="none"
                  returnKeyType="done"
                  onSubmitEditing={handleSignIn}
                />

                <Pressable onPress={() => setShowPassword(!showPassword)}>
                  <Ionicons
                    name={showPassword ? "eye-outline" : "eye-off-outline"}
                    size={22}
                    color="#999"
                  />
                </Pressable>
              </View>

              <Pressable
                onPress={handleSignIn}
                style={({ pressed }) => [
                  styles.button,
                  {
                    opacity: pressed ? 0.8 : 1,
                  },
                ]}
              >
                <Text style={styles.buttonText}>Sign In</Text>

                <Ionicons
                  name="arrow-forward"
                  size={22}
                  color="#fff"
                  style={{ marginLeft: 8 }}
                />
              </Pressable>

              <View style={styles.socialContainer}>
                <Pressable style={styles.socialButton}>
                  <Ionicons name="logo-facebook" size={26} color="#222" />
                </Pressable>

                <Pressable style={styles.socialButton}>
                  <Ionicons name="logo-google" size={26} color="#222" />
                </Pressable>

                <Pressable style={styles.socialButton}>
                  <Ionicons name="logo-instagram" size={26} color="#222" />
                </Pressable>
              </View>

              <View style={styles.footer}>
                <Text>Don't have an account? </Text>

                <Pressable onPress={() => router.push("/signup")}>
                  <Text style={styles.link}>Sign Up</Text>
                </Pressable>
              </View>

              <Pressable onPress={() => router.push("/forgotPassword")}>
                <Text style={styles.forgot}>Forgot your password?</Text>
              </Pressable>
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
