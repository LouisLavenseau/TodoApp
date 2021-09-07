import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Switch } from "react-native";
import { Todo } from "../services/todo.service";

interface TodoItemProps {
  todo: Todo;
  onDelete: (task: string) => void;
  onToggle: (task: string) => void;
}

export default class TodoItem extends Component<TodoItemProps, {}> {
  toggleCompleted = () => {
    const { onToggle } = this.props;
    onToggle(this.props.todo.task);
  };

  removeItem = () => {
    const { onDelete } = this.props;
    onDelete(this.props.todo.task);
  };

  render() {
    const text = this.props.todo.task;
    const completed = this.props.todo.completed;
    const textStyle = completed ? [styles.text, styles.completed] : styles.text;

    return (
      <View style={styles.container}>
        <Text style={textStyle}>{text}</Text>
        <View style={styles.actionsContainer}>
          <Switch value={completed} onValueChange={this.toggleCompleted} />
          <TouchableOpacity onPress={this.removeItem}>
            <Text style={styles.removeIcon}> &times; </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const colors = {
  removeIcon: "red",
  completedTask: "lightgrey",
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  text: {
    flex: 1,
    fontSize: 14,
  },
  actionsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  removeIcon: {
    color: colors.removeIcon,
    fontSize: 26,
  },
  completed: {
    color: colors.completedTask,
  },
});
