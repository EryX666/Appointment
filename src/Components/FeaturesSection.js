import React from "react";
import { withStyles } from "@material-ui/core/styles";

import styles from "./styles/FeaturesSectionStyles";

function FeaturesSection(props) {
  const { classes } = props;
  return (
    <section className={classes.FeaturesSection} id="FeatureSection">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-6">
            <div className={classes.SectionHeading}>
              <h2>
                Explore Premium Features
                <div className="HeadingUnderline"></div>
              </h2>
              <p className="d-none d-sm-block mt-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                <br /> Laborum obcaecati dignissimos quae quo ad iste ipsum
                officiis deleniti asperiores sit.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="text-center p-4">
              <div className="mb-3">
                <i className={`${classes.FeatureIcon} far fa-address-book`}></i>
              </div>
              <div className="icon-text">
                <h3 className="mb-2">Fully functional</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Veritatis culpa expedita dignissimos.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="text-center p-4">
              <div className="mb-3">
                <i className={`${classes.FeatureIcon} far fa-calendar-alt`}></i>
              </div>
              <div>
                <h3 className="mb-2">Fully functional</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Veritatis culpa expedita dignissimos.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="text-center p-4">
              <div className="mb-3">
                <i
                  className={`${classes.FeatureIcon} fas fa-cloud-download-alt`}
                ></i>
              </div>
              <div>
                <h3 className="mb-2">Fully functional</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Veritatis culpa expedita dignissimos.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="text-center p-4">
              <div className="mb-3">
                <i
                  className={`${classes.FeatureIcon} fas fa-map-marked-alt`}
                ></i>
              </div>
              <div>
                <h3 className="mb-2">Fully functional</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Veritatis culpa expedita dignissimos.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="text-center p-4">
              <div className="mb-3">
                <i className={`${classes.FeatureIcon} fas fa-mobile-alt`}></i>
              </div>
              <div>
                <h3 className="mb-2">Fully functional</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Veritatis culpa expedita dignissimos.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="text-center p-4">
              <div className="mb-3">
                <i className={`${classes.FeatureIcon} far fa-user`}></i>
              </div>
              <div>
                <h3 className="mb-2">Fully functional</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Veritatis culpa expedita dignissimos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default withStyles(styles)(FeaturesSection);
