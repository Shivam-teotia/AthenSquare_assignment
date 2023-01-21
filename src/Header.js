import React from "react";
import "./Header.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const Header = () => {
  return (
    <div className="header">
      <div className="header-first">
        <img
          src="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/62efcbe40b52a66c04de66ce_Frame%2011.png"
          alt="none"
        />
        <div>
          Product
          <ExpandMoreIcon style={{ color: "white" }} />
        </div>
        <div>Our Blog</div>
        <div>
          Resource
          <ExpandMoreIcon />
        </div>
      </div>
      <div className="header-second">
        <button>Book a Demo</button>
      </div>
    </div>
  );
};

export default Header;
