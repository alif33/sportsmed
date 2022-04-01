import React from "react";
import { useRouter } from "next/router";
import Layout from "../../src/components/Layout";

const Details = () => {
  const { query } = useRouter();

  return (
    <>
      <Layout>
        <div
          className="text-center"
          id="fullpage"
          data-aos="fade-in"
          data-aos-easing="ease-in-out"
          data-aos-duration="1000"
          style={{ backgroundImage: `url(${query.image})` }}
        >
          <div className="fullpage_box text-white mt-4 px-4">
            <p className="position-absolute top-0 right-0 ">
              Updated : {new Date(Date.now()).toLocaleString()}
            </p>
            <h1 className="fw-bold">{query.name}</h1>
            <h4 className="mt-4 mb-2">{query.problem}</h4>
            <h4 className="mt-4 mb-2">
              {query.short === "" ? "" : `Short:  ${query.short}`}
            </h4>
            <h4 className="mt-4 mb-4">
              {query.long === "" ? "" : `long-Time:  ${query.long}`}
            </h4>
            <h3 className="mt-4 container mb-2 lh-sm">{query.title}</h3>
            <p className="fullpageParagraph container lh-lg  text-center mt-5 mb-2">
              {query.desc}
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Details;
