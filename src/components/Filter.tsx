import React from "react";
import "./Filter.scss";
import { useRef } from "react";

export const Filter = () => {
  const refValue = useRef<HTMLInputElement | null>(null);
  const send = () => {
    let value = refValue?.current?.value;
    if (value) {
      console.log(value);
    }
  };
  return (
    <div className="filter">
      <div className="text-field">
        <label className="text-field__label" htmlFor="search">
          Найти по тегу
        </label>
        <div className="text-field__icon">
          <input
            ref={refValue}
            className="text-field__input"
            type="search"
            name="search"
            id="search"
            placeholder="Введите название тега"
          />
          <span className="text-field__aicon">
            <svg
              onClick={send}
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
