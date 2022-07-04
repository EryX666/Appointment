import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import { Row } from "react-bootstrap";
import { Axios, db } from "../firebase/firebaseConfig";

import styles from "./styles/ContactSectionStyles";

function ContactSection(props) {
  const [formData, setFormData] = useState({});
  const { classes } = props;

  const updateInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    sendEmail();
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };
  const sendEmail = () => {
    Axios.post(
      "https://us-central1-appointment-793e7.cloudfunctions.net/submit",
      formData
    )
      .then((res) => {
        db.collection("emails").add({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          time: new Date(),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <section className={classes.ContactSection} id="ContactSection">
      <Container>
        <Row className="justify-content-center">
          <div className="col-12 col-md-10 col-lg-6">
            <div className="text-center">
              <h2 className="text-capitalize">
                Stay Tuned
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
        <Row className="justify-content-between">
          <div className="col-12 col-md-5">
            <div className={classes.contactUs}>
              <p className="mb-3">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old.
              </p>
              <ul className={classes.contactUsList}>
                <li className="py-2">
                  <a className={classes.media} href="/#">
                    <div className={classes.socialIcon}>
                      <i class="fas fa-home"></i>
                    </div>
                    <span className="media-body align-self-center">
                      Vestibulum nulla libero, convallis, tincidunt suscipit
                      diam, DC 2002
                    </span>
                  </a>
                </li>
                <li className="py-2">
                  <a className={classes.media} href="/#">
                    <div className={classes.socialIcon}>
                      <i class="fas fa-phone-square-alt"></i>
                    </div>
                    <span className="media-body align-self-center">
                      +1 230 456 789-012 345 6789
                    </span>
                  </a>
                </li>
                <li className="py-2">
                  <a className={classes.media} href="/#">
                    <div className={classes.socialIcon}>
                      <i class="fas fa-at"></i>
                    </div>
                    <span className="media-body align-self-center">
                      exampledomain@domain.com
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-6 pt-4 pt-md-0">
            <div className="contact-box text-center">
              <form
                className="contact-form"
                noValidate=""
                onSubmit={handleSubmit}
              >
                <div className="row">
                  <div className="col-12">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        name="name"
                        placeholder="Name"
                        required=""
                        value={formData.name || ""}
                        onChange={updateInput}
                      ></input>
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="email"
                        name="email"
                        placeholder="Email"
                        required=""
                        value={formData.email || ""}
                        onChange={updateInput}
                      ></input>
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject || ""}
                        onChange={updateInput}
                      ></input>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        name="message"
                        placeholder="Message"
                        required=""
                        value={formData.message || ""}
                        onChange={updateInput}
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-12">
                    <button
                      className="btn btn-lg btn-block mt-3"
                      type="submit"
                      style={{
                        background: "#0362e2",
                        height: "60px",
                        borderRadius: "8px",
                        color: "#fff",
                      }}
                    >
                      <span className="text-white pr-3">
                        <i class="fas fa-paper-plane"></i>
                      </span>
                      Send Us Your Thoughts
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default withStyles(styles)(ContactSection);
