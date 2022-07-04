export default {
  FooterSection: {
    position: "fixed",
    display: "block",
    bottom: "0",
    right: "0",
    left: "0",
    zIndex: "-2",
    marginBottom: "3rem",
  },
  HeightEmulator: {
    float: "left",
    height: "585px",
    display: "block !important",
    margin: "0",
    padding: "0",
    zIndex: "-2",
  },
  ptb_100: {
    padding: "100px 0",
  },
  NavbarBrand: {
    height: "52px",
    width: "52px",
  },
  SocialIcons: {
    display: "flex !important",
  },
  FacebookIcon: {
    width: "40px",
    height: "40px",
    fontSize: "18px",
    backgroundColor: "#3b5999 !important",
    margin: "5px",

    borderRadius: "3px",
    overflow: "hidden",
    transition: "all 0.3s ease 0s",
    "& svg": {
      width: "0.625em",
      display: "block",
      color: "white",
      height: "100%",
      lineHeight: "45px",
      margin: "0 auto",
      transition: "all 0.3s ease 0s",
      fontSize: "inherit",
    },
    "&:hover svg:first-child": {
      marginTop: "-40px",
    },
  },
  TwitterIcon: {
    width: "40px",
    height: "40px",
    fontSize: "18px",
    backgroundColor: "#55acee !important",
    margin: "5px",

    borderRadius: "3px",
    overflow: "hidden",
    transition: "all 0.3s ease 0s",
    "& svg": {
      width: "1em",
      display: "block",
      color: "white",
      height: "100%",
      lineHeight: "45px",
      margin: "0 auto",
      transition: "all 0.3s ease 0s",
      fontSize: "inherit",
    },
    "&:hover svg:first-child": {
      marginTop: "-40px",
    },
  },
  GooglePlusIcon: {
    width: "40px",
    height: "40px",
    fontSize: "18px",
    backgroundColor: "#dd4b39 !important",
    margin: "5px",

    borderRadius: "3px",
    overflow: "hidden",
    transition: "all 0.3s ease 0s",
    "& svg": {
      width: "1.25em",
      color: "white",
      display: "block",
      height: "100%",
      lineHeight: "45px",
      margin: "0 auto",
      transition: "all 0.3s ease 0s",
      fontSize: "inherit",
    },
    "&:hover svg:first-child": {
      marginTop: "-40px",
    },
  },
};