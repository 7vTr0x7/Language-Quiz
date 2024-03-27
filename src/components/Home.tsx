import { Button, Container, Stack, Typography } from "@mui/material";

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
          <Button key={item.code} variant="contained">
            {item.name}
          </Button>
        ))}
      </Stack>
    </Container>
  );
};

export default Home;
