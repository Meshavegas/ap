import React from "react";
import Footer from "../Compoment/Footer";
import Navbar from "../Compoment/Navbar";
import { CircularProgress } from '@material-ui/core'
import { useState } from 'react'

const Etablissements = () => {

  const [isLoaded, setIsLoaded] = useState(false);



  return (
    <div>
      <Navbar />
      <div className="frame">

        {
          !isLoaded && (
            <div className="circular">
              <CircularProgress className="spinner_circle" size={100} />
            </div>
          )
        }


        <iframe
          id="my-iframe"
          width="100%"
          src="https://app.lapentor.com/sphere/iai-1671214012?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2MzljYjNhZmY5YmM0NzUzZTkwOGM4NTkiLCJpYXQiOjE2NzMxMzYwMTIsImV4cCI6MTY3NDM0NTYxMn0.36MLu3lZGXOs2QYJh-hXoUlM7rCqlVQ39Bg5nezYikE&scene=63bad33cc82ce5cda509185a"
          type="video/mp4"
          title="Youtube Player"
          allowFullScreen
          onLoad={(e) => { setIsLoaded(true) }}
          style={{ border: "none" }}

        />



      </div>
      <Footer />
    </div>
  );
};

export default Etablissements;
