import { ArrowBack, VolumeUp } from "@mui/icons-material";
import { Button, Container, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { fetchWords } from "../utils/features";
import { useDispatch, useSelector } from "react-redux";
import {
  clearState,
  getWordsFail,
  getWordsReq,
  getWordsSuccess,
} from "../utils/redux/slices";
import Loader from "./Loader";

const Learning = () => {
  const [count, setCount] = useState<number>(0);

  const params = useSearchParams()[0].get("language") as LangType;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading, error, words } = useSelector(
    (store: { root: StateType }) => store.root
  );

  const nextHandler = () => {
    setCount((prev) => (prev += 1));
  };

  const fetchData = async () => {
    try {
      dispatch(getWordsReq());
      const arr = await fetchWords(params || "hi");
      dispatch(getWordsSuccess(arr));

      console.log(arr);
      if (error) {
        dispatch(clearState());
      }
    } catch (error) {
      dispatch(getWordsFail("error"));
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <Loader />;

  return (
    <Container maxWidth={"sm"} sx={{ padding: "1rem" }}>
      <Button
        sx={{ color: "black" }}
        onClick={
          count === 0
            ? () => navigate("/")
            : () => setCount((prev) => (prev -= 1))
        }>
        <ArrowBack />
      </Button>

      <Typography m={"2rem 0"} p={"0 2rem"}>
        Learning Made Easy
      </Typography>

      <Stack direction={"row"} spacing={"1rem"} p={"0 2rem"}>
        <Typography variant="h4">
          {count + 1} - {words[count]?.word}
        </Typography>
        <Typography color={"gray"} variant="h4">
          : {words[count]?.meaning}
        </Typography>
        <Button sx={{ color: "black", borderRadius: "50%" }}>
          <VolumeUp />
        </Button>
      </Stack>

      <Button
        sx={{
          margin: "3rem 0",
        }}
        variant="contained"
        fullWidth
        onClick={count === 7 ? () => navigate("/quiz") : nextHandler}>
        {count === 7 ? "Test" : "Next"}
      </Button>
    </Container>
  );
};

export default Learning;
