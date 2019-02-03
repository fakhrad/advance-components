import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Button } from "@app-sdk/components";

import styles from "./style";
import { languageManager, navManager } from "@app-sdk/services";

const BackButton = ({ children, ...props }) => {
  backNavigate = p => {
    //navManager.openScreen("Home");
    if (p.screen) {
      navManager.closeScreen();
    } else if (p.modal) {
      navManager.closeModal();
    } else {
      navManager.closeScreen();
    }
  };
  const backIconName =
    languageManager.getCurrentLayout() == "rtl" ? "arrow-right" : "arrow-left";
  let myStyle = {
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: 0,
    zIndex: 100
  };
  return (
    <Button
      {...props}
      style={[myStyle, props.style]}
      onPress={() => this.backNavigate(props)}
    >
      <Icon name={backIconName} style={styles.icon} />
    </Button>
  );
};

export default BackButton;
