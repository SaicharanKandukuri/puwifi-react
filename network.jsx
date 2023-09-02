import React, { useEffect } from "react";
import { View, Text } from "react-native";
import NetInfo from "@react-native-community/netinfo";

const Network = () => {
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      // Check if the device is offline but connected to a host Wi-Fi network
      if (state.type === "wifi" && state.isConnected === false) {
        handleOfflineWithWiFi();
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleOfflineWithWiFi = () => {
    // This function will be called when the device is offline but connected to a host Wi-Fi network
    console.log("Device is offline but connected to Wi-Fi");
  };

  
};

export default Network;
