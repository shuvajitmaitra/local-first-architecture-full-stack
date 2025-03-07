import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import { useRowIds, useStore } from "tinybase/ui-react";
import Todo from "./Todo";

const TodoList = () => {
  const store = useStore("todo");
  const rowIds = useRowIds("todo", store);
  console.log("rowIds", JSON.stringify(rowIds, null, 2));

  return (
    <View style={styles.listContainer}>
      <FlatList
        data={rowIds}
        keyExtractor={(id) => id}
        renderItem={({ item: id }) => <Todo id={id} />}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
  },
  flatListContent: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
});
