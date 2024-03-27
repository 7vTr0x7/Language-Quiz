import { Button, Container, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const languages = [
  {
    name: "Japanese",
    code: "ja",
  },
  {
    name: "Hindi",
    code: "hi",
  },
  {
    name: "Spanish",
    code: "es",
  },
  {
    name: "French",
    code: "fr",
  },
];

const Home = () => {
  const navigate = useNavigate();

  const langSelector = (language: string): void => {
    navigate(`/learn?language=${language}`);
  };

  return (
    <Container maxWidth={"sm"}>
      <Typography variant="h4" p={"2rem"} textAlign={"center"}>
        Welcome, Lets Begin Your Learning Journey
      </Typography>

      <Stack
        direction={"row"}
        spacing={"2rem"}
        p={"2rem"}
        alignItems={"center"}
        justifyContent={"center"}>
        {languages.map((item) => (
          <Button
            onClick={() => langSelector(item.code)}
            key={item.code}
            variant="contained">
            {item.name}
          </Button>
        ))}
      </Stack>
      <Typography textAlign={"center"}>
        Choose One Language From Above
      </Typography>
    </Container>
  );
};

export default Home;
