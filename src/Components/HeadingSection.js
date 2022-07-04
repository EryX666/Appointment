import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Row } from "react-bootstrap";

import styles from "./styles/HeadingSectionStyles";

function Heading(props) {
  const { classes } = props;
  return (
    <section className={classes.HeadingSection} id="HeadingSection">
      <div className={classes.shapesContainer}>
        <div className={classes.bgShape}></div>
      </div>
      <div className="container h-100">
        <Row className="align-items-center h-100">
          <div className="col-12 col-md-7">
            <div className={classes.HeadingParagraphContainer}>
              <h1>Lorem Ipsum</h1>
              <p className="my-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Temporibus commodi, voluptate quaerat iure quidem expedita eos a
                blanditiis sint modi est error veniam facere eum at doloribus
                amet, nobis ut.
              </p>
              <div className={classes.StoreButtonsContainer}>
                <a href="/#">
                  <img
                    className={classes.GooglePlayButton}
                    src="/assets/GooglePlayButton.png"
                    alt="Google Play Store Button"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-5">
            <img
              className={classes.thumbnail}
              src="/assets/SideBySide 3D.png"
              alt="app thumbnail"
            />
          </div>
        </Row>
      </div>
    </section>
  );
}

export default withStyles(styles)(Heading);
