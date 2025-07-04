import React from "react";
import { Box, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

const SocialMediaIcons = ({ className = "" }) => {
  return (
    <Box display="flex" className={className}>
      <IconButton
        component="a"
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FacebookIcon />
      </IconButton>
      <IconButton
        component="a"
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <InstagramIcon />
      </IconButton>
      <IconButton
        component="a"
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedInIcon />
      </IconButton>
      <IconButton
        component="a"
        href="https://youtube.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <YouTubeIcon />
      </IconButton>
    </Box>
  );
};

export default SocialMediaIcons;
