import React from "react";
import "./Section5.css";
import { s5l } from "../../Data";
import reading from "../../assets/reading.png"
import sw from "../../assets/start-white.svg"
import group from "../../assets/group.svg"
import sc from "../../assets/star-circle.svg"
import dc from "../../assets/doller-circle.svg"
import cc from "../../assets/check-circle.svg"

const Section5 = () => {
  return (
    <section class="section_5 wrapper">
      <div class="section_5_left">
        <div class="section_5_left_info">
          <h1 class="section_5_left_info_title">
            Why businesses<br />
            turn to Upwork
          </h1>

          <div class="section_5_left_info_item">
            <div class="section_5_left_info_item_left">
              <img src={sc} alt="" />
            </div>
            <div class="section_5_left_info_item_right">
              <h3>Proof of quality</h3>
              <p>
                Check any pro’s work samples, client reviews, and <br />identity
                verification.
              </p>
            </div>
          </div>
          <div class="section_5_left_info_item">
            <div class="section_5_left_info_item_left">
              <img src={dc} alt="" />
            </div>
            <div class="section_5_left_info_item_right">
              <h3>No cost until you hire</h3>
              <p>
                Interview potential fits for your job, negotiate rates, and<br />
                only pay for work you approve.
              </p>
            </div>
          </div>
          <div class="section_5_left_info_item">
            <div class="section_5_left_info_item_left">
              <img src={cc} alt="" />
            </div>

            <div class="section_5_left_info_item_right">
              <h3>Safe and secure</h3>
              <p>
                Focus on your work knowing we help protect your data<br />
                and privacy. We’re here with 24/7 support if you need it.
              </p>
            </div>
          </div>
        </div>
        <div class="section_5_left_img">
          <img src={reading} alt="" />
        </div>
      </div>
      <div class="section_5_right">
        <div class="section_5_right_info">
          <h3>
            We’re<br />
            the world’s<br />
            work marketplace
          </h3>
          <div class="section_5_right_info_item">
            <img src={sw} alt="" />
            <div>
              <h3>4.9/5</h3>
              <p>Clients rate professionals on Upwork</p>
            </div>
          </div>
          <div class="section_5_right_info_item">
            <img src={group} alt="" />
            <div>
              <h3>Award winner</h3>
              <p>G2’s 2021 Best Software Awards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
