import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
import React from 'react';
import { useHistory } from "react-router-dom";

import isAuth, { userType } from "../lib/isAuth";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = (props) => {
  const classes = useStyles();
  let history = useHistory();

  const handleClick = (location) => {
    console.log(location);
    history.push(location);
  };

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          <Button color="inherit" onClick={() => handleClick("/")}>Quizzzz</Button>
        </Typography>
        {isAuth() ? (
          userType() === "teacher" ? (
            <React.Fragment>
              <Button color="inherit" onClick={() => handleClick("/logout")}>
                Logout
              </Button>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Button color="inherit" onClick={() => handleClick("/home")}>
                Home
              </Button>
              <Button color="inherit" onClick={() => handleClick("/logout")}>
                Logout
              </Button>



            </React.Fragment>
          )
        ) : (
          <React.Fragment>

            <Button color="inherit" onClick={() => handleClick("/login")}>
              Logins
            </Button>
            <Button color="inherit" onClick={() => handleClick("/signup")}>
              Signup
            </Button>
          </React.Fragment>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
