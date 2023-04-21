import React from 'react'
import "./Footer.css"
import fb from "../../assets/facebook.svg"
import Li from "../../assets/linkedIn.svg"
import twi from "../../assets/twitter.svg"
import yb from "../../assets/youtube.svg"
import insta from "../../assets/instagram.svg"
import apple from "../../assets/apple.svg"
import android from "../../assets/android.svg"


const Footer = () => {
  return (
    <footer class="footer">
      <div class="wrapper">
        <div class="footer_top">
          <div class="footer_top_list">
            <h5>For Clients</h5>
            <ul>
              <li>
                <a href="#">How to Hire</a>
              </li>

              <li><a href="#">Talent Marketplace</a></li>

              <li>
                <a href="#"> Project Catalog</a>
              </li>
              <li>
                <a href="#">Talent Scout</a>
              </li>
              <li>
                <a href="#"> Hire an Agency</a>
              </li>
              <li>
                <a href="#">Enterprise</a>
              </li>
              <li>
                <a href="#">Payroll Services</a>
              </li>
              <li>
                <a href="#">Direct Contracts</a>
              </li>
              <li>
                <a href="#">Hire Worldwide</a>
              </li>
              <li>
                <a href="#">Hire in the USA</a>
              </li>
            </ul>
          </div>
          <div class="footer_top_list">
            <h5>For Talent</h5>
            <ul>
              <li>
                <a href="#">How to Find Work</a>
              </li>

              <li><a href="#">Direct Contracts</a></li>

              <li>
                <a href="#">Find Freelance Jobs Worldwide</a>
              </li>
              <li>
                <a href="#">Find Freelance Jobs in the USA</a>
              </li>
            </ul>
          </div>

          <div class="footer_top_list">
            <h5>Resources</h5>
            <ul>
              <li>
                <a href="#">Help & Support</a>
              </li>

              <li><a href="#">Success Stories</a></li>

              <li>
                <a href="#">Upwork Reviews</a>
              </li>
              <li>
                <a href="#">Resources</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Community</a>
              </li>
              <li>
                <a href="#">Affiliate Program</a>
              </li>
              <li>
                <a href="#">Free Business tools</a>
              </li>
            </ul>
          </div>
          <div class="footer_top_list">
            <h5>Company</h5>
            <ul>
              <li>
                <a href="#">About Us </a>
              </li>

              <li><a href="#">Leadership</a></li>

              <li>
                <a href="#">Investor Relations</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Our Impact</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Trust, Safety & Security</a>
              </li>
              <li>
                <a href="#">Modern Slavery Statement</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer_middle">
          <div class="footer_middle_left">
            <h5>Follow Us</h5>
            <div class="footer_middle_left_list">
              <div class="footer_icons">
                <img src={fb} alt="facebook" />
              </div>
              <div class="footer_icons">
                <img src={Li} alt="linkedIn" />
              </div>
              <div class="footer_icons">
                <img src={twi} alt="twitter" />
              </div>
              <div class="footer_icons">
                <img src={yb} alt="youtube" />
              </div>
              <div class="footer_icons">
                <img src={insta} alt="instagram" />
              </div>
            </div>
          </div>
          <div class="footer_middle_right">
            <h5>Mobile app</h5>
            <div class="footer_middle_right_list">
              <div class="footer_icons">
                <img src={apple} alt="apple" />
              </div>
              <div class="footer_icons">
                <img src={android} alt="android" />
              </div>
            </div>
          </div>
        </div>
        <div class="footer_bottom">
          <p>© 2015 - 2022 Upwork® Global Inc.</p>
          <ul class="footer_bottom_list">
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>CA Notice at Collection</li>
            <li>Cookie Settings</li>
            <li>Accessibility</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer