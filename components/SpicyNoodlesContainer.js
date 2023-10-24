import React, { useMemo } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const SpicyNoodlesContainer = ({
  priceText,
  dishName,
  showImages2Icon,
  propLeft,
  propLeft1,
  onFramePressablePress,
}) => {
  const r15000Style = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft),
    };
  }, [propLeft]);

  const spicyNoodlesStyle = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft1),
    };
  }, [propLeft1]);

  return (
    <Pressable style={styles.rectangleParent} onPress={onFramePressablePress}>
      <View style={styles.frameChild} />
      <Text style={[styles.r15000, styles.r15000Typo, r15000Style]}>
        {priceText}
      </Text>
      <Image
        style={[styles.icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/833472-1.png")}
      />
      <Text style={[styles.spicyNoodles, styles.r15000Typo, spicyNoodlesStyle]}>
        {dishName}
      </Text>
      {showImages2Icon && (
        <Image
          style={[styles.images2Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/images-2.png")}
        />
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  r15000Typo: {
    textAlign: "center",
    fontFamily: FontFamily.kanit,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  iconPosition: {
    top: 18,
    position: "absolute",
  },
  frameChild: {
    borderRadius: Border.br_8xl,
    backgroundColor: Color.colorWhite,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 7,
    elevation: 7,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: Color.colorGray_200,
    borderWidth: 1,
    width: 147,
    height: 168,
    zIndex: 0,
  },
  r15000: {
    top: 142,
    left: 35,
    color: Color.colorBlack,
    zIndex: 1,
  },
  icon: {
    left: 113,
    width: 28,
    height: 27,
    zIndex: 2,
  },
  spicyNoodles: {
    top: 120,
    left: 21,
    color: Color.colorGray_300,
    zIndex: 3,
  },
  images2Icon: {
    left: 10,
    borderRadius: Border.br_56xl,
    width: 104,
    height: 93,
    zIndex: 4,
  },
  rectangleParent: {
    top: 146,
    left: 28,
    flexDirection: "row",
    position: "absolute",
  },
});

export default SpicyNoodlesContainer;
