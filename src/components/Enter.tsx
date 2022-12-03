import React from "react";
import "./Enter.scss";
import { useRef } from "react";

type PropsEnter = {
  cbAddNewNote: (value: string) => void;
  newNoteName: string;
};

export const Enter = ({ cbAddNewNote, newNoteName }: PropsEnter) => {
  const refValue = useRef<HTMLInputElement | null>(null);
  const send = () => {
    let value = refValue?.current?.value;
    if (value) {
      cbAddNewNote(value);
    }
  };
  return (
    <div className="enter">
      <div className="text-field">
        <label className="text-field__label" htmlFor="search">
          Добавить заметку
        </label>
        <div className="text-field__group">
          <input
            ref={refValue}
            className="text-field__input"
            type="search"
            id="search"
            name="search"
            placeholder="Введите название заметки"
          />
          <button className="text-field__btn" type="button" onClick={send}>
            Добавить
          </button>
        </div>
      </div>
    </div>
  );
};
