import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import { Row } from "react-bootstrap";

import styles from "./styles/DiscoverSectionStyles.js";

function DiscoverSection(props) {
	const { classes } = props;
	return (
		<section className={classes.DiscoverSection} id="DiscoverSection">
			<Container>
				<Row className="justify-content-between align-items-center">
					<div className="col-12 col-lg-6 order-2 oder-lg-1">
						<div className="mx-auto text-center mt-5 mt-lg-0">
							<img
								className={classes.DiscoverImage}
								src="/assets/galaxy_S20.png"
								alt="App"
							/>
						</div>
					</div>
					<div className="col-12 col-lg-6 order-1 order-lg-2">
						<div className={classes.DiscoverText}>
							<h2 className="pb-4">
								Work faster with powerful tools.
							</h2>
							<ul className={classes.DiscoverCheckList}>
								<div>
									<li className="py-2">
										<div className="list-box media">
											<span className="icon align-self-center">
												<i className="fas fa-check"></i>
											</span>
											<span className="media-body pl-2">
												Morbi laoreet, tortor fermentum
												rhoncus commodo, justo odio
												ultrices.{" "}
											</span>
										</div>
									</li>
									<li className="py-2">
										<div className="list-box media">
											<span className="icon align-self-center">
												<i className="fas fa-check"></i>
											</span>
											<span className="media-body pl-2">
												Lorem ipsum dolor sit amet,
												consectetur adipiscing elit.
											</span>
										</div>
									</li>
									<li className="py-2">
										<div className="list-box media">
											<span className="icon align-self-center">
												<i className="fas fa-check"></i>
											</span>
											<span className="media-body pl-2">
												Suspendisse commodo arcu eget
												purus fermentum, et mollis.
											</span>
										</div>
									</li>
									<li className="py-2">
										<div className="list-box media">
											<span className="icon align-self-center">
												<i className="fas fa-check"></i>
											</span>
											<span className="media-body pl-2">
												Pellentesque sed metus auctor,
												rutrum diam sit amet, tempus
												ante. Pellentesque pulvinar.
											</span>
										</div>
									</li>
								</div>
							</ul>
						</div>
					</div>
				</Row>
			</Container>
		</section>
	);
}

export default withStyles(styles)(DiscoverSection);
