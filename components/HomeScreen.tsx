import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import TodoList from "./TodoList";
import Input from "./Input";
import Header from "./Header";
import Footer from "./Footer";
import todoService, { Todo } from "../services/todo.service";

interface HomeScreenState {
  todos: Array<Todo>;
}

export default class HomeScreen extends Component<{}, HomeScreenState> {
  state: HomeScreenState = {
    todos: [],
  };

  loadTodos = () => {
    // Load all modules
    todoService.getAll().then((todos) => {
      this.setState({ todos });
    });
  };

  addTodo = (task: string) => {
    todoService.add(task);
    this.loadTodos();
  };

  removeTodo = (task: string) => {
    todoService.remove(task);
    this.loadTodos();
  };

  toggleTodo = (task: string) => {
    todoService.toggle(task);
    this.loadTodos();
  };

  removeCompleted = () => {
    todoService.removeCompleted();
    this.loadTodos();
  };

  componentDidMount() {
    this.loadTodos();
  }

  render() {
    return (
      <View style={styles.container}>
        <Header title="TodoNative" />
        <Input
          placeholder="Saisissez une nouvelle tâche"
          onSubmitEditing={this.addTodo}
        />
        <TodoList
          todos={this.state.todos}
          onDelete={this.removeTodo}
          onToggle={this.toggleTodo}
        />
        <Footer
          title="Supprimer les tâches terminées"
          onRemoveCompleted={this.removeCompleted}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
