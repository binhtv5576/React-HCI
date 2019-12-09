import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import Container from "./navigation/Routers";
// import TabNavigator from "./navigation/Routers";
import NavigationService from "./navigation/navigate";
export const AppContainer = createAppContainer(Container);
export default class App extends Component {
  render() {
    return (
      <AppContainer
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      ></AppContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
