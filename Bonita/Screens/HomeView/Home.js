import React, { Component } from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  ScrollView,
  Picker
} from "react-native";
import { Block, Checkbox, Text, theme, NavBar, Button } from "galio-framework";
import { Images, argonTheme } from "../../constants";
const { width, height } = Dimensions.get("screen");
import NavigationService from "../../navigation/navigate";
import DatePicker from "react-native-datepicker";
import OptionsMenu from "react-native-options-menu";
import Icon from "react-native-vector-icons/FontAwesome";
import DropdownMenu from "react-native-dropdown-menu";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.selectedValue = { language: "Java" };
    this.state = { date: "9-12-2019" };
  }

  editPost = () => {
    console.log("abc");
  };
  render() {
    var data = [
      ["Lúa Spa - Hoàng Diệu", "Lúa Spa - Quận 10", "Lúa Spa - Quận 11"]
    ];
    return (
      <Block center middles style={{ ...styles.registerContainer, zIndex: 1 }}>
        <Block
          row
          center
          style={{
            ...styles.BlockStyle,
            height: 50,
            marginTop: 15,
            zIndex: 3
          }}
        >
          <Block right style={{ width: (width * 2) / 6 }}>
            <Text> Chọn chi nhánh :</Text>
          </Block>
          <Block
            style={{
              width: (width * 4) / 6
            }}
          >
            <DropdownMenu
              style={{ borderWidth: 1 }}
              bgColor={"white"}
              tintColor={"#666666"}
              activityTintColor={"green"}
              handler={(selection, row) =>
                this.setState({ text: data[selection][row] })
              }
              data={data}
            ></DropdownMenu>
          </Block>
        </Block>
        <Block
          style={{ width: width, height: 3, backgroundColor: "#e9ebee" }}
        ></Block>
        <Block style={{ width: width, height: (height * 2) / 3 }}>
          <Block center style={{ marginTop: 5 }}>
            <DatePicker
              style={{ width: 250 }}
              date={this.state.timeEnd}
              mode="date"
              placeholder={this.state.date}
              format="DD-MM-YYYY"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              showIcon={false}
              onDateChange={date => {
                this.setState({ date: date });
              }}
            />
          </Block>
          <Block
            row
            style={{
              width: width,
              height: 50,
              marginTop: 5
            }}
          >
            <Block
              center
              style={{
                width: width / 3,
                height: 50,
                marginLeft: width / 9,
                backgroundColor: "#e9ebee",
                borderRadius: 4,
                borderWidthh: 0.5
              }}
            >
              <OptionsMenu
                button={
                  <Block
                    left
                    row
                    style={{ width: width / 3, height: 50, marginTop: 10 }}
                  >
                    <Text style={{ fontSize: 13, marginTop: 5, marginLeft: 6 }}>
                      Tất cả Booking
                    </Text>
                    <Icon
                      name="chevron-down"
                      style={{ marginTop: 4, marginLeft: 6 }}
                      size={17}
                    />
                  </Block>
                }
                buttonStyle={{
                  width: width / 3,
                  height: 50,
                  resizeMode: "contain",
                  backgroundColor: "red"
                }}
                destructiveIndex={0}
                options={[
                  "Tất cả Booking",
                  "Booking vừa nhận",
                  "Booking đã nhận",
                  "Huỷ"
                ]}
                actions={
                  ([this.editPost],
                  [this.editPost],
                  [this.editPost],
                  [this.editPost])
                }
              />
            </Block>
            <Block
              center
              style={{
                width: width / 3,
                height: 50,
                marginLeft: width / 9,
                backgroundColor: "#e9ebee",
                borderRadius: 4,
                borderWidthh: 0.5
              }}
            >
              <OptionsMenu
                button={
                  <Block
                    left
                    row
                    style={{ width: width / 3, height: 50, marginTop: 10 }}
                  >
                    <Text style={{ fontSize: 13, marginTop: 5, marginLeft: 4 }}>
                      Tất cả Khung giờ
                    </Text>
                    <Icon
                      name="chevron-down"
                      style={{ marginTop: 4, marginLeft: 3 }}
                      size={17}
                    />
                  </Block>
                }
                buttonStyle={{
                  width: width / 3,
                  height: 50,
                  resizeMode: "contain",
                  backgroundColor: "red"
                }}
                destructiveIndex={0}
                options={[
                  "Tất cả Khung giờ",
                  "Khung giờ sáng",
                  "Khung giờ chiều",
                  "Huỷ"
                ]}
                actions={
                  ([this.editPost],
                  [this.editPost],
                  [this.editPost],
                  [this.editPost])
                }
              />
            </Block>
          </Block>
          <Block
            center
            style={{
              width: width,
              height: (height * 2) / 3 + 7,
              marginTop: 20,
              backgroundColor: "white"
            }}
          >
            <ScrollView>
              <Block
                style={{
                  width: width,
                  height: 1,
                  marginLeft: 5,
                  backgroundColor: "#f6f6f6"
                }}
              ></Block>
              <Block
                row
                center
                style={{
                  width: width,
                  height: 50
                }}
              >
                <Block
                  center
                  style={{
                    width: width / 5,
                    height: 20
                  }}
                >
                  <Text style={{ fontSize: 16 }}>7:30 - 8h</Text>
                </Block>
                <Block
                  center
                  style={{
                    width: width / 5
                  }}
                >
                  <Text style={{ fontSize: 16 }}> Cắt tóc</Text>
                </Block>
                <Block
                  style={{
                    width: (width * 5) / 10,
                    height: 2,
                    backgroundColor: "#f6f6f6"
                  }}
                ></Block>
                <Block
                  center
                  style={{
                    width: (width * 1) / 10
                  }}
                >
                  <Icon name="chevron-down" size={17} />
                </Block>
              </Block>
              <Block
                style={{
                  width: width,
                  height: 1,
                  marginLeft: 5,
                  backgroundColor: "#f6f6f6"
                }}
              ></Block>
              <Block
                row
                center
                style={{
                  width: width,
                  height: 50
                }}
              >
                <Block
                  center
                  style={{
                    width: width / 5,
                    height: 20
                  }}
                >
                  <Text style={{ fontSize: 16 }}>8:30 - 9h</Text>
                </Block>
                <Block
                  center
                  style={{
                    width: width / 5
                  }}
                >
                  <Text style={{ fontSize: 16 }}> Gội đầu</Text>
                </Block>
                <Block
                  style={{
                    width: (width * 5) / 10,
                    height: 2,
                    backgroundColor: "#f6f6f6"
                  }}
                ></Block>
                <Block
                  center
                  style={{
                    width: (width * 1) / 10
                  }}
                >
                  <Icon name="chevron-down" size={17} />
                </Block>
              </Block>
              <Block
                style={{
                  width: width,
                  height: 1,
                  marginLeft: 5,
                  backgroundColor: "#f6f6f6"
                }}
              ></Block>
              <Block
                row
                center
                style={{
                  width: width,
                  height: 50
                }}
              >
                <Block
                  center
                  style={{
                    width: width / 5,
                    height: 20
                  }}
                >
                  <Text style={{ fontSize: 16 }}>9:30 - 10h</Text>
                </Block>
                <Block
                  center
                  style={{
                    width: width / 5
                  }}
                >
                  <Text style={{ fontSize: 16 }}>Làm nails</Text>
                </Block>
                <Block
                  style={{
                    width: (width * 5) / 10,
                    height: 2,
                    backgroundColor: "#f6f6f6"
                  }}
                ></Block>
                <Block
                  center
                  style={{
                    width: (width * 1) / 10
                  }}
                >
                  <Icon name="chevron-down" size={17} />
                </Block>
              </Block>
              <Block
                style={{
                  width: width,
                  height: 1,
                  marginLeft: 5,
                  backgroundColor: "#f6f6f6"
                }}
              ></Block>
              <Block
                row
                center
                style={{
                  width: width,
                  height: 50
                }}
              >
                <Block
                  center
                  style={{
                    width: width / 5,
                    height: 20
                  }}
                >
                  <Text style={{ fontSize: 16 }}>9:30 - 10h</Text>
                </Block>
                <Block
                  center
                  style={{
                    width: width / 5
                  }}
                >
                  <Text style={{ fontSize: 16 }}>Làm nails</Text>
                </Block>
                <Block
                  style={{
                    width: (width * 5) / 10,
                    height: 2,
                    backgroundColor: "#f6f6f6"
                  }}
                ></Block>
                <Block
                  center
                  style={{
                    width: (width * 1) / 10
                  }}
                >
                  <Icon name="caret-left" size={20} />
                </Block>
              </Block>
              <Block
                style={{
                  width: width * 0.94,
                  marginLeft: width * 0.03,
                  height: 150,
                  borderRadius: 4,
                  borderWidth: 0.5
                }}
              >
                <Block
                  center
                  style={{
                    marginLeft: width / 18,
                    marginRight: width / 18,
                    height: 20,
                    marginTop: 5
                  }}
                >
                  <Text>Thông tin khách hàng</Text>
                </Block>
                <Block
                  style={{
                    marginLeft: width / 18,
                    marginRight: width / 18,
                    height: 30,
                    marginTop: 5
                  }}
                >
                  <Block
                    row
                    style={{
                      width: width / 2,
                      height: 30
                    }}
                  >
                    <Text size={15}>Tên khách: </Text>
                    <Text size={15} color="#385898" bold={true}>
                      Trần Văn Bình
                    </Text>
                  </Block>
                  <Block
                    row
                    style={{
                      width: width / 2,
                      height: 30
                    }}
                  >
                    <Text size={15}>Số điện thoại: </Text>
                    <Text size={15} color="#385898" bold={true}>
                      0907269083
                    </Text>
                  </Block>
                  <Block
                    row
                    style={{
                      width: width / 4,
                      height: 30
                    }}
                  >
                    <Text size={15}>Loại dịch vụ: </Text>
                    <Text size={15} color="#385898" bold={true}>
                      Cắt tóc
                    </Text>
                  </Block>
                  <Block
                    row
                    style={{
                      width: width / 4,
                      height: 30
                    }}
                  >
                    <Text size={15}>Giá tiền: </Text>
                    <Text size={15} color="#385898" bold={true}>
                      180.000
                    </Text>
                  </Block>
                </Block>
              </Block>
              <Block
                style={{
                  width: width,
                  height: 1,
                  marginLeft: 5,
                  backgroundColor: "#f6f6f6"
                }}
              ></Block>
              <Block
                row
                center
                style={{
                  width: width,
                  height: 50
                }}
              >
                <Block
                  center
                  style={{
                    width: width / 5,
                    height: 20
                  }}
                >
                  <Text style={{ fontSize: 16 }}>10:30 - 11h</Text>
                </Block>
                <Block
                  center
                  style={{
                    width: width / 5
                  }}
                >
                  <Text style={{ fontSize: 16 }}> Cắt tóc</Text>
                </Block>
                <Block
                  style={{
                    width: (width * 5) / 10,
                    height: 2,
                    backgroundColor: "#f6f6f6"
                  }}
                ></Block>
                <Block
                  center
                  style={{
                    width: (width * 1) / 10
                  }}
                >
                  <Icon name="chevron-down" size={17} />
                </Block>
              </Block>
              <Block
                style={{
                  width: width,
                  height: 1,
                  marginLeft: 5,
                  backgroundColor: "#f6f6f6"
                }}
              ></Block>
              <Block
                row
                center
                style={{
                  width: width,
                  height: 50
                }}
              >
                <Block
                  center
                  style={{
                    width: width / 5,
                    height: 20
                  }}
                >
                  <Text style={{ fontSize: 16 }}>10:30 - 11h</Text>
                </Block>
                <Block
                  center
                  style={{
                    width: width / 5
                  }}
                >
                  <Text style={{ fontSize: 16 }}> Cắt tóc</Text>
                </Block>
                <Block
                  style={{
                    width: (width * 5) / 10,
                    height: 2,
                    backgroundColor: "#f6f6f6"
                  }}
                ></Block>
                <Block
                  center
                  style={{
                    width: (width * 1) / 10
                  }}
                >
                  <Icon name="chevron-down" size={17} />
                </Block>
              </Block>
            </ScrollView>
          </Block>
        </Block>
      </Block>
    );
  }
}
const styles = StyleSheet.create({
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
    shadowRadius: 0,
    shadowOpacity: 0,
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
