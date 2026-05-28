import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation<any>();
  return (
    <View>
      <Text>HomeScreen</Text>
      {/* @ts-ignore */}
      {/* <Button screen={"Details"}>Go to details</Button>  */}
      {/* can use Link too , just replace button with Link */}

      <Button
        onPress={() => navigation.navigate("Details", { username: "chaicode" })}
      >
        Go to details
      </Button>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
