import React from "react";
import { Container } from "@material-ui/core";
import { Row } from "react-bootstrap";

import { withStyles } from "@material-ui/styles";
import styles from "./styles/InstructionsSection";

function InstructionsSection(props) {
  const { classes } = props;
  return (
    <section className={classes.InstructionsSection} id="InstructionsSection">
      <Container>
        <Row className="justify-content-center">
          <div className="col-12 col-lg-6">
            <div className="Instructions-Section-content text-center">
              <h2 className="text-white">
                How APPointment Works?
                <div className="HeadingUnderlineWhite"></div>
              </h2>

              <p className="text-white my-3 mt-sm-4 mb-sm-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laborum obcaecati dignissimos quae quo ad iste ipsum officiis
                deleniti asperiores sit.
              </p>
            </div>
          </div>
        </Row>

        <Row>
          <div className="col-12 col-md-4">
            <div className={classes.SingleWork}>
              <div className="work-icon">
                <i
                  className="fas fa-cloud-download-alt"
                  style={{ fontSize: "8rem", color: "white" }}
                ></i>
              </div>
              <h3 className="text-white py-3">Install the App</h3>
              <p className="text-white">
                Lorem Ipsum dolor sit amet, consectetur adipisicing elit. Eius
                saepe, volptates quis enim incidunt obcaecati
              </p>
              <div className={classes.SingleWorkArrow}>
                <i className="fas fa-chevron-right"></i>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className={classes.SingleWork}>
              <div className="work-icon">
                <i
                  className="far fa-user-circle"
                  style={{ fontSize: "8rem", color: "white" }}
                ></i>
              </div>
              <h3 className="text-white py-3">Setup your profile</h3>
              <p className="text-white">
                Lorem Ipsum dolor sit amet, consectetur adipisicing elit. Eius
                saepe, volptates quis enim incidunt obcaecati
              </p>
              <div className={classes.SingleWorkArrow}>
                <i className="fas fa-chevron-right"></i>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="single-work text-center p-3">
              <div className="work-icon">
                <i
                  className="far fa-calendar-alt"
                  style={{ fontSize: "8rem", color: "white" }}
                ></i>
              </div>
              <h3 className="text-white py-3">Book an Appointment</h3>
              <p className="text-white">
                Lorem Ipsum dolor sit amet, consectetur adipisicing elit. Eius
                saepe, volptates quis enim incidunt obcaecati
              </p>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default withStyles(styles)(InstructionsSection);
