import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegistrationForm from "./RegistrationForm";
import Welcome2 from "./Welcome2";
function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Welcome2" component={Welcome2} />
      <Stack.Screen name="Registration" component={RegistrationForm} />
    </Stack.Navigator>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333",
  },
  footerContainer: {
    flex: 0.1,
    backgroundColor: "#333333",
  },
});
