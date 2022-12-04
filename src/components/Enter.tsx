import React from "react";
import "./Enter.scss";

type PropsEnter = {
  cbAddNewNote: (value: string) => void;
  draftNoteName: string;
  setDraftNoteName: (value: string) => void;
};

export const Enter = ({
  cbAddNewNote,
  setDraftNoteName,
  draftNoteName,
}: PropsEnter) => {
  const sendNote = () => {
    if (draftNoteName) {
      cbAddNewNote(draftNoteName);
    }
  };
  const handleInputChange = (EO: React.ChangeEvent<HTMLInputElement>) => {
    setDraftNoteName(EO.target.value);
  };

  return (
    <div className="enter">
      <div className="text-field">
        <label className="text-field__label" htmlFor="search">
          Добавить заметку
        </label>
        <div className="text-field__group">
          <input
            className="text-field__input"
            type="search"
            id="search"
            name="search"
            placeholder="Введите название заметки"
            value={draftNoteName}
            onChange={handleInputChange}
          />
          <button className="text-field__btn" type="button" onClick={sendNote}>
            Добавить
          </button>
        </div>
      </div>
    </div>
  );
};
