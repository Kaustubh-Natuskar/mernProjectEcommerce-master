import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/LinkedIn";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.linkedin.com/in/kaustubhnatuskar/";
  };
  return (
		<div className="aboutSection">
			<div></div>
			<div className="aboutSectionGradient"></div>
			<div className="aboutSectionContainer">
				<Typography component="h1">About Us</Typography>

				<div>
					<div>
						<Avatar
							style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
							src="https://res.cloudinary.com/dingwe4w2/image/upload/v1650174953/COLOR_POP_gjlyz9.jpg"
							alt="Founder"
						/>
						<Typography>Kaustubh Natuskar</Typography>
						<Button onClick={visitInstagram} color="primary">
							Visit LinkedIn
						</Button>
						<span></span>
					</div>
					{/* <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://www.youtube.com/channel/UCO7afj9AUo0zV69pqEYhcjw"
              target="blank"
            >
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://instagram.com/meabhisingh" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div> */}
				</div>
			</div>
		</div>
	);
};

export default About;
