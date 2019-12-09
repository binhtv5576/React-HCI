import React, { Component } from "react";

import { Router, Stack, Scene } from "react-native-router-flux";
import Login from "../Screens/Login";
import DashBoard from "../Screens/DashBoard";
import Background from "../Screens/Background";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Register from "../Screens/RegisterView/Register";
import HomeToCreate from "../Screens/HomeView/HomeToCreate";
import RegisterStore from "../Screens/RegisterView/RegisterStore";
import RegisterStoreStep2 from "../Screens/RegisterView/RegisterStoreStep2";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import RegisterStoreStep3 from "../Screens/RegisterView/RegisterStoreStep3";
import RegisterStoreStep4 from "../Screens/RegisterView/RegisterStoreStep4";
import Home from "../Screens/HomeView/Home";
import ViewCalendar from "../Screens/Calendar";
import Account from "../Screens/Account";

const Container = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        header: null,
        gesturesEnabled: false
      }
    },
    Calendar: {
      screen: ViewCalendar,
      navigationOptions: {
        header: null,
        gesturesEnabled: false
      }
    },
    DashBoard: {
      screen: DashBoard,
      navigationOptions: {
        header: null,
        gesturesEnabled: false
      }
    },
    Background: {
      screen: Background,
      navigationOptions: {
        header: null,
        gesturesEnabled: false
      }
    },
    Register: {
      screen: Register,
      navigationOptions: {
        header: null,
        gesturesEnabled: false
      }
    },
    HomeToCreate: {
      screen: HomeToCreate,
      navigationOptions: {
        header: null,
        gesturesEnabled: false
      }
    },
    RegisterStore: {
      screen: RegisterStore,
      navigationOptions: {
        header: null,
        gesturesEnabled: false
      }
    },
    RegisterStoreStep2: {
      screen: RegisterStoreStep2,
      navigationOptions: {
        header: null,
        gesturesEnabled: false
      }
    },
    Home: {
      screen: Home,
      navigationOptions: {
        header: null,
        gesturesEnabled: false
      }
    },
    RegisterStoreStep3: {
      screen: RegisterStoreStep3,
      navigationOptions: {
        header: null,
        gesturesEnabled: false
      }
    },
    RegisterStoreStep4: {
      screen: RegisterStoreStep4,
      navigationOptions: {
        header: null,
        gesturesEnabled: false
      }
    },
    Account: {
      screen: Account,
      navigationOptions: {
        header: null,
        gesturesEnabled: false
      }
    }
  },
  {
    initialRouteName: "Calendar"
  }
);
export default Container;
