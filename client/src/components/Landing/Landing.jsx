import "./landing.css";
import React from "react";
import { Link } from "react-router-dom";


const Landing = () => {
  return (
    <div className="landing-cnt">

      <div className="landing-tit_cnt">
        <div className="landing-tit_cnt--space"></div>
        <h1>Games!</h1>
      </div>


      <div className="landing-cnt_button">
        <div className="landing-cnt_button--space"></div>
        <div className="landing-cnt_button--link">
          <Link className="landing-btn" to='home'>
              <span id="span1"></span>
              <span id="span2"></span>
              <span id="span3"></span>
              <span id="span4"></span>
              <h4>Ingresar</h4>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Landing