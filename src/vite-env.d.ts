/// <reference types="vite/client" />

type LangType = "ja" | "hi" | "es" | "fr";

type WordsDataType = {
  word: string;
  meaning: string;
  options: string[];
};

type StateType = {
  loading: boolean;
  result: string[];
  words: WordsDataType[];
  error?: string;
};

type WordType = { Text: string }[];

type FetchedDataType = {
  translations: { text: string }[];
};
