import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import ImagePicker from "react-native-image-crop-picker";

import { Container, Button, Text } from "@app-sdk/components";

import translation from "./translation";
import styles from "./style";

import { languageManager, navManager } from "@app-sdk/services";

export default class ImageActionPicker extends React.Component {
  constructor(props) {
    super(props);
    debugger;
    languageManager.addToTranslation(this, translation);
  }
  openCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      this.onChangeUserAvatar(image);
    });
  };
  openLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      this.onChangeUserAvatar(image);
    });
  };

  onChangeUserAvatar = image => {
    debugger;
    navManager.closeScreen(this.props.callback, image);
  };
  closePicker = () => {
    navManager.closeScreen();
  };
  render() {
    return (
      <Container style={styles.modalContainer}>
        <Container style={styles.modalTopContainer}>
          <Container style={styles.modalTopTextContainer}>
            <Text style={styles.modalTopText}>
              {languageManager.translate(this, "IMAGE_PICKER_TITLE")}
            </Text>
          </Container>
          <Button style={styles.modalTopBtn} onPress={this.openCamera}>
            <Text style={styles.modalTopBtnText}>
              {languageManager.translate(this, "IMAGE_PICKER_TAKE_PHOTO")}
            </Text>
            <Icon name="camera" style={styles.modalTopBtnIcon} />
          </Button>
          <Button style={styles.modalTopBtn} onPress={this.openLibrary}>
            <Text style={styles.modalTopBtnText}>
              {languageManager.translate(this, "IMAGE_PICKER_PHOTO_LIBRARY")}
            </Text>
            <Icon name="clone" style={styles.modalTopBtnIcon} />
          </Button>
        </Container>
        <Container style={styles.modalBottomContainer}>
          <Button style={styles.modalBtnClose} onPress={this.closePicker}>
            <Text style={styles.modalBtnCloseText}>
              {languageManager.translate(this, "IMAGE_PICKER_CANCEL_BTN")}
            </Text>
          </Button>
        </Container>
      </Container>
    );
  }
}
