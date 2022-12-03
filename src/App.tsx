import React, { useState } from "react";
import "./App.scss";
import { Enter } from "./components/Enter";
import { Filter } from "./components/Filter";
import { List } from "./components/List";

export const App = () => {
  const [newNoteName, setNewNoteName] = useState("");
  console.log(newNoteName);
  const addNewNote = (value: string) => {
    setNewNoteName(value);
  };
  return (
    <div className="App">
      <div className="wrapper">
        <Enter cbAddNewNote={addNewNote} newNoteName={newNoteName} />
        <Filter />
      </div>
      <List newNoteName={newNoteName} clearInput={setNewNoteName} />
    </div>
  );
};
