import React from "react";
import Layout from "./../src/components/Layout";

const Podcast = () => {
  return (
    <>
      <Layout>
        <div
          id="podcast"
          className="container-fluid"
          data-aos="fade-in"
          data-aos-easing="linear"
          data-aos-duration="1200"
        >
          <div className="container mt-4 ">
            <div className="my-4 ">
              <div className=" searchbar">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input
                  type="text"
                  className=" bg-transparent py-2 px-4 border-0 text-white "
                  placeholder="Search Podcast "
                  name="search"
                  id="search"
                />
              </div>
            </div>
            <div className="py-4">
              <div className="mt-2">
                <div className="podcastBox d-flex justify-content-center align-items-center gap-md-4 gap-2">
                  <div className="podcastImage">
                    <i class="fa-solid fa-play"></i>
                    <img
                      src="/images/UltimateLogo.png"
                      class="img-fluid|thumbnail rounded-top|rounded-end|rounded-bottom|rounded-start|rounded-circle| "
                      alt="not fiend"
                    />
                  </div>
                  <div className="col-md-8 col-11 lh-md">
                    <a href="#" className="text-decoration-none">
                      <h3 className="text-white">NFL Injury Report Week 2</h3>
                    </a>
                    <p className="my-2">
                      9/23/2020 | 3 min{" "}
                      <span className="border text-white border-white px-1 py-1">
                        latest Episode
                      </span>
                    </p>
                    <p className="text-white">
                      Dr. Chona breaks down the latest injury news from Week 2
                      of the National Football League.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <div className="podcastBox d-flex justify-content-center align-items-center gap-md-4 gap-2">
                  <div className="podcastImage">
                    <i class="fa-solid fa-play"></i>
                    <img
                      src="/images/UltimateLogo.png"
                      class="img-fluid|thumbnail rounded-top|rounded-end|rounded-bottom|rounded-start|rounded-circle| "
                      alt="not fiend"
                    />
                  </div>
                  <div className="col-md-8 col-11 lh-md">
                    <a href="#" className="text-decoration-none">
                      <h3 className="text-white">Week 1 NFL Injury Report</h3>
                    </a>
                    <p>9/16/2020 | 4 min</p>
                    <p className="text-white">
                      Dr. Chona breaks down the most important injury news for
                      Week 1 around the NFL.import Layout from
                      './../src/components/Layout';
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <div className="podcastBox d-flex justify-content-center align-items-center gap-md-4 gap-2">
                  <div className="podcastImage">
                    <i class="fa-solid fa-play"></i>
                    <img
                      src="/images/UltimateLogo.png"
                      class="img-fluid|thumbnail rounded-top|rounded-end|rounded-bottom|rounded-start|rounded-circle| "
                      alt="not fiend"
                    />
                  </div>
                  <div className="col-md-8 col-11 lh-md">
                    <a href="#" className="text-decoration-none">
                      <h3 className="text-white">
                        Kevin Durant - Performance Expectations2
                      </h3>
                    </a>
                    <p>4/17/2020 | 7 min</p>
                    <p className="text-white">
                      Detailed post-injury performance expectations for Kevin
                      Durant.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <div className="podcastBox d-flex justify-content-center align-items-center gap-md-4 gap-2">
                  <div className="podcastImage">
                    <i class="fa-solid fa-play"></i>
                    <img
                      src="/images/UltimateLogo.png"
                      class="img-fluid|thumbnail rounded-top|rounded-end|rounded-bottom|rounded-start|rounded-circle| "
                      alt="not fiend"
                    />
                  </div>
                  <div className="col-md-8 col-11 lh-md">
                    <a href="#" className="text-decoration-none">
                      <h3 className="text-white">
                        Tua Tagovailoa - Injury-by-Injury Breakdown
                      </h3>
                    </a>
                    <p>4/12/2020 | 9 min</p>
                    <p className="text-white">
                      Injury-by-injury breakdown and expectations for Tua
                      Tagovailoa.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Podcast;
