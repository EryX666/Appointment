import React from "react";
import HeadingSection from "./Components/HeadingSection";
import FeaturesSection from "./Components/FeaturesSection";
import InstructionsSection from "./Components/InstructionsSection";
import DiscoverSection from "./Components/DiscoverSection";
import PhotoSection from "./Components/PhotoSection";
import ContactSection from "./Components/ContactSection";
import Footer from "./Components/Footer";
import Menu from "./Components/Navbar";
import ScrollToTop from "react-scroll-to-top";

function App() {
	return (
		<div style={{ background: "white" }}>
			<ScrollToTop smooth color="#1960ff" />
			<Menu />
			<HeadingSection />
			<FeaturesSection />
			<InstructionsSection />
			<DiscoverSection />
			<PhotoSection />
			<ContactSection />
			<Footer />
		</div>
	);
}

export default App;
