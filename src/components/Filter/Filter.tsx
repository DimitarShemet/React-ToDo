import React from "react";
import "./Filter.scss";
import { SearchIcon } from "../icons/SearchIcon";

type PropsFilter = {
  cbAddNewFilterWord: (value: string) => void;
  draftFilterWord: string;
  setDraftFilterWord: (value: string) => void;
};

export const Filter = ({
  cbAddNewFilterWord,
  draftFilterWord,
  setDraftFilterWord,
}: PropsFilter) => {
  const sendFilterWord = () => {
    if (draftFilterWord) {
      cbAddNewFilterWord(draftFilterWord);
    }
  };
  const handleInputChange = (EO: React.ChangeEvent<HTMLInputElement>) => {
    setDraftFilterWord(EO.target.value);
  };

  return (
    <div className="filter">
      <div className="text-field">
        <label className="text-field__label" htmlFor="search">
          Найти по тегу
        </label>
        <div className="text-field__icon">
          <input
            className="text-field__input"
            type="search"
            name="search"
            id="search"
            placeholder="Введите название тега"
            onChange={handleInputChange}
            value={draftFilterWord}
          />
          <span className="text-field__aicon" onClick={sendFilterWord}>
            <SearchIcon />
          </span>
        </div>
      </div>
    </div>
  );
};
