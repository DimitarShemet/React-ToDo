import React, { useState, useEffect } from "react";
import "./List.scss";
import { Note } from "./Note";
import dataItems from "../db.json";

type Listprops = {
  newNoteName: string;
  clearNoteInput: () => void;
  newFilterWord: string;
  clearFilterInput: () => void;
};

export const List = ({
  newNoteName,
  newFilterWord,
  clearNoteInput: clearInput,
  clearFilterInput,
}: Listprops) => {
  interface dataItems {
    id: number;
    name: string;
    tags: string[];
  }

  const [data, setData] = useState<dataItems[]>(dataItems);
  const getNewId = (data: dataItems[]): number => {
    return (
      data.reduce((maxId, note) => {
        const currId = note.id;
        return currId > maxId ? currId : maxId;
      }, 0) + 1
    );
  };
  useEffect(() => {
    if (newNoteName) {
      const updatedData = [...data];
      updatedData.push({
        id: getNewId(updatedData),
        name: newNoteName,
        tags: [],
      });
      setData(updatedData);
      clearInput();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newNoteName]);
  useEffect(() => {
    if (newFilterWord) {
      const updatedData = [...data];
      setData(updatedData.filter((elem) => elem.tags.includes(newFilterWord)));
      clearFilterInput();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newFilterWord]);

  const getNoteIndexById = (id: number) => {
    return data.findIndex((elem) => elem.id === id); //везде проставить
  };

  const removeNote = (id: number) => {
    alert(id);
    setData(data.filter((elem) => elem.id !== id));
  };
  const removeTag = (id: number, value: string, index: number) => {
    //Можно переписать без value
    const noteIndex = data.findIndex((elem) => elem.id === id);
    if (noteIndex !== -1) {
      const updatedNote = { ...data[noteIndex] };
      updatedNote.tags.splice(index, 1);
      const updatedData = [...data];
      updatedData[noteIndex] = updatedNote;
      setData(updatedData);
    }
  };
  const changeNoteName = (id: number, value: string) => {
    const noteIndex = data.findIndex((elem) => elem.id === id);
    if (noteIndex !== -1) {
      const updatedNote = { ...data[noteIndex] };
      updatedNote.name = value;
      const updatedData = [...data];
      updatedData[noteIndex] = updatedNote;
      setData(updatedData);
    }
  };
  const delHashFromNoteName = (id: number, value: string) => {
    const noteIndex = getNoteIndexById(id);
    if (noteIndex !== -1) {
      const updatedNote = { ...data[noteIndex] };
      updatedNote.name = value;
      const updatedData = [...data];
      updatedData[noteIndex] = updatedNote;
      console.log(updatedData);
      setData(updatedData);
    }
  };

  const changeTagName = (id: number, value: string, index: number) => {
    const noteIndex = getNoteIndexById(id);
    if (noteIndex !== -1) {
      const updatedNote = { ...data[noteIndex] };
      updatedNote.tags[index] = value;
      const updatedData = [...data];
      updatedData[noteIndex] = updatedNote;
      setData(updatedData);
    }
  };
  const addNewTag = (id: number, value?: string) => {
    const noteIndex = getNoteIndexById(id);
    if (noteIndex !== -1) {
      const updatedData = [...data];
      if (value) {
        updatedData[noteIndex].tags.push(`#${value}`);
      } else {
        updatedData[noteIndex].tags.push("#");
      }
      setData(updatedData);
    }
  };
  return (
    <div className="list_wrapper">
      <div className="list">
        {data.map((elem) => {
          return (
            <Note
              key={elem.id}
              name={elem.name}
              tags={elem.tags}
              id={elem.id}
              cbRemoveNote={removeNote}
              cbRemoveTag={removeTag}
              cbChangeNoteName={changeNoteName}
              cbChangeTagName={changeTagName}
              cbAddNewTag={addNewTag}
              delHashFromNoteName={delHashFromNoteName}
            />
          );
        })}
      </div>
    </div>
  );
};
