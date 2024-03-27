import axios from "axios";
import { generate } from "random-words";

export const fetchWords = async (params: LangType) => {
  try {
    const words = generate(8) as string[];

    const newWords: WordType = words.map((item) => ({ Text: item }));

    const { data } = await axios.post(
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

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
