import AddTodo from "@/components/AddTodo";
import { useCreateMergeableStore, useProvideStore } from "tinybase/ui-react";
import { createMergeableStore } from "tinybase/mergeable-store";
import useAndStartPersister from "@/hooks/useAndStartPersister";
import TodoList from "@/components/TodoList";
import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function HomeScreen() {
  const store = useCreateMergeableStore(() => createMergeableStore());
  useAndStartPersister(store);
  useProvideStore("todo", store);
  const { top } = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: top }]}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Tasks</Text>
        <AddTodo />
      </View>
      <TodoList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#999",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignItems: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
});
