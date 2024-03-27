import {
  Button,
  Container,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearState } from "../utils/redux/slices";
import { countMatchingElement } from "../utils/features";

const Result = () => {
  const { words, result } = useSelector(
    (store: { root: StateType }) => store.root
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const correctAns = countMatchingElement(
    result,
    words.map((item) => item.meaning)
  );
  const percentage = (correctAns / words.length) * 100;

  const resetHandler = (): void => {
    navigate("/");
    dispatch(clearState());
  };

  return (
    <Container maxWidth={"sm"}>
      <Typography variant="h4" color={"lightblue"} m={"2rem 0"}>
        Result
      </Typography>
      <Typography variant="h6" m={"1rem"}>
        You Got Correct {correctAns} Out Of {words?.length}
      </Typography>

      <Stack direction={"row"} justifyContent={"space-evenly"}>
        <Stack>
          <Typography variant="h5" m={"1rem 0"}>
            You Answers
          </Typography>
          <List>
            {result.map((item, index) => (
              <ListItem key={item}>
                {index + 1} - {item}
              </ListItem>
            ))}
          </List>
        </Stack>
        <Stack>
          <Typography variant="h5" m={"1rem 0"}>
            Correct Answers
          </Typography>
          <List>
            {words.map((item, index) => (
              <ListItem key={item.meaning}>
                {index + 1} - {item.meaning}
              </ListItem>
            ))}
          </List>
        </Stack>
      </Stack>

      <Typography
        variant="h5"
        m={"1rem"}
        color={percentage > 50 ? "green" : "red"}>
        {percentage > 50 ? "Pass" : "Fail"}
      </Typography>

      <Button
        onClick={resetHandler}
        variant="contained"
        sx={{ margin: "1rem" }}>
        Reset
      </Button>
    </Container>
  );
};

export default Result;
