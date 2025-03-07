import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useStore } from "tinybase/ui-react";

const Todo = ({ id }: { id: string }) => {
  const store = useStore("todo");
  const task = store?.getRow("todo", id);
  console.log("task", JSON.stringify(task, null, 2));
  return (
    <Pressable onPress={() => store?.delRow("todo", id)}>
      <Text>{task?.task || ""}</Text>
    </Pressable>
  );
};

export default Todo;

const styles = StyleSheet.create({});
