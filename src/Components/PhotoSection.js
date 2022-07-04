import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import { Row } from "react-bootstrap";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./styles/PhotoSectionStyles";

function PhotoSection(props) {
  const { classes } = props;
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 4500,
    cssEase: "linear",
    draggable: false,
    pauseOnDotsHover: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    centerPadding: "150px",
    className: "single-screenshot",
    dotsClass: "slick-dots indigo",
  };
  return (
    <section className={classes.PhotoSection} id="PhotoSection">
      <Container>
        <Row className="justify-content-center">
          <div className="col-12 col-md-10 col-lg-7">
            <div className="text-center">
              <h2 className="text-capitalize">
                Lorem Ipsum
                <div className="HeadingUnderline"></div>
              </h2>
              <p className="d-none d-sm-block mt-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laborum obcaecati dignissimos quae quo ad iste ipsum officiis
                deleniti asperiores sit.
              </p>
            </div>
          </div>
        </Row>
        <Row>
          <div className="col-12">
            <Slider {...settings}>
              <img
                className={classes.singleScreenshot}
                src={"assets/Photo_Gallery/1.jpeg"}
                alt="App"
              />
              <img
                className={classes.singleScreenshot}
                src={"assets/Photo_Gallery/2.jpeg"}
                alt="App"
              />
              <img
                className={classes.singleScreenshot}
                src={"assets/Photo_Gallery/3.jpeg"}
                alt="App"
              />
              <img
                className={classes.singleScreenshot}
                src={"assets/Photo_Gallery/4.jpeg"}
                alt="App"
              />
              <img
                className={classes.singleScreenshot}
                src={"assets/Photo_Gallery/5.jpeg"}
                alt="App"
              />
            </Slider>
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default withStyles(styles)(PhotoSection);
