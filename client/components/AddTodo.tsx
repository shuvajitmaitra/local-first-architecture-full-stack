import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useStore } from "tinybase/ui-react";
function generateRandomId() {
  return "_" + Math.random().toString(36).substring(2, 11);
}
function generateRandomTask() {
  const tasks = [
    "Take out the trash",
    "Do the laundry",
    "Wash the dishes",
    "Write some code",
    "Read a book",
    "Go for a walk",
    "Plan your day",
    "Organize your desk",
    "Exercise for 30 minutes",
    "Call a friend",
  ];

  const randomIndex = Math.floor(Math.random() * tasks.length);
  return tasks[randomIndex];
}
const AddTodo = () => {
  const store = useStore("todo");
  const handleAddTodo = () => {
    store?.addRow("todo", {
      id: generateRandomId(),
      task: generateRandomTask(),
      isComplete: false,
    });
  };
  return (
    <Button
      title="add Task"
      onPress={() => {
        handleAddTodo();
      }}
    />
  );
};

export default AddTodo;

const styles = StyleSheet.create({});
