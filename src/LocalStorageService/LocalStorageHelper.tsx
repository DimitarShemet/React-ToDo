import { DataItem } from "../components/List/List";

const DATA_FIELD = "dataItems";

function getDataFromLocalStorage(): DataItem[] | null {
  const savedData = localStorage.getItem(DATA_FIELD) as string;
  try {
    return JSON.parse(savedData);
  } catch {
    return null;
  }
}

function setDataToLocalStorage(data: DataItem[]): void {
  const NewLocalStorageData = JSON.stringify(data);
  localStorage.setItem(DATA_FIELD, NewLocalStorageData);
}

export {  getDataFromLocalStorage, setDataToLocalStorage };
