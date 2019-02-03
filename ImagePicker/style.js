import EStyleSheet from "react-native-extended-stylesheet";

export default EStyleSheet.create({
  modalContainer: {
    backgroundColor: "transparent",
    height: "40%",
    marginBottom: "2%",
    marginHorizontal: "2%",
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0
  },
  modalTopContainer: {
    height: "73%",
    borderRadius: 10,
    padding: 5,
    elevation: 10
  },
  modalBottomContainer: {
    height: "22%",
    marginBottom: "2%",
    marginTop: "3%",
    borderRadius: 10,
    elevation: 10
  },
  modalBtnClose: {
    flex: 1,
    backgroundColor: "$color2",
    width: "100%",
    borderRadius: 10,
    justifyContent: "center"
  },
  modalBtnCloseText: {
    fontSize: "$fontSize2",
    fontFamily: "$fontFamily1",
    color: "$color1"
  },
  modalTopTextContainer: {
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "$color3"
  },
  modalTopText: {
    fontSize: "$fontSize5"
  },
  modalTopBtn: {
    backgroundColor: "$color2",
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    paddingHorizontal: "3%",
    borderBottomWidth: 1,
    borderBottomColor: "$color3"
  },
  modalTopBtnText: {
    color: "$color1",
    fontSize: "$fontSize4"
  },
  modalTopBtnIcon: {
    color: "$color1",
    fontSize: "$fontSize4"
  }
});
