import { Platform } from "react-native";
import { scale } from "react-native-size-matters";
import CombinedStyleSheet from "../internal/CombinedStyleSheet";
import suffixProperties from "../internal/suffixProperties";
import systemWeights from "../helpers/systemWeights";
import sanFranciscoSpacing from "../helpers/sanFranciscoSpacing";
import iOSColors from "../helpers/iOSColors";

// https://developer.apple.com/ios/human-interface-guidelines/visual-design/typography/

const colors = {
  black: iOSColors.black,
  white: iOSColors.white
};

const getStylesForColor = color => ({
  largeTitle: {
    // fontSize: 34,
    // lineHeight: 41,
    fontSize: scale(34),
    lineHeight: scale(41),
    ...systemWeights.regular,
    letterSpacing: Platform.OS === "ios" ? sanFranciscoSpacing(34) : undefined,
    color: colors[color]
  },
  title1: {
    // fontSize: 28,
    // lineHeight: 34,
    fontSize: scale(28),
    lineHeight: scale(34),
    ...systemWeights.regular,
    letterSpacing: Platform.OS === "ios" ? sanFranciscoSpacing(28) : undefined,
    color: colors[color]
  },
  title2: {
    // fontSize: 22,
    // lineHeight: 28,
    fontSize: scale(22),
    lineHeight: scale(28),
    ...systemWeights.regular,
    letterSpacing: Platform.OS === "ios" ? sanFranciscoSpacing(22) : undefined,
    color: colors[color]
  },
  title3: {
    // fontSize: 20,
    // lineHeight: 25,
    fontSize: scale(20),
    lineHeight: scale(25),
    ...systemWeights.regular,
    letterSpacing: Platform.OS === "ios" ? sanFranciscoSpacing(20) : undefined,
    color: colors[color]
  },
  headline: {
    // fontSize: 17,
    // lineHeight: 22,
    fontSize: scale(17),
    lineHeight: scale(22),
    ...systemWeights.semibold,
    letterSpacing: Platform.OS === "ios" ? sanFranciscoSpacing(17) : undefined,
    color: colors[color]
  },
  body: {
    // fontSize: 17,
    // lineHeight: 22,
    fontSize: scale(17),
    lineHeight: scale(22),
    ...systemWeights.regular,
    letterSpacing: Platform.OS === "ios" ? sanFranciscoSpacing(17) : undefined,
    color: colors[color]
  },
  callout: {
    // fontSize: 16,
    // lineHeight: 21,
    fontSize: scale(16),
    lineHeight: scale(21),
    ...systemWeights.regular,
    letterSpacing: Platform.OS === "ios" ? sanFranciscoSpacing(16) : undefined,
    color: colors[color]
  },
  subhead: {
    // fontSize: 15,
    // lineHeight: 20,
    fontSize: scale(15),
    lineHeight: scale(20),
    ...systemWeights.regular,
    letterSpacing: Platform.OS === "ios" ? sanFranciscoSpacing(15) : undefined,
    color: colors[color]
  },
  footnote: {
    // fontSize: 13,
    // lineHeight: 18,
    fontSize: scale(13),
    lineHeight: scale(18),
    ...systemWeights.regular,
    letterSpacing: Platform.OS === "ios" ? sanFranciscoSpacing(13) : undefined,
    color: colors[color]
  },
  caption1: {
    // fontSize: 12,
    // lineHeight: 16,
    fontSize: scale(12),
    lineHeight: scale(16),
    ...systemWeights.regular,
    letterSpacing: Platform.OS === "ios" ? sanFranciscoSpacing(12) : undefined,
    color: colors[color]
  },
  caption2: {
    // fontSize: 11,
    // lineHeight: 13,
    fontSize: scale(11),
    lineHeight: scale(13),
    ...systemWeights.regular,
    letterSpacing: Platform.OS === "ios" ? sanFranciscoSpacing(11) : undefined,
    color: colors[color]
  }
});

export default CombinedStyleSheet.create({
  ...getStylesForColor("black"),
  ...suffixProperties(getStylesForColor("white"), "White")
});
