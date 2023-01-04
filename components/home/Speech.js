import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableHighlight,
} from "react-native";
import React from "react";
import Tts from "react-native-tts";

export default function Speech() {
  const handleVoice = () => {
    Tts.speak("advice");
  };

  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
  ];

  const Item = ({ title }) => (
    <View style={styles.item}>
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>

      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );

  const renderItem = ({ item }) => <Item title={item.title} />;

  return (
    <SafeAreaView>
      <View>
        <TouchableHighlight onPress={() => handleVoice()}>
          <Text>Speech</Text>
        </TouchableHighlight>
      </View>

      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 15,
    flexDirection: "row",
  },
  title: {
    fontSize: 32,
  },
});
