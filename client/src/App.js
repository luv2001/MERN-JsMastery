import React from "react";
import { AppBar, Container, Grid, Grow, Typography } from "@material-ui/core";
import memories from "./images/memories.png"; // issue 1
import Posts from "./Components/Posts/Posts";
import Form from "./Components/Form/Form";
import useStyles from "./styles";

const App = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit" className={classes.appBar}>
        <Typography variant="h3" align="center" className={classes.heading}>
          Memories
          <image
            src={memories}
            alt="memories"
            height="60"
            className={classes.image}
          />
        </Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            align-items="streach"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={7}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
