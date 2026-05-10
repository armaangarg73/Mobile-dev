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

export default function SignUp() {
  const router = useRouter();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSignUp = () => {
    if (!email || !password || !confirmPassword) {
      Alert.alert("Error", "Please fill all fields");

      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");

      return;
    }

    Alert.alert("Success", "Account Created Successfully");
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

              <Text style={styles.title}>Sign Up</Text>

              <Text style={styles.subtitle}>Create your new account</Text>

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
                  returnKeyType="next"
                />

                <Pressable onPress={() => setShowPassword(!showPassword)}>
                  <Ionicons
                    name={showPassword ? "eye-outline" : "eye-off-outline"}
                    size={22}
                    color="#999"
                  />
                </Pressable>
              </View>

              <Text style={styles.label}>Confirm Password</Text>

              <View style={styles.inputContainer}>
                <Ionicons name="lock-closed-outline" size={22} color="#777" />

                <TextInput
                  placeholder="Confirm your password..."
                  placeholderTextColor="#999"
                  secureTextEntry={!showConfirmPassword}
                  style={styles.input}
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  autoCapitalize="none"
                  returnKeyType="done"
                  onSubmitEditing={handleSignUp}
                />

                <Pressable
                  onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  <Ionicons
                    name={
                      showConfirmPassword ? "eye-outline" : "eye-off-outline"
                    }
                    size={22}
                    color="#999"
                  />
                </Pressable>
              </View>

              <Pressable
                onPress={handleSignUp}
                style={({ pressed }) => [
                  styles.button,
                  {
                    opacity: pressed ? 0.8 : 1,
                  },
                ]}
              >
                <Text style={styles.buttonText}>Sign Up</Text>

                <Ionicons
                  name="arrow-forward"
                  size={22}
                  color="#fff"
                  style={{ marginLeft: 8 }}
                />
              </Pressable>

              <View style={styles.footer}>
                <Text>Already have an account? </Text>

                <Pressable onPress={() => router.push("/signin")}>
                  <Text style={styles.link}>Sign In</Text>
                </Pressable>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
