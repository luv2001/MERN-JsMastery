import React from "react";
import { AppBar, Container, Typography } from "@material-ui/core";
import memories from "./images/memories.png";

const App = () => {
  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h3" align="center">
          Memories
          <image src={memories} alt="memories" height="60" />
        </Typography>
      </AppBar>
    </Container>
  );
};

export default App;
