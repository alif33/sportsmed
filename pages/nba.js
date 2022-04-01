import React, { useState } from "react";
import NbaApi from "./api/NbApi";
import Card from "./../src/components/Card";
import Headling from "./../src/components/Headling";
import Layout from "../src/components/Layout";

const Nba = () => {
  const [nbaData, setNbaDate] = useState(NbaApi);
  return (
    <>
      <Layout>
        <div
          id="nba"
          className="container-fluid bg-black "
          data-aos="fade-in"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div className="container text-center ">
            <Headling title="NBA PLAYER PROFILES" />
            <div className="row mx-auto ">
              {nbaData.map(
                ({ id, image, name, problem, short, long, title, desc }) => {
                  return (
                    <Card
                      key={id}
                      id={id}
                      image={image}
                      name={name}
                      problem={problem}
                      short={short}
                      long={long}
                      title={title}
                      desc={desc}
                    />
                  );
                }
              )}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Nba;
