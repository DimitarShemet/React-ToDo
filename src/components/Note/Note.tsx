import React, { Fragment, useState, useEffect } from "react";
import "./Note.scss";
import { BasketIcon } from "../icons/BasketIcon";
import { CrossIcon } from "../icons/CrossIcon";
import { PlusIcon } from "../icons/PlusIcon";

type PropsNote = {
  id: number;
  name: string;
  tags: string[];
  cbRemoveNote: (id: number) => void;
  cbRemoveTag: (id: number, index: number) => void;
  cbChangeNoteName: (id: number, value: string) => void;
  cbChangeTagName: (id: number, value: string, index: number) => void;
  cbAddNewTag: (id: number, value?: string) => void;
};

export const Note = ({
  id,
  name,
  tags,
  cbRemoveNote,
  cbRemoveTag,
  cbChangeNoteName,
  cbChangeTagName,
  cbAddNewTag,
}: PropsNote) => {
  const [inputValue, setInputValue] = useState(name);
  useEffect(() => {
    if (name) {
      setInputValue(name);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);
  const cbDeleteNote = () => {
    cbRemoveNote(id);
  };
  const removeTag = (index: number) => {
    cbRemoveTag(id, index);
  };
  const changeNoteName = (EO: React.ChangeEvent<HTMLInputElement>) => {
    const currValue = EO.target.value;
    setInputValue(currValue);
  };
  const changeTagName = (
    EO: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    let currValue = EO.target.value;
    if (currValue[0] !== "#") {
      currValue = `#${currValue}`;
    }
    cbChangeTagName(id, currValue, index);
  };
  const addNewTag = () => {
    cbAddNewTag(id);
  };
  const addNewTagFromValue = () => {
    const splittedInput = inputValue.split("#");
    const valueForNote = splittedInput[0];
    cbChangeNoteName(id, valueForNote);
    setInputValue(valueForNote);
    if (splittedInput.length > 1) {
      const tags = [...splittedInput];
      tags.shift();
      tags
        .filter((t) => t)
        .forEach((tag) => {
          cbAddNewTag(id, tag);
        });
    }
  };

  return (
    <div className="note" key={id}>
      <div className="text">
        <div className="note__name">
          <input
            onChange={changeNoteName}
            value={inputValue}
            onBlur={addNewTagFromValue}
          />
          <span onClick={cbDeleteNote}>
            <CrossIcon />
          </span>
        </div>
        {tags.length === 0 ? (
          <div className="tag__plus">
            <span onClick={addNewTag}>
              <PlusIcon />
            </span>
          </div>
        ) : null}
        {tags.map((elem, index) => {
          return (
            <Fragment key={index}>
              <div className="tag" key={index}>
                <input
                  key={index}
                  onChange={(event) => changeTagName(event, index)}
                  value={elem}
                ></input>
                <span onClick={() => removeTag(index)}>
                  <BasketIcon />
                </span>
              </div>
              <>
                {index === tags.length - 1 ? (
                  <>
                    <div className="tag__plus">
                      <span onClick={addNewTag}>
                        <PlusIcon />
                      </span>
                    </div>
                  </>
                ) : null}
              </>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};
