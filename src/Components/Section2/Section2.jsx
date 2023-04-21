import React from "react";
import "./Section2.css";
import star from "../../assets/star.svg";
import { s2links } from "../../Data";

const Section2 = () => {
  return (
    <section class="section_2 wrapper">
      <div class="section_2_header">
        <h3>Browse talent by category</h3>
        <div>
          <p>Looking for work?</p>
          <a href="#"> Browse jobs</a>
        </div>
      </div>
      <div class="section_2_categories">
        {s2links.map(({ name, rating, image, skills }) => {
          return (
            <>
              <div class="section_2_categories_tile">
                <h4>{name}</h4>
                <div>
                  <span>
                    <img src={star} alt="star" />
                    {rating}
                  </span>
                  <span>{skills}</span>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </section>
  );
};

export default Section2;
