import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Button } from "@app-sdk/components";

import styles from "./style";
import { languageManager, navManager } from "@app-sdk/services";

const BackButton = ({ children, ...props }) => {
  const backNavigate = () => {
    navManager.closeScreen();
  };
  const backIconName = languageManager.isRTL ? "arrow-right" : "arrow-left";
  let iconStyle = {};
  if (props.style != undefined && props.style.color) {
    iconStyle["color"] = props.style.color;
  }
  return (
    <Button
      {...props}
      style={[styles.btn, props.style]}
      onPress={() => backNavigate()}
    >
      <Icon name={backIconName} style={[styles.icon, iconStyle]} />
    </Button>
  );
};

export default BackButton;
