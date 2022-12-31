import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function HeaderTabs() {
  const [activeTabs, setActiveTabs] = useState("Delivery");

  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
      <HeaderButton
        text="Delivery"
        btnColor="black"
        textColor="white"
        activeTabs={activeTabs}
        setActiveTabs={setActiveTabs}
      />
      <HeaderButton
        text="Pickup"
        btnColor="white"
        textColor="black"
        activeTabs={activeTabs}
        setActiveTabs={setActiveTabs}
      />
    </View>
  );
}

const HeaderButton = ({
  text,
  btnColor,
  textColor,
  setActiveTabs,
  activeTabs,
}) => (
  <TouchableOpacity
    style={{
      backgroundColor: activeTabs === text ? "black" : "white",
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 30,
    }}
    onPress={() => setActiveTabs(text)}
  >
    <Text
      style={{
        color: activeTabs === text ? "white" : "black",
        fontSize: 15,
        fontWeight: "900",
      }}
    >
      {text}
    </Text>
  </TouchableOpacity>
);
