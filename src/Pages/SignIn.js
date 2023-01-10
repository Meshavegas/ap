import React, { useState } from "react";
import useStyles from "./styles";
import {
  TextField,
  Button,
  Typography,
  Paper,
  Container,
  Card,
  Grid,
} from "@material-ui/core";
import "../styles/index.css";
import blackstudents from '../assets/blackstudents.jpg'
import Navbar from "../Compoment/Navbar";
import { Link } from "react-router-dom";
import Footer from "../Compoment/Footer";

//  gestion du post en cours
const SignInPage = () => {
  const [postData, setPostData] = useState({
    email: "",
    password: "",
  });
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
  };


  return (
    <div>
      <Navbar />
      <Container className="form" maxWidth>
        <Grid container >
          <Grid lg={6} md={6} sm={12} className="image_left">
            <img src={blackstudents} className="img" />
          </Grid>
          <Grid lg={6} md={6} sm={12}>
            <div className="form_state">
              <Paper className={classes.paper}>
                <form
                  autoComplete="off"
                  noValidate
                  className={`${classes.root} ${classes.form}`}
                  onSubmit={handleSubmit}
                >
                  <div>
                    <Typography variant="h6"> Sign In</Typography>
                  </div>

                  <div className="icon_user">
                    <br />
                    <i className="pi pi-user"></i>
                  </div>

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

                  <div className="google_list">
                    <Link className="link"> <i className="pi pi-google"></i> Connect with google</Link>
                  </div>
                  <Link to="/singin" style={{ TextDecoder: "none" }}>
                    <h5>Crée un Compte</h5>
                  </Link>

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

                </form>
              </Paper>
            </div>
          </Grid>
        </Grid>
        <Footer/>
      </Container>
    </div>
  );
};

export default SignInPage;
