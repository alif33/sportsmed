import React, { Component } from "react";
import Slider from "react-slick";
import Layout from "./../src/components/Layout";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "red" }}
        onClick={onClick}
      />
    );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "green" }}
        onClick={onClick}
      />
    );
}

export default class Watch extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      infinite: true,

      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            dots: false,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
          },
        },
      ],
    };
    return (
      <>
        <Layout>
          <div
            className="container-fluid "
            id="watch"
            data-aos="fade-in"
            data-aos-easing="linear"
            data-aos-duration="1200"
          >
            <div className="container mx-auto">
              <div className="row ">
                {/* <div className="text-center"> */}
                <iframe
                  className="col-md-8 mx-auto col-12 "
                  height="350"
                  src="https://www.youtube-nocookie.com/embed/53cvnxsLuig"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>

                {/* </div> */}
              </div>
              <Slider {...settings} ref={(c) => (this.slider = c)}>
                <div className="mt-4 col-4">
                  <iframe
                    width="300"
                    height="200"
                    src="https://www.youtube-nocookie.com/embed/53cvnxsLuig"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="mt-4 mx-auto">
                  <iframe
                    width="300"
                    height="200"
                    src="https://www.youtube-nocookie.com/embed/53cvnxsLuig"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="mt-4 mx-auto">
                  <iframe
                    width="300"
                    height="200"
                    src="https://www.youtube-nocookie.com/embed/53cvnxsLuig"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="mt-4 mx-auto">
                  <iframe
                    width="300"
                    height="200"
                    src="https://www.youtube-nocookie.com/embed/53cvnxsLuig"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </Slider>
              <div className="container mt-4">
                <button
                  onClick={this.previous}
                  className="float-start border-0 bg-transparent text-white"
                >
                  Privious
                </button>
                <button
                  onClick={this.next}
                  className="float-end border-0 bg-transparent text-white"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </Layout>
      </>
    );
  }
}
