import React, { useState } from "react";
import useStyles from "./styles";
import {
  TextField,
  Button,
  Typography,
  Paper,
  Container,
  Card,
  Link,
} from "@material-ui/core";
import "../styles/index.css";
import Navbar from "../Compoment/Navbar";

//  gestion du post en cours
const SignUpPage = () => {
  const [postData, setPostData] = useState({
    firstName: "",
    LastName: "",
    email: "",
    phoneNumber: "",
    password: "",
  });
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const clear = () => {
    // setCurrentId(null);
    setPostData({});
  };
  return (
    <div>
      <Navbar />
      <Container className="form">
        <Paper className={classes.paper}>
          <form
            autoComplete="off"
            noValidate
            className={`${classes.root} ${classes.form}`}
            onSubmit={handleSubmit}
          >
            <Typography variant="h6"> Sign Up</Typography>
            <TextField
              name="FirsName"
              variant="outlined"
              label="First Name"
              fullWidth
              value={postData.FirsName}
              onChange={(e) => {
                setPostData({ ...postData, FirsName: e.target.value });
              }}
            />

            <TextField
              name="LastName"
              variant="outlined"
              label="Last Name"
              fullWidth
              value={postData.LastName}
              onChange={(e) => {
                setPostData({ ...postData, LastName: e.target.value });
              }}
            />
            <TextField
              name="email"
              variant="outlined"
              label="Your E-mail address"
              fullWidth
              value={postData.email}
              type="email"
              onChange={(e) => {
                setPostData({ ...postData, email: e.target.value });
              }}
            />
            <TextField
              name="phoneNumber"
              variant="outlined"
              label="phone Number"
              fullWidth
              value={postData.phoneNumber}
              type="tel"
              onChange={(e) => {
                setPostData({ ...postData, phoneNumber: e.target.value });
              }}
            />

            <TextField
              name="Password"
              variant="outlined"
              label="Password"
              fullWidth
              value={postData.Password}
              type="password"
              onChange={(e) => {
                setPostData({ ...postData, Password: e.target.value });
              }}
            />

            <Card elevation={2} fullWidth>
              <Link>Connect with google</Link>
            </Card>

            <Button
              className={classes.buttonSubmit}
              variant="contained"
              color="primary"
              size="large"
              type="submit"
              fullWidth
            >
              Submit
            </Button>
            <div className="mt-2"></div>
            <Button
              variant="contained"
              color="secondary"
              size="small"
              onClick={clear}
              fullWidth
            >
              Clear
            </Button>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default SignUpPage;
