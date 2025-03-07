// components/useAndStartPersister.ts
import * as SQLite from "expo-sqlite";
import { createExpoSqlitePersister } from "tinybase/persisters/persister-expo-sqlite";
import { useCreatePersister } from "tinybase/ui-react";
import { createStore } from "tinybase";

const useAndStartPersister = (store: ReturnType<typeof createStore>) => {
  useCreatePersister(
    store,
    (store) => createExpoSqlitePersister(store, SQLite.openDatabaseSync("todos.db")),
    [],
    async (persister) => {
      await persister.load();
      await persister.startAutoSave();
    }
  );
};

export default useAndStartPersister;
