import EStyleSheet from "react-native-extended-stylesheet";
import { Dimensions } from "react-native";
const deviceWidth = Dimensions.get("window").width;
export default EStyleSheet.create({
  btn: {
    width: (deviceWidth * 25) / 100,
    height: (deviceWidth * 15) / 100,
    backgroundColor: "transparent",
    alignItems: "flex-start",
    justifyContent: "center",
    position: "absolute",
    left: 0,
    zIndex: 100
  },
  icon: {
    color: "$color2",
    fontSize: "$fontSize1 * 1.1"
  }
});
