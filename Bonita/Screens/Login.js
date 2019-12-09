import React, { Component } from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView,
  Alert
} from "react-native";
import { Block, Button, Checkbox, Text, theme } from "galio-framework";
import { Images, argonTheme } from "../constants";
import { Icon, Input } from "../components";
import { TouchableOpacity } from "react-native-gesture-handler";
const { width, height } = Dimensions.get("screen");
import NavigationService from "../navigation/navigate";
import BottomSheet from "reanimated-bottom-sheet";
import RBSheet from "react-native-raw-bottom-sheet";

export default class Login extends Component {
  constructor(props) {
    super(props);
  }
  state = { username: "a", password: "c" };
  static navigationOptions = {
    title: "Welcome"
  };

  _loginPage = async () => {
    if (username === "" || password === "") {
      this.dropDownAlertRef.alertWithType(
        "Warn",
        "FFIXXY Message",
        "Please fill all input fields"
      );
      return;
    } else {
    }
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Block flex middle>
        <StatusBar hidden />
        <ImageBackground
          source={Images.Onboarding}
          style={{ width, height, zIndex: 1 }}
        >
          <Block flex middle>
            <Block style={{ ...styles.registerContainer, paddingTop: 10 }}>
              <Block flex>
                <Block flex center>
                  <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior="padding"
                    enabled
                  >
                    <Block width={width * 0.68} style={{ marginBottom: 15 }}>
                      <Input
                        borderless
                        placeholder="Username"
                        onChangeText={content =>
                          this.setState({ username: content })
                        }
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="hat-3"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      />
                    </Block>
                    <Block width={width * 0.68}>
                      <Input
                        password
                        borderless
                        placeholder="Password"
                        onChangeText={content =>
                          this.setState({ password: content })
                        }
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="padlock-unlocked"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      />
                    </Block>
                    <Block middle style={{ zIndex: 3 }}>
                      <Button
                        style={{ ...styles.button }}
                        color={argonTheme.COLORS.SUCCESS}
                        onPress={() =>
                          navigate("DashBoard", {
                            data: this.state
                          })
                        }
                        textStyle={{ color: argonTheme.COLORS.WHITE }}
                      >
                        ĐĂNG NHẬP
                      </Button>
                    </Block>
                    <Block right>
                      <TouchableOpacity
                        onPress={() =>
                          NavigationService.navigate("Register", {
                            data: this.state
                          })
                        }
                      >
                        <Text style={{ marginTop: 10 }} size={12} color="blue">
                          ĐĂNG KÝ TẠI ĐÂY
                        </Text>
                      </TouchableOpacity>
                    </Block>
                  </KeyboardAvoidingView>
                </Block>
              </Block>
            </Block>
          </Block>
        </ImageBackground>
      </Block>
    );
  }
}
const styles = StyleSheet.create({
  registerContainer: {
    width: width * 0.75,
    height: height * 0.35,
    backgroundColor: "white",
    borderRadius: 4,
    shadowColor: argonTheme.COLORS.BLACK,
    marginTop: 70,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: "hidden"
  },
  socialConnect: {
    backgroundColor: argonTheme.COLORS.WHITE,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#8898AA"
  },
  socialButtons: {
    width: 120,
    height: 40,
    backgroundColor: "#fff",
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1
  },
  socialTextButtons: {
    color: argonTheme.COLORS.PRIMARY,
    fontWeight: "800",
    fontSize: 14
  },
  inputIcons: {
    marginRight: 12
  },
  passwordCheck: {
    paddingLeft: 15,
    paddingTop: 13,
    paddingBottom: 30
  },
  createButton: {
    width: width * 0.5,
    marginTop: 25
  },
  registerButton: {
    width: width * 0.5,
    backgroundColor: "white",
    opacity: 0
  },
  button: {
    width: width - theme.SIZES.BASE * 8,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
    marginTop: 20,
    opacity: 1
  }
});
