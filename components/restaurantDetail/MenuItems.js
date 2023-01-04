import { View, Text, StyleSheet } from "react-native";
import React from "react";

const foods = [
  {
    title: "Tandoori Chicken",
    description: "Amazing Indian dish with tenderloin chicken off the sizzles",
    price: "$19.20",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/chicken-tandori-1526595014.jpg",
  },
  {
    title: "Chicken Caesar Salad",
    description:
      "Amazing Indian dishcdcdcdcd with tenderloin chicken off the sizzles",
    price: "$17.20",
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-327831_11-3524329.jpg?quality=90&resize=440,400",
  },
  {
    title: "Nasi Lemak",
    description:
      "Amazing Indian cdcdcdcd dish with tenderloin chicken off the sizzles",
    price: "$18.20",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d0/Nasi_lemak_on_banana_leaf.jpg",
  },
  {
    title: "Roti Canai",
    description:
      "Roti canai or roti prata, also known as roti chenai and roti cane is an Indian flatbread dish found in several countries in Southeast Asia, especially in",
    price: "$11.20",
    image:
      "https://tasteasianfood.com/wp-content/uploads/2020/11/roti-canai-featured-image.jpeg",
  },
];

export default function MenuItems() {
  return (
    <View>
      <View style={styles.menuItemStyle}>
        <FoodInfo food={foods[0]} />
        {/* <FoodImage image={foods[0]}/> */}
      </View>
    </View>
  );
}

const FoodInfo = (props) => (
  <View style={{ width: 240, justifyContent: "space-evenly" }}>
    <Text style={styles.titleStyle}>{props.food.title}</Text>
    <Text>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
  </View>
);

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },

  titleStyle: {
    fontSize: 19,
    fontWeight: "600",
  },
});
