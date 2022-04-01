import React, { useState } from "react";
import MlbApi from "./api/MlbApi";
import Headling from "./../src/components/Headling";
import Card from "./../src/components/Card";
import Layout from "./../src/components/Layout";

const Mlb = () => {
  const [mlbData, setMlbDate] = useState(MlbApi);
  return (
    <>
      <Layout>
        <div
          id="mlb"
          className="container-fluid bg-black "
          data-aos="fade-in"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div className="container text-center ">
            <Headling title="MLB PLAYER PROFILES" />
            <div className="row mx-auto ">
              {mlbData.map(({ id, image, name, desc }) => {
                return (
                  <Card
                    key={id}
                    id={id}
                    image={image}
                    name={name}
                    desc={desc}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Mlb;
