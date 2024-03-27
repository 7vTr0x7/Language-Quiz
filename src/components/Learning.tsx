import { ArrowBack, VolumeUp } from "@mui/icons-material";
import { Button, Container, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { fetchWords } from "../utils/features";
import { useDispatch } from "react-redux";
import { getWordsReq, getWordsSuccess } from "../utils/redux/slices";

const Learning = () => {
  const [count, setCount] = useState<number>(0);

  const params = useSearchParams()[0].get("language") as LangType;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const nextHandler = () => {
    setCount((prev) => (prev += 1));
  };

  const fetchData = async () => {
    dispatch(getWordsReq());
    const arr = await fetchWords("hi");
    dispatch(getWordsSuccess(arr));
  };

  useEffect(() => {
    fetchData();
  }, []);

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
          {count + 1} - {"Sample"}
        </Typography>
        <Typography color={"gray"} variant="h4">
          : {"LOL"}
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
