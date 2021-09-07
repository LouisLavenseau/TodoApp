import React, { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import TodoItem from "./TodoItem";
import { Todo } from "../services/todo.service";

interface TodoListProps {
  todos: Array<Todo>;
  onDelete: (task: string) => void;
  onToggle: (task: string) => void;
}

export default class TodoList extends Component<TodoListProps, {}> {
  render() {
    return (
      <FlatList<Todo>
        style={styles.container}
        data={this.props.todos}
        keyExtractor={(todo) => todo.task}
        renderItem={({ item }: { item: Todo }) => (
          <TodoItem
            todo={item}
            onDelete={this.props.onDelete}
            onToggle={this.props.onToggle}
          />
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
  },
});
