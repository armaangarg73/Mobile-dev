import { View, Text, Pressable, ScrollView , Alert } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { Ionicons } from "@expo/vector-icons";

import { useRouter } from "expo-router";

import { useState } from "react";

export default function ForgotPassword() {
  const router = useRouter();

  const [selectedMethod, setSelectedMethod] = useState("2FA");

  const handleResetPassword = () => {
    Alert.alert("Success", "Password Reset Successfully");
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#F7F7F7",
      }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 22,
          paddingTop: 12,
          paddingBottom: 30,
        }}
      >
        <Pressable
          onPress={() => router.back()}
          style={{
            width: 52,
            height: 52,

            borderRadius: 18,

            backgroundColor: "#F0F0F0",

            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Ionicons name="chevron-back" size={26} color="#222" />
        </Pressable>

        <Text
          style={{
            fontSize: 38,

            fontWeight: "800",

            color: "#222",

            marginTop: 58,

            letterSpacing: -1,
          }}
        >
          Forgot Password
        </Text>

        <Text
          style={{
            fontSize: 17,

            color: "#8B8B8B",

            marginTop: 14,

            marginBottom: 34,

            lineHeight: 26,
          }}
        >
          Select which methods you'd like to reset.
        </Text>

        <Pressable
          onPress={() => setSelectedMethod("Email")}
          style={{
            width: "107%",

            minHeight: 100,

            backgroundColor: "#fff",

            borderRadius: 30,

            flexDirection: "row",

            alignItems: "center",

            paddingHorizontal: 8,

            borderWidth: 2,

            borderColor: selectedMethod === "Email" ? "#A8D900" : "#F1F1F1",

            marginBottom: 18,
          }}
        >
          <View
            style={{
              width: 74,
              height: 74,

              borderRadius: 24,

              backgroundColor:
                selectedMethod === "Email" ? "#EEF9C8" : "#F7F7F7",

              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Ionicons
              name="mail"
              size={28}
              color={selectedMethod === "Email" ? "#9ACD00" : "#666"}
            />
          </View>

          <View
            style={{
              marginLeft: 18,
              flex: 1,
            }}
          >
            <Text
              style={{
                fontSize: 20,

                fontWeight: "700",

                color: "#222",
              }}
            >
              Email Address
            </Text>

            <Text
              style={{
                fontSize: 15,

                color: "#888",

                marginTop: 6,
              }}
            >
              Send via email address securely.
            </Text>
          </View>
        </Pressable>

        <Pressable
          onPress={() => setSelectedMethod("2FA")}
          style={{
            width: "107%",

            minHeight: 100,

            backgroundColor: "#fff",

            borderRadius: 30,

            flexDirection: "row",

            alignItems: "center",

            paddingHorizontal: 8,

            borderWidth: 2.5,

            borderColor: selectedMethod === "2FA" ? "#A8D900" : "#F1F1F1",

            marginBottom: 18,
          }}
        >
          <View
            style={{
              width: 74,
              height: 74,

              borderRadius: 24,

              backgroundColor: selectedMethod === "2FA" ? "#EEF9C8" : "#F7F7F7",

              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Ionicons
              name="phone-portrait"
              size={28}
              color={selectedMethod === "2FA" ? "#9ACD00" : "#666"}
            />
          </View>

          <View
            style={{
              marginLeft: 18,
              flex: 1,
            }}
          >
            <Text
              style={{
                fontSize: 20,

                fontWeight: "700",

                color: "#222",
              }}
            >
              2 Factor Authentication
            </Text>

            <Text
              style={{
                fontSize: 15,

                color: "#888",

                marginTop: 6,
              }}
            >
              Send via 2FA securely.
            </Text>
          </View>
        </Pressable>

        <Pressable
          onPress={() => setSelectedMethod("Google Authenticator")}
          style={{
            width: "107%",

            minHeight: 100,

            backgroundColor: "#fff",

            borderRadius: 30,

            flexDirection: "row",

            alignItems: "center",

            paddingHorizontal: 8,

            borderWidth: 2,

            borderColor:
              selectedMethod === "Google Authenticator" ? "#A8D900" : "#F1F1F1",

            marginBottom: 34,
          }}
        >
          <View
            style={{
              width: 74,
              height: 74,

              borderRadius: 24,

              backgroundColor:
                selectedMethod === "Google Authenticator"
                  ? "#EEF9C8"
                  : "#F7F7F7",

              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Ionicons
              name="lock-closed"
              size={28}
              color={
                selectedMethod === "Google Authenticator" ? "#9ACD00" : "#666"
              }
            />
          </View>

          <View
            style={{
              marginLeft: 18,
              flex: 1,
            }}
          >
            <Text
              style={{
                fontSize: 20,

                fontWeight: "700",

                color: "#222",
              }}
            >
              Google Authenticator
            </Text>

            <Text
              style={{
                fontSize: 15,

                color: "#888",

                marginTop: 6,
              }}
            >
              Send via authenticator securely.
            </Text>
          </View>
        </Pressable>

        <Pressable
          onPress={handleResetPassword}
          style={({ pressed }) => ({
            width: "100%",

            height: 74,

            backgroundColor: "#A8D900",

            borderRadius: 24,

            justifyContent: "center",
            alignItems: "center",

            flexDirection: "row",

            opacity: pressed ? 0.8 : 1,
          })}
        >
          <Text
            style={{
              color: "#fff",

              fontSize: 21,

              fontWeight: "700",
            }}
          >
            Reset Password
          </Text>

          <Ionicons
            name="arrow-forward"
            size={24}
            color="#fff"
            style={{ marginLeft: 10 }}
          />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}
