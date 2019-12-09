import React, { Component } from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView,
  Alert,
  FlatList,
  AsyncStorage
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
const extractKey = item => item.id.toString();

export default class ViewCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
      selectedEndDate: null,
      createCalendar: false,
      data: [
        {
          id: 1,
          name: "Mừng 20 tháng 11",
          time: "20-11",
          chinhanh: "Nam kỳ khởi nghĩa",
          description: "Nhanh tay nhận ngay 50% giảm giá",
          timeSlot: 3,
          perSlot: 1
        }
      ]
    };
    this.onDateChange = this.onDateChange.bind(this);
    this.dataVM = {
      id: 1,
      name: "",
      time: "",
      chinhanh: "",
      description: "",
      timeSlot: 0,
      perSlot: 0
    };
  }

  dataVM = {
    id: 1,
    name: "",
    time: "",
    chinhanh: "",
    description: "",
    timeSlot: 0,
    perSlot: 0
  };
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
  showSate() {
    console.log(this.state);
  }

  createdata = async () => {
    this.dataVM.id = Math.floor(Math.random() * 1000);

    await this.setState(state => {
      const data = state.data.concat(this.dataVM);
      return {
        data
      };
    });
  };
  renderItem = ({ item }) => {
    return (
      <Block
        key={item.id}
        style={{
          width: width * 0.95,
          height: 160,
          borderColor: "#00c4cc",
          borderWidth: 0.9,
          borderRadius: 4,
          marginTop: 5
        }}
      >
        <Block
          center
          row
          style={{
            height: 25
          }}
        >
          <Block right style={{ width: width * 0.3 }}>
            <Text>Tên sự kiện :</Text>
          </Block>
          <Block style={{ width: width * 0.6, marginLeft: width * 0.1 }}>
            <Text>{item.name}</Text>
          </Block>
        </Block>
        <Block
          center
          row
          style={{
            height: 25
          }}
        >
          <Block right style={{ width: width * 0.3 }}>
            <Text>Thời gian:</Text>
          </Block>
          <Block style={{ width: width * 0.6, marginLeft: width * 0.1 }}>
            <Text>{item.time}</Text>
          </Block>
        </Block>
        <Block
          center
          row
          style={{
            height: 25
          }}
        >
          <Block right style={{ width: width * 0.3 }}>
            <Text>Chi nhánh:</Text>
          </Block>
          <Block style={{ width: width * 0.6, marginLeft: width * 0.1 }}>
            <Text>{item.chinhanh}</Text>
          </Block>
        </Block>
        <Block
          center
          row
          style={{
            height: 25
          }}
        >
          <Block right style={{ width: width * 0.3 }}>
            <Text>Thời gian/slot:</Text>
          </Block>
          <Block style={{ width: width * 0.6, marginLeft: width * 0.1 }}>
            <Text>{item.timeSlot}</Text>
          </Block>
        </Block>
        <Block
          center
          row
          style={{
            height: 25
          }}
        >
          <Block right style={{ width: width * 0.3 }}>
            <Text>Người/slot:</Text>
          </Block>
          <Block style={{ width: width * 0.6, marginLeft: width * 0.1 }}>
            <Text>{item.perSlot}</Text>
          </Block>
        </Block>
        <Block
          center
          row
          style={{
            height: 25
          }}
        >
          <Block right style={{ width: width * 0.3 }}>
            <Text>Miêu tả:</Text>
          </Block>
          <Block style={{ width: width * 0.6, marginLeft: width * 0.1 }}>
            <Text>{item.description}</Text>
          </Block>
        </Block>
      </Block>
    );
  };
  render() {
    var data = [
      ["Lúa Spa - Hoàng Diệu", "Lúa Spa - Quận 10", "Lúa Spa - Quận 11"]
    ];
    let TimeEnd =
      this.state.selectedStartDate + " -> " + this.state.selectedEndDate;
    let TimeStart = this.state.selectedStartDate;
    const { elements } = this.state;

    if (this.state.selectedEndDate == null) {
      this.dataVM.time = TimeStart;
    } else {
      this.dataVM.time = TimeEnd;
    }
    return (
      <ScrollView>
        <KeyboardAwareScrollView>
          <Block
            center
            middles
            style={{
              ...styles.registerContainer,
              zIndex: 1,
              height: height * 1.3
            }}
          >
            <Block
              style={{
                width: width,
                height: height / 25
              }}
            ></Block>
            <Block center style={{ width: width, height: 20 }}>
              <Text bold={true} size={17}>
                Tạo Lịch Sự Kiện
              </Text>
            </Block>
            <Block
              style={{
                height: 2,
                marginTop: 5,
                width: width,
                backgroundColor: "aliceblue"
              }}
            ></Block>
            <Block
              row
              center
              style={{ width: width, height: 35, marginTop: 20 }}
            >
              <Block center style={{ width: width / 2, height: 45 }}>
                <Button
                  onPress={() => this.setState({ createCalendar: false })}
                  style={{
                    width: width / 3,
                    height: 45,
                    backgroundColor: "#e7b12b"
                  }}
                >
                  <Text>Huỷ tạo lịch</Text>
                </Button>
              </Block>
              <Block center style={{ width: width / 2, height: 45 }}>
                <Button
                  onPress={() => this.setState({ createCalendar: true })}
                  style={{
                    width: width / 3,
                    height: 45,
                    backgroundColor: "#00c4cc"
                  }}
                >
                  <Text>Tạo lịch mới</Text>
                </Button>
              </Block>
            </Block>

            {this.state.createCalendar === true ? (
              <Block>
                <Block
                  style={{
                    ...styles.BlockStyle,
                    height: 350,
                    marginTop: 30,
                    borderColor: "#00c4cc",
                    borderRadius: 4,
                    borderWidth: 0.5,
                    marginLeft: 10
                  }}
                >
                  <CalendarPicker
                    startFromMonday={true}
                    allowRangeSelection={true}
                    todayBackgroundColor="#f2e6ff"
                    selectedDayColor="#7300e6"
                    selectedDayTextColor="#FFFFFF"
                    onDateChange={this.onDateChange}
                  />
                </Block>
                <Block
                  row
                  center
                  style={{
                    ...styles.BlockStyle,
                    height: 50,
                    marginTop: 10,
                    zIndex: 2
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
                        // this.setState({ text: data[selection][row] })
                        // console.log(data[selection][row])
                        (this.dataVM.chinhanh = data[selection][row])
                      }
                      data={data}
                    ></DropdownMenu>
                  </Block>
                </Block>
                <Block
                  row
                  center
                  style={{
                    ...styles.BlockStyle,
                    height: 50,
                    marginTop: 10
                  }}
                >
                  <Block right style={{ width: (width * 2) / 6 }}>
                    <Text>Tên sự kiện :</Text>
                  </Block>
                  <Block
                    center
                    style={{
                      width: (width * 4) / 6
                    }}
                  >
                    <Input
                      onChange={content => (this.dataVM.name = content)}
                      right
                      style={{ width: (width * 4) / 7 }}
                      placeholder="Ví dụ : Khuyến mãi 20/11"
                      iconContent={<Block />}
                    />
                  </Block>
                </Block>
                <Block
                  row
                  center
                  style={{
                    ...styles.BlockStyle,
                    height: 50,
                    marginTop: 10
                  }}
                >
                  <Block right style={{ width: (width * 2) / 6 }}>
                    <Text>Miêu tả sự kiện :</Text>
                  </Block>
                  <Block
                    center
                    style={{
                      width: (width * 4) / 6
                    }}
                  >
                    <Input
                      onChange={content => (this.dataVM.description = content)}
                      right
                      style={{ width: (width * 4) / 7 }}
                      placeholder="Ví dụ : tặng 50% cho đợt cắt tóc"
                      iconContent={<Block />}
                    />
                  </Block>
                </Block>
                <Block
                  row
                  center
                  style={{
                    ...styles.BlockStyle,
                    height: 50,
                    marginTop: 10
                  }}
                >
                  <Block right style={{ width: (width * 2) / 6 }}>
                    <Text>Thời gian :</Text>
                  </Block>
                  <Block
                    row
                    center
                    style={{
                      width: (width * 4) / 6
                    }}
                  >
                    {this.state.selectedStartDate == null ? (
                      <Text style={{ paddingLeft: width / 10 }}>
                        Vui lòng chọn bên trên
                      </Text>
                    ) : (
                      <Text style={{ paddingLeft: width / 10 }}>
                        {this.state.selectedEndDate == null
                          ? TimeStart
                          : TimeEnd}
                      </Text>
                    )}
                  </Block>
                </Block>
                <Block
                  row
                  center
                  style={{
                    ...styles.BlockStyle,
                    height: 50,
                    marginTop: 10
                  }}
                >
                  <Block right style={{ width: (width * 2) / 6 }}>
                    <Text>Thời gian 1 slot :</Text>
                  </Block>
                  <Block
                    center
                    style={{
                      width: (width * 4) / 6
                    }}
                  >
                    <Input
                      right
                      onChange={e => (this.dataVM.timeSlot = e)}
                      keyboardType="numeric"
                      style={{ width: (width * 4) / 7 }}
                      placeholder="Đơn vị Phút"
                      iconContent={<Block />}
                    />
                  </Block>
                </Block>
                <Block
                  row
                  center
                  style={{
                    ...styles.BlockStyle,
                    height: 50,
                    marginTop: 10
                  }}
                >
                  <Block right style={{ width: (width * 2) / 6 }}>
                    <Text>Lượng khách 1 slot :</Text>
                  </Block>
                  <Block
                    center
                    style={{
                      width: (width * 4) / 6
                    }}
                  >
                    <Input
                      right
                      keyboardType="numeric"
                      onChange={e => (this.dataVM.perSlot = e)}
                      style={{ width: (width * 4) / 7 }}
                      placeholder="Đơn vị Người"
                      iconContent={<Block />}
                    />
                  </Block>
                </Block>
                <Block center style={{ width: width }}>
                  <Button
                    onPress={this.createdata}
                    // onPress={() => this.createdata}
                    style={{ backgroundColor: "#00c4cc", marginTop: 15 }}
                  >
                    <Text style={{ fontSize: 15 }}>Xác nhận</Text>
                  </Button>
                </Block>
              </Block>
            ) : (
              <>
                <Block
                  center
                  style={{ width: width, height: 30, marginTop: 15 }}
                >
                  <Text>Danh sách các sự kiện</Text>
                </Block>
                {this.state.data.length > 0 ? (
                  <FlatList
                    items={elements}
                    data={this.state.data}
                    renderItem={this.renderItem}
                    keyExtractor={extractKey}
                    extraData={this.state}
                  />
                ) : (
                  <></>
                )}
              </>
            )}
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
