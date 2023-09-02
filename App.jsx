import { useState, useEffect } from "react";
// import { login, logout, keep_alive, stop_keep_alive } from "./puwifi";
// import BackgroundService from "react-native-background-actions";
// import NetInfo from "@react-native-community/netinfo";
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  SafeAreaView,
  ScrollView,
  TextInput,
} from "react-native";
// import { veryIntensiveTask, options, start } from "./bg";
// import Network from "./network";

export default function App() {
  // const [text, setText] = useState("");

  return (
    <SafeAreaView
      className={Platform.OS === "ios" ? "" : "flex-1 items-center mt-10"}>
      <ScrollView className="my-10">
        <Text>Puwifi</Text>
        <TouchableOpacity
          className="flex flex-col my-3 items-center justify-center"
          // onPress={async () => {
          //   const res = await keep_alive(
          //     "http://10.0.0.11:8090",
          //     "200303124278",
          //     "bf@44"
          //   );
          //   console.log(await res.text());
          // }}
        >
          <Text className="bg-cyan-400 px-2 py-1 rounded-lg text-cyan-800">
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="">
          <Text className="bg-cyan-400 px-2 py-1 h-[2rem] w-[4rem] rounded-lg text-cyan-800">
            Logout
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
