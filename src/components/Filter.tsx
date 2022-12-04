import React from "react";
import "./Filter.scss";
import { useRef } from "react";

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
  const refFilterValue = useRef<HTMLInputElement | null>(null);
  const sendFilterWord = () => {
    let value = refFilterValue?.current?.value;
    if (value) {
      cbAddNewFilterWord(value);
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
            ref={refFilterValue}
            className="text-field__input"
            type="search"
            name="search"
            id="search"
            placeholder="Введите название тега"
            onChange={handleInputChange}
            value={draftFilterWord}
          />
          <span className="text-field__aicon">
            <svg
              onClick={sendFilterWord}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};
