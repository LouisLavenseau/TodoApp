import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

interface FooterProps {
  title: string;
  onRemoveCompleted: () => void;
}

export default class Footer extends Component<FooterProps, {}> {
  render() {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={this.props.onRemoveCompleted}
      >
        <Text>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

const colors = {
  background: "whitesmoke",
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    alignItems: "center",
    backgroundColor: colors.background,
  },
});
