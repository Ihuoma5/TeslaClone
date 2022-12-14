import { View, Text, ImageBackground } from "react-native";
import React from "react";
import StyledButton from "../StyledButton";
import styles from "./styles";

const CarItem = (props) => {
  const { name, tagline, image, tagelineCTA } = props.car;

  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>{tagline}{" "}<Text style={styles.subtitleCTA}>{tagelineCTA}</Text>
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <StyledButton
          type="primary"
          content={"Custom Order"}
          onPress={() => {
            console.warn("Pressed");
          }}
        />
        <StyledButton
          type="secondary"
          content={"Existing inventory"}
          onPress={() => {
            console.warn("Pressed2");
          }}
        />
      </View>
    </View>
  );
};

export default CarItem;
