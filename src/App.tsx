import React, { useEffect, useState } from "react";
import "./App.scss";
import { Enter } from "./components/Enter";
import { Filter } from "./components/Filter";
import { List } from "./components/List";

export const App = () => {
  const [draftNoteName, setDraftNoteName] = useState("");
  const [draftFilterWord, setDraftFilterWord] = useState("");
  const [newNoteName, setNewNoteName] = useState("");
  const [newFilterWord, setNewFilterWord] = useState("");

  const addNewNote = (value: string) => {
    setNewNoteName(value);
  };
  const addNewFilterWord = (value: string) => {
    setNewFilterWord(value);
  };
  const clearDraftNoteName = () => {
    setDraftNoteName("");
  };
  const clearDraftFilterWord = () => {
    setDraftFilterWord("");
  };
  return (
    <div className="App">
      <div className="wrapper">
        <Enter
          cbAddNewNote={addNewNote}
          draftNoteName={draftNoteName}
          setDraftNoteName={setDraftNoteName}
        />
        <Filter
          cbAddNewFilterWord={addNewFilterWord}
          draftFilterWord={draftFilterWord}
          setDraftFilterWord={setDraftFilterWord}
        />
      </div>
      <List
        newNoteName={newNoteName}
        clearNoteInput={clearDraftNoteName}
        newFilterWord={newFilterWord}
        clearFilterInput={clearDraftFilterWord}
      />
    </div>
  );
};
