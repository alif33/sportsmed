import React, { useState } from "react";
import NflApi from "../api/NflApi";
import Card from "../../src/components/Card";
import Headling from "../../src/components/Headling";
import Layout from "../../src/components/Layout";

const Nfl = () => {
  const [nflData, setNflDate] = useState(NflApi);
  return (
    <>
      <Layout>
        <div
          id="nfl"
          className="container-fluid bg-black "
          data-aos="fade-in"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div className="container text-center ">
            <Headling title="NFL PLAYER PROFILES" />
            <div className="row mx-auto ">
              {nflData.map(
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

export default Nfl;
