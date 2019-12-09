import React, { Component } from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView,
  Alert
} from "react-native";
import { Block, Checkbox, Text, theme } from "galio-framework";
import { Images, argonTheme } from "../constants";
import { Icon, Input, Button } from "../components";
const { width, height } = Dimensions.get("screen");
import NavigationService from "../navigation/navigate";
import RBSheet from "react-native-raw-bottom-sheet";
import CalendarPicker from "react-native-calendar-picker";
import moment from "moment";
import { ScrollView } from "react-native-gesture-handler";
import DropdownMenu from "react-native-dropdown-menu";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
      selectedEndDate: null
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date, type) {
    if (type === "END_DATE") {
      this.setState({
        selectedEndDate: moment(date).format("DD-MM-YYYY")
      });
    } else {
      this.setState({
        selectedStartDate: moment(date).format("DD-MM-YYYY"),
        selectedEndDate: null
      });
    }
  }

  render() {
    var data = [
      ["Lúa Spa - Hoàng Diệu", "Lúa Spa - Quận 10", "Lúa Spa - Quận 11"]
    ];
    let TimeEnd =
      this.state.selectedStartDate + " -> " + this.state.selectedEndDate;
    let TimeStart = this.state.selectedStartDate;
    return (
      <ScrollView>
        <KeyboardAwareScrollView>
          <Block style={{ width: width, height: height * 1.3 }}>
            <Block style={{ width: width, height: 50 }}>
              <Text>Tài khoản</Text>
            </Block>
          </Block>
        </KeyboardAwareScrollView>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  BlockStyle: {
    width: width * 0.95
  },
  registerContainer: {
    width: width,
    height: height,
    backgroundColor: "white",
    borderRadius: 4,
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: "hidden"
  },
  button: {
    width: width - theme.SIZES.BASE * 8,
    height: theme.SIZES.BASE * 3,
    marginTop: 20,
    opacity: 1,
    zIndex: 3
  },
  title: {
    width: "100%",
    fontSize: 12,
    fontWeight: "bold",
    alignItems: "flex-start"
  },
  navbar: {
    paddingVertical: 0,
    paddingBottom: theme.SIZES.BASE * 1.5,
    zIndex: 5
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
  }
});
