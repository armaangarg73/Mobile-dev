import { Button, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = ({ route }: any) => {
  const navigation = useNavigation<any>();
  const { username } = route.params;

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     title: "Armaan",
  //   });
  // },[navigation]);
  return (
    <View>
      {/* <Text>DetailScreen</Text> */}

      <Text>{username}</Text>

      {/* <Button screen={"Details"}>Go to details</Button>  */}

      {/* can use Link too , just replace button with Link */}

      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate("Profile")}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
