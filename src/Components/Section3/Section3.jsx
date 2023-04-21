import React from "react";
import "./Section3.css";
import skills from "../../assets/skills.svg";
import breifcase from "../../assets/Briefcase.svg";
import support from "../../assets/Support.svg";
import enterprise from "../../assets/hxwn-enterprise-image@2x.webp";

const Section3 = () => {
  return (
    <section class="section_3 wrapper">
      <div class="section_3_left">
        <div class="section_3_left_header">
          <h3>Enterprise Suite</h3>
          <h1>
            This is how
            <br />
            good companies find good company.
          </h1>
          <span>
            Access the top 1% of talent on Upwork, and a full suite of hybrid
            workforce
            <br />
            management tools. This is how innovation works now.
          </span>
        </div>

        <div class="section_3_left_details">
          <div>
            <img src={skills} alt="skills" />
            <p>Access expert talent to fill your skill gaps</p>
          </div>
          <div>
            <img src={breifcase} alt="briefcase" />
            <p>Control your workflow: hire, classify and pay your talent</p>
          </div>
          <div>
            <img src={support} alt="support" />
            <p>Partner with Upwork for end-to-end support</p>
          </div>
        </div>
        <div class="section_left_btn">
          <button class="btn_primary">Learn More</button>
        </div>
      </div>
      <div class="section_3_right">
        <img src={enterprise} alt="enterprise" />
      </div>
    </section>
  );
};

export default Section3;
