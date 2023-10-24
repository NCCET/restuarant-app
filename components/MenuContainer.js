import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import SpicyNoodlesContainer from "./SpicyNoodlesContainer";
import FormContainer from "./FormContainer";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";
import { db } from '../config/firebase';
import { collection, getDocs } from 'firebase/fireStore';

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const MenuContainer = ({
  priceText,
  dishName,
  itemPrice,
  foodItemName,
  dishImageUrl,
  menuItemPrice,
  menuPrice,
  menuItems,
  dishDescription,
  priceLabel,
  saladImageUrl,
  showLineView,
  showImages2Icon,
  showImages5Icon,
  showImages3Icon,
  showDownload1Icon,
  showImages4Icon,
  showImages6Icon,
  groupViewTop,
  groupViewLeft,
  iconLeft,
  images2IconLeft,
  chickenPastaSaladLeft,
  images5IconLeft,
  images3IconLeft,
  framePressableLeft,
  vegetableCurryLeft,
  iconLeft1,
  iconLeft2,
  images4IconLeft,
  images6IconLeft,
  onProperty1DefaultPress,
  onSidesPress,
  onFramePressablePress,
  onFramePressablePress1,
  onFramePressablePress2,
  onFramePressablePress3,
}) => {
  const property1DefaultStyle = useMemo(() => {
    return {
      ...getStyleValue("top", groupViewTop),
      ...getStyleValue("left", groupViewLeft),
    };
  }, [groupViewTop, groupViewLeft]);

  const r15000Style = useMemo(() => {
    return {
      ...getStyleValue("left", iconLeft),
    };
  }, [iconLeft]);

  const spicyNoodlesStyle = useMemo(() => {
    return {
      ...getStyleValue("left", images2IconLeft),
    };
  }, [images2IconLeft]);

  const r14000Style = useMemo(() => {
    return {
      ...getStyleValue("left", chickenPastaSaladLeft),
    };
  }, [chickenPastaSaladLeft]);

  const chickenPastaSaladStyle = useMemo(() => {
    return {
      ...getStyleValue("left", images5IconLeft),
    };
  }, [images5IconLeft]);

  const shrimpPastaStyle = useMemo(() => {
    return {
      ...getStyleValue("left", images3IconLeft),
    };
  }, [images3IconLeft]);

  const r18000Style = useMemo(() => {
    return {
      ...getStyleValue("left", framePressableLeft),
    };
  }, [framePressableLeft]);

  const r16500Style = useMemo(() => {
    return {
      ...getStyleValue("left", vegetableCurryLeft),
    };
  }, [vegetableCurryLeft]);

  const vegetableCurryStyle = useMemo(() => {
    return {
      ...getStyleValue("left", iconLeft1),
    };
  }, [iconLeft1]);

  const mixedSaladStyle = useMemo(() => {
    return {
      ...getStyleValue("left", iconLeft2),
    };
  }, [iconLeft2]);

  const r14500Style = useMemo(() => {
    return {
      ...getStyleValue("left", images4IconLeft),
    };
  }, [images4IconLeft]);

  const beefSaladStyle = useMemo(() => {
    return {
      ...getStyleValue("left", images6IconLeft),
    };
  }, [images6IconLeft]);

  const fetchMenu = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "menu"));
      const newData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setMenu(newData);
      console.log(newData);
    } catch (error) {
      alert('error')
      console.error("Error fetching menu: ", error);
    }
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  
  return (
    <Pressable
      style={[styles.property1default, property1DefaultStyle]}
      onPress={onProperty1DefaultPress}
    >
      <View style={styles.vectorParent}>
        <Image
          style={styles.groupChild}
          contentFit="cover"
          source={require("../assets/arrow-1.png")}
        />
        <Text style={styles.ourMenu}>Our Menu</Text>
        <Image
          style={[styles.f303057896Uoqpwealaewrvflh5oIcon, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/240-f-303057896-uoqpwealaewrvflh5ouq0rib3efhnnai-1.png")}
        />
      </View>
      <View style={[styles.lineParent, styles.lineParentPosition]}>
        <View style={[styles.groupItem, styles.groupBorder]} />
        {showLineView && (
          <View style={[styles.groupInner, styles.groupBorder]} />
        )}
        <Text style={[styles.meals, styles.mealsTypo]}>Meals</Text>
        <Pressable style={styles.sides} onPress={onSidesPress}>
          <Text style={[styles.sides1, styles.mealsTypo]}>Sides</Text>
        </Pressable>
        <Text style={[styles.snacks, styles.mealsTypo]}>Snacks</Text>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/2989988-1.png")}
        />
      </View>
      
      {menu.map((map) =>(
      <SpicyNoodlesContainer
        priceText="R150.00"
        dishName="Spicy Noodles"
        showImages2Icon
        onFramePressablePress={() => navigation.navigate("AndroidLarge12")}
      />))}
      <Image
        style={[styles.icon1, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/1000621-5.png")}
      />
      <Image
        style={[styles.icon2, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/1000621-5.png")}
      />
      <FormContainer
        price="R140.00"
        dishDescription="Chicken Pasta Salad"
        showImages5Icon
      />
      <Pressable
        style={styles.property1defaultInner}
        onPress={onFramePressablePress1}
      >
        <View style={[styles.frameChild, styles.frameChildLayout]} />
      </Pressable>
      <Text style={[styles.shrimpPasta, styles.r16500Typo, shrimpPastaStyle]}>
        {dishImageUrl}
      </Text>
      {showImages3Icon && (
        <Image
          style={styles.images3Icon}
          contentFit="cover"
          source={require("../assets/images-31.png")}
        />
      )}
      <Text style={[styles.r18000, styles.r18000Typo, r18000Style]}>
        {menuItemPrice}
      </Text>
      <Pressable
        style={[styles.rectangleParent, styles.rectangleParentPosition]}
        onPress={onFramePressablePress2}
      >
        <View style={[styles.frameItem, styles.frameChildLayout]} />
        <Text style={[styles.r16500, styles.r16500Typo, r16500Style]}>
          {menuPrice}
        </Text>
        <Text
          style={[
            styles.vegetableCurry,
            styles.r16500Typo,
            vegetableCurryStyle,
          ]}
        >
          {menuItems}
        </Text>
        <Image
          style={[styles.icon3, styles.iconPosition2]}
          contentFit="cover"
          source={require("../assets/1000621-5.png")}
        />
        {showDownload1Icon && (
          <Image
            style={[styles.download1Icon, styles.iconPosition2]}
            contentFit="cover"
            source={require("../assets/download-1.png")}
          />
        )}
      </Pressable>
      <View
        style={[styles.property1defaultChild, styles.rectangleParentPosition]}
      >
        <View style={[styles.rectangleView, styles.frameChildLayout]} />
      </View>
      <Text
        style={[styles.mixedSalad, styles.mixedSaladPosition, mixedSaladStyle]}
      >
        {dishDescription}
      </Text>
      <Image
        style={[styles.icon1, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/1000621-5.png")}
      />
      <Text style={[styles.r14500, styles.r14500Typo, r14500Style]}>
        {priceLabel}
      </Text>
      {showImages4Icon && (
        <Image
          style={[styles.images4Icon, styles.mixedSaladPosition]}
          contentFit="cover"
          source={require("../assets/images-4.png")}
        />
      )}
      <Pressable style={styles.framePressable} onPress={onFramePressablePress3}>
        <View style={[styles.frameInner, styles.frameChildLayout]} />
      </Pressable>
      <Text style={[styles.r19000, styles.r14500Typo]}>R190.00</Text>
      <Text style={[styles.beefSalad, styles.r18000Typo, beefSaladStyle]}>
        {saladImageUrl}
      </Text>
      {showImages6Icon && (
        <Image
          style={styles.images6Icon}
          contentFit="cover"
          source={require("../assets/images-6.png")}
        />
      )}
      <Image
        style={[styles.icon5, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/72439-1.png")}
      />
      <Text style={[styles.liveChat, styles.homeTypo]}>Live Chat</Text>
      <Image
        style={[styles.icon6, styles.icon6Position]}
        contentFit="cover"
        source={require("../assets/456212-1.png")}
      />
      <Text style={[styles.profile, styles.icon6Position]}>Profile</Text>
      <Text style={[styles.home, styles.homeTypo]}>Home</Text>
      <Text style={[styles.menu, styles.menuPosition]}>Menu</Text>
      <Text style={styles.favorites}>Favorites</Text>
      <Image
        style={[styles.icon7, styles.iconPosition1]}
        contentFit="cover"
        source={require("../assets/9073161-1.png")}
      />
      <Image
        style={[styles.f311889065Befkcxizhqpuki7exoIcon, styles.iconPosition1]}
        contentFit="cover"
        source={require("../assets/240-f-311889065-befkcxizhqpuki7exox7a19hsuz2nhjp-1.png")}
      />
      <Image
        style={[styles.f575307002Xchrmbypcbwyuuhsk1Icon, styles.iconLayout2]}
        contentFit="cover"
        source={require("../assets/240-f-575307002-xchrmbypcbwyuuhsk14zawangvgjx0ee-1.png")}
      />
      <Image
        style={[styles.icon8, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/1000621-5.png")}
      />
      <Image
        style={[styles.icon9, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/1000621-5.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  iconLayout2: {
    width: 32,
    position: "absolute",
  },
  lineParentPosition: {
    left: 0,
    position: "absolute",
  },
  groupBorder: {
    borderStyle: "solid",
    position: "absolute",
  },
  mealsTypo: {
    width: 50,
    fontSize: FontSize.size_mini,
    textAlign: "center",
    fontFamily: FontFamily.kanit,
  },
  iconLayout1: {
    height: 27,
    width: 28,
  },
  frameChildLayout: {
    height: 168,
    width: 147,
  },
  r16500Typo: {
    fontSize: FontSize.size_mini,
    textAlign: "center",
    fontFamily: FontFamily.kanit,
  },
  r18000Typo: {
    left: 228,
    fontSize: FontSize.size_mini,
    textAlign: "center",
    fontFamily: FontFamily.kanit,
    position: "absolute",
  },
  rectangleParentPosition: {
    top: 327,
    position: "absolute",
  },
  iconPosition2: {
    top: 14,
    position: "absolute",
  },
  mixedSaladPosition: {
    left: 226,
    position: "absolute",
  },
  r14500Typo: {
    left: 236,
    fontSize: FontSize.size_mini,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.kanit,
    position: "absolute",
  },
  iconLayout: {
    height: 29,
    top: 726,
  },
  homeTypo: {
    height: 17,
    top: 755,
    color: Color.colorGray_400,
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    fontFamily: FontFamily.kanit,
  },
  icon6Position: {
    left: 99,
    position: "absolute",
  },
  menuPosition: {
    left: 239,
    width: 26,
  },
  iconPosition1: {
    top: 727,
    height: 29,
    position: "absolute",
  },
  iconPosition: {
    left: 309,
    height: 27,
    width: 28,
    position: "absolute",
  },
  groupChild: {
    top: 4,
    height: 22,
    width: 26,
    left: -1,
    position: "absolute",
  },
  ourMenu: {
    left: 108,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    fontFamily: FontFamily.kanit,
    color: Color.colorBlack,
    fontWeight: "500",
    top: 0,
    position: "absolute",
  },
  f303057896Uoqpwealaewrvflh5oIcon: {
    left: 279,
    height: 28,
    top: 1,
  },
  vectorParent: {
    width: 311,
    height: 30,
    left: 28,
    top: 35,
    position: "absolute",
  },
  groupItem: {
    borderColor: Color.colorGray_700,
    borderTopWidth: 2,
    width: 362,
    height: 2,
    left: -1,
    top: 35,
  },
  groupInner: {
    top: 26,
    left: 27,
    borderColor: Color.colorChocolate_100,
    borderTopWidth: 3,
    width: 81,
    height: 3,
  },
  meals: {
    left: 40,
    color: Color.colorChocolate_100,
    top: 1,
    fontWeight: "500",
    width: 50,
    position: "absolute",
  },
  sides1: {
    color: Color.colorBlack,
  },
  sides: {
    left: 155,
    top: 1,
    position: "absolute",
  },
  snacks: {
    left: 264,
    top: 1,
    color: Color.colorBlack,
    position: "absolute",
  },
  icon: {
    left: 326,
    height: 24,
    top: 0,
    width: 26,
    position: "absolute",
  },
  lineParent: {
    top: 101,
    height: 36,
    width: 360,
  },
  icon1: {
    top: 164,
    left: 311,
    height: 27,
    width: 28,
    position: "absolute",
  },
  icon2: {
    top: 535,
    left: 311,
    height: 27,
    width: 28,
    position: "absolute",
  },
  frameChild: {
    borderWidth: 1,
    borderColor: Color.colorGray_200,
    shadowOpacity: 1,
    elevation: 7,
    shadowRadius: 7,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_8xl,
    width: 147,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
  },
  property1defaultInner: {
    top: 146,
    flexDirection: "row",
    left: 196,
    position: "absolute",
  },
  shrimpPasta: {
    top: 266,
    left: 222,
    color: Color.colorGray_300,
    position: "absolute",
  },
  images3Icon: {
    top: 167,
    left: 215,
    borderRadius: Border.br_13xl,
    width: 96,
    height: 78,
    position: "absolute",
  },
  r18000: {
    top: 289,
    color: Color.colorBlack,
  },
  frameItem: {
    zIndex: 0,
    borderWidth: 1,
    borderColor: Color.colorGray_200,
    shadowOpacity: 1,
    elevation: 7,
    shadowRadius: 7,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_8xl,
    width: 147,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
  },
  r16500: {
    top: 134,
    left: 35,
    zIndex: 1,
    color: Color.colorBlack,
    position: "absolute",
  },
  vegetableCurry: {
    top: 111,
    left: 18,
    zIndex: 2,
    color: Color.colorGray_300,
    position: "absolute",
  },
  icon3: {
    left: 113,
    zIndex: 3,
    height: 27,
    width: 28,
  },
  download1Icon: {
    left: 10,
    borderRadius: Border.br_22xl,
    width: 104,
    zIndex: 4,
    height: 76,
  },
  rectangleParent: {
    flexDirection: "row",
    left: 28,
  },
  rectangleView: {
    borderWidth: 1,
    borderColor: Color.colorGray_200,
    shadowOpacity: 1,
    elevation: 7,
    shadowRadius: 7,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_8xl,
    width: 147,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    left: 0,
    position: "absolute",
    top: 0,
  },
  property1defaultChild: {
    height: 168,
    width: 147,
    left: 196,
  },
  mixedSalad: {
    top: 438,
    color: Color.colorGray_300,
    fontSize: FontSize.size_mini,
    textAlign: "center",
    fontFamily: FontFamily.kanit,
  },
  r14500: {
    top: 461,
  },
  images4Icon: {
    borderRadius: Border.br_6xl,
    width: 85,
    top: 341,
    height: 76,
  },
  frameInner: {
    borderWidth: 1,
    borderColor: Color.colorGray_200,
    shadowOpacity: 1,
    elevation: 7,
    shadowRadius: 7,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_8xl,
    width: 147,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
  },
  framePressable: {
    top: 518,
    flexDirection: "row",
    left: 196,
    position: "absolute",
  },
  r19000: {
    top: 652,
  },
  beefSalad: {
    top: 633,
    color: Color.colorGray_300,
  },
  images6Icon: {
    left: 220,
    borderRadius: Border.br_7xl,
    width: 82,
    height: 70,
    top: 535,
    position: "absolute",
  },
  icon5: {
    width: 31,
    left: 20,
    position: "absolute",
  },
  liveChat: {
    width: 43,
    left: 20,
    position: "absolute",
  },
  icon6: {
    height: 29,
    top: 726,
    width: 26,
  },
  profile: {
    width: 30,
    height: 17,
    top: 755,
    color: Color.colorGray_400,
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    fontFamily: FontFamily.kanit,
  },
  home: {
    width: 27,
    left: 171,
    position: "absolute",
  },
  menu: {
    height: 17,
    top: 755,
    color: Color.colorGray_400,
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    fontFamily: FontFamily.kanit,
    position: "absolute",
  },
  favorites: {
    top: 752,
    left: 291,
    width: 52,
    height: 20,
    color: Color.colorGray_400,
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    fontFamily: FontFamily.kanit,
    position: "absolute",
  },
  icon7: {
    width: 24,
    left: 171,
  },
  f311889065Befkcxizhqpuki7exoIcon: {
    left: 239,
    width: 26,
  },
  f575307002Xchrmbypcbwyuuhsk1Icon: {
    top: 719,
    left: 301,
    height: 33,
  },
  icon8: {
    top: 535,
  },
  icon9: {
    top: 341,
  },
  property1default: {
    top: 20,
    borderRadius: Border.br_15xl,
    height: 800,
    overflow: "hidden",
    width: 360,
    backgroundColor: Color.colorWhite,
    left: 20,
    position: "absolute",
  },
});

export default MenuContainer;
