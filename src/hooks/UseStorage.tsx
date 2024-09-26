import { useEffect, useState } from "react";

interface UseStorageProps<T> {
  key: string;
  val: T;
}

interface UseStorageData<T> {
  get: T;
  set: React.Dispatch<React.SetStateAction<T>>;
}

const useStorage = <T,>(props: UseStorageProps<T>): UseStorageData<T> => {
  const { key, val } = props;
  const [storedValue, setStoredValue] = useState<T>(() => {
    const item = localStorage.getItem(key);
    return item === undefined || item === null ? val : JSON.parse(item);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue));
  }, [key, storedValue]);

  return {
    get: storedValue,
    set: setStoredValue,
  } as UseStorageData<T>;
};

export default useStorage;
