import { View, Text, Pressable, Alert } from "react-native";

import { Ionicons } from "@expo/vector-icons";

type ResetTypeProps = {
  icon: any;
  title: string;
  subtitle: string;
  selected: boolean;
};

export default function ResetType({
  icon,
  title,
  subtitle,
  selected,
}: ResetTypeProps) {
  const handleResetPassword = () => {
    Alert.alert("Success", "Reset Password Successfully");
  };

  return (
    <Pressable
      onPress={handleResetPassword}
      style={({ pressed }) => ({
        flexDirection: "row",

        alignItems: "center",

        backgroundColor: "#fff",

        borderWidth: 2,

        borderColor: selected ? "#B8F200" : "#E5E5E5",

        borderRadius: 20,

        padding: 18,

        marginBottom: 20,

        opacity: pressed ? 0.8 : 1,
      })}
    >
      <View
        style={{
          width: 55,
          height: 55,

          borderRadius: 16,

          backgroundColor: selected ? "#B8F200" : "#F2F2F2",

          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Ionicons name={icon} size={24} color={selected ? "#fff" : "#666"} />
      </View>

      <View
        style={{
          marginLeft: 15,
          flex: 1,
        }}
      >
        <Text
          style={{
            fontSize: 17,
            fontWeight: "700",
            color: "#222",
          }}
        >
          {title}
        </Text>

        <Text
          style={{
            color: "#888",
            marginTop: 5,
            lineHeight: 20,
          }}
        >
          {subtitle}
        </Text>
      </View>
    </Pressable>
  );
}
