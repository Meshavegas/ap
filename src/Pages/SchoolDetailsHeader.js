import React from "react";
import { Container, Grid, Paper, Typography, Button } from "@material-ui/core";
import "./styles.css";
import logo_iai from "../assets/iai.jpeg";

import { TabView, TabPanel } from "primereact/tabview";
import { Card } from "primereact/card";

import Navbar from "../Compoment/Navbar";
import Footer from "../Compoment/Footer";
// Drag and drop
import { Draggable, Droppable } from "react-drag-and-drop";

function SchoolDetailsHeader() {
  const imageCard = (image) => {
    return (
      <>
        <img alt="SchollPost" src={image} />
      </>
    );
  };

  const CardFooter = (date) => {
    return (
      <Grid justifyContent="flex-end">
        <Typography h2>{date}</Typography>
      </Grid>
    );
  };
  const Post = [
    {
      title: "titre",
      text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
      image: logo_iai,
      date: "27/06/2022",
    },
    {
      title: "titre",
      text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
      image: logo_iai,
      date: "27/06/2022",
    },

    {
      title: "titre",
      text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
      image: logo_iai,
      date: "27/06/2022",
    },
  ];

  return (
    <div>
      <Navbar />
      <Container maxWidth="xl">
        <Paper elevation={2} className="my_flexbox">
          <div className="">
            <img src={logo_iai} className="school_icon" alt="school logo" />
          </div>
          <div className="right">
            {" "}
            <Button
              color="primary"
              className="btn_postulate"
              variant="contained"
            >
              {" "}
              Posez votre candidature{" "}
            </Button>{" "}
          </div>
        </Paper>
        <div className="tabs_views">
          <TabView>
            <TabPanel header="Posts">
              <Grid
                container
                justifyContent="space-between"
                alignItems="stretch"
                spacing={3}
              >
                {Post.map((p) => (
                  <Grid item lg={4} sm={6} className="card_content">
                    <Card
                      header={imageCard(p.image)}
                      footer={CardFooter(p.date)}
                    >
                      <p className="text_justify">{p.text}</p>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </TabPanel>
            <TabPanel header="Informations">Lorem</TabPanel>
            <TabPanel header="integrate">Lorem</TabPanel>
          </TabView>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default SchoolDetailsHeader;
