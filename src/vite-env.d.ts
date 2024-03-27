/// <reference types="vite/client" />

type LangType = "ja" | "hi" | "es" | "fr";

interface IWord {
  word: string;
  meaning: string;
  options: string[];
}

type StateType = {
  loading: boolean;
  result: string[];
  words: IWord[];
  error?: string;
};

type WordType = { Text: string }[];
