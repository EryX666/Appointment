export default {
  InstructionsSection: {
    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.3)",
    background:
      "linear-gradient(90deg, rgba(46,110,255,1) 0%, rgba(37,130,255,1) 50%, rgba(48,149,255,1) 100%)",
    zIndex: "1",
  },

  SingleWork: {
    textAlign: "center",
  },

  SingleWorkArrow: {
    position: "absolute",
    fontSize: "45px",
    fontWeight: "900",
    color: "#fff",
    top: "50%",
    right: "0",
    transform: "translateY(-50%)",
    transition: "transform 0.3s ease 0s",
    "$SingleWork:hover &": {
      transform: "translateX(5px) translateY(-50%)",
    },
  },
};
