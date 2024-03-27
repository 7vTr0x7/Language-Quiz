import axios from "axios";
import { generate } from "random-words";

export const fetchWords = async (
  params: LangType
): Promise<WordsDataType[]> => {
  try {
    const words = generate(8) as string[];

    const newWords: WordType = words.map((item) => ({ Text: item }));

    const response = await axios.post(
      "https://microsoft-translator-text.p.rapidapi.com/translate",
      newWords,
      {
        params: {
          "to[0]": params,
          "api-version": "3.0",
          profanityAction: "NoAction",
          textType: "plain",
        },
        headers: {
          "content-type": "application/json",
          "X-RapidAPI-Key":
            "cbd38337b4msha6d8459c16c515fp1397e3jsnd42f4abe0c4b",
          "X-RapidAPI-Host": "microsoft-translator-text.p.rapidapi.com",
        },
      }
    );

    const receivedData: FetchedDataType[] = (await response?.data) || [];

    const arr: WordsDataType[] = receivedData.map((item, index) => {
      return {
        word: item.translations[0].text,
        meaning: newWords[index].Text,
        options: ["asd"],
      };
    });

    return arr;
  } catch (error) {
    console.log(error);
    return []; // Return an empty array in case of error
  }
};
