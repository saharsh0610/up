import star from "./assets/star.svg";
import starcircle from "./assets/star-circle.svg";
import dollercircle from "./assets/doller-circle.svg";
import checkcircle from "./assets/check-circle.svg";
import nasdaq from "./assets/nasdaq.svg"
import mw from "./assets/microsoft-white.svg"
import gdw from "./assets/go-daddy-white.svg"
import lc from "./assets/company-logos-cover.webp"
import ab2 from "./assets/airbnb-2.svg"
import auto from "./assets/automatic.svg"
import bisw from "./assets/bissell-white.svg"
import coty from "./assets/coty.svg"
import rancher from "./assets/rancher.svg"


export const links = [
  {
    name: "Development & IT",
  },
  {
    name: "Find Work",
  },
  {
    name: "Why Upwork",
  },
  {
    name: "Enterprise",
  },
];

export const s1links = [
  {
    name: "Development & IT",
  },
  {
    name: "Design & Creative",
  },
  {
    name: "Sales & Marketing",
  },
  {
    name: "Writing & Translation",
  },
  {
    name: "Admin & Customer Support",
  },
];

export const s2links = [
  {
    name: "Developement & IT",
    rating: "4.85/5",
    image: { star },
    skills: "1853 skills",
  },
  {
    name: "Design & Creative",
    rating: "4.91/5",
    image: { star },
    skills: "968 skills",
  },
  {
    name: "Sales & Marketing",
    rating: "4.77/5",
    image: { star },
    skills: "392 skills",
  },
  {
    name: "Writing & Translation",
    rating: "4.92/5",
    image: { star },
    skills: "505 skills",
  },
  {
    name: "Admin & Customer Support",
    rating: "4.77/5",
    image: { star },
    skills: "508 skills",
  },
  {
    name: "Finance & Accounting",
    rating: "4.79/5",
    image: { star },
    skills: "214 skills",
  },
  {
    name: "Engineering & Architecture",
    rating: "4.85/5",
    image: { star },
    skills: "650 skills",
  },
  {
    name: "Legal",
    rating: "4.85/5",
    image: { star },
    skills: "133 skills",
  },
];

export const s4links = [
  {
    name: "Post a job",
    breaking: "and hire a pro",
    sup: "Talent Marketplace",
  },
  {
    name: "Browse and",
    breaking: "buy projects",
    sup: "Project Catalog",
  },
  {
    name: "Let us help you find",
    breaking: "the right talent",
    sup: "Talent Scout",
  },
];

export const s5l = [
  {
    image: { starcircle },
    name: "Proof of quality",
    para: "Check any pros work samples, client reviews, and",
    breaking: "identity verification.",
  },
  {
    image: { dollercircle },
    name: "No cost until you hire",
    para: "Interview potential fits for your job, negotiate rates, and",
    breaking: "only pay for work you approve.",
  },
  {
    image: { checkcircle },
    name: "Safe and secure",
    para: "Focus on your work knowing we help protect your data",
    breaking: "and privacy. Were here with 24/7 support if you need it.",
  },
];

export const Skills = [
  {
    id: 1,
    category: "Top Skills",
    skillLeft: (
      <>
        <a href="#">Data Entry Specialists</a>
        <a href="#">Video Editors</a>
        <a href="#">Data Analyst</a>
        <a href="#">Shopify Developer</a>
        <a href="#">Ruby on Rails Developer</a>
        <a href="#">Android Developer</a>
        <a href="#">Bookkeeper</a>
        <a href="#">Content Writer</a>
        <a href="#">Copywriter</a>
        <a href="#">Database Administrator</a>
        <a href="#">Data Scientist</a>
        <a href="#">Front-End Developer</a>
        <a href="#">Game Developer</a>
        <a href="#">Graphic Designer</a>
        <a href="#">iOS Developer</a>
        <a href="#">Java Developer</a>
      </>
    ),
    skillRight: (
      <>
        <a href="#">JavaScript Developer</a>
        <a href="#">Logo Designer</a>
        <a href="#">Mobile App Developer</a>
        <a href="#">PHP Developer</a>
        <a href="#">Python Developer</a>
        <a href="#">Resume Writer</a>
        <a href="#">SEO Expert</a>
        <a href="#">Social Media Manager</a>
        <a href="#">Software Developer</a>
        <a href="#">Software Engineer</a>
        <a href="#">Technical Writer</a>
        <a href="#">UI Designer</a>
        <a href="#">UX Designer</a>
        <a href="#">Virtual Assistant</a>
        <a href="#">Web Designer</a>
        <a href="#">Wordpress Developer</a>
      </>
    ),
  },
  {
    id: 2,
    category: "Trending Skills",
    skillLeft: (
      <>
        <a href="#">Blockchain</a>
        <a href="#">Go Development</a>
        <a href="#">Node.js</a>
        <a href="#">Vue.js</a>
        <a href="#">HR consulting</a>
        <a href="#">Microsoft Power BI</a>
        <a href="#">Instructional design</a>
        <a href="#">React.js</a>
        <a href="#">Videographers</a>
        <a href="#">HTML5 Developers</a>
        <a href="#">Ghostwriters</a>
        <a href="#">Unity 3D Developers</a>
        <a href="#">Business Consultants</a>
        <a href="#">Coders</a>
        <a href="#">Marketing Consultants</a>
        <a href="#">Web Developer</a>
      </>
    ),
    skillRight: (
      <>
        <a href="#">Illustrators</a>
        <a href="#">Google AdWords Experts</a>
        <a href="#">Digital Marketers</a>
        <a href="#">Project Managers</a>
        <a href="#">Arduino Programmers</a>
        <a href="#">Resume Writer</a>
        <a href="#">SEO Expert</a>
        <a href="#">AngularJS Devleopers</a>
        <a href="#">Software Developer</a>
        <a href="#">Software Engineer</a>
        <a href="#">Technical Writer</a>
        <a href="#">UI Designer</a>
        <a href="#">UX Designer</a>
        <a href="#">Virtual Assistant</a>
        <a href="#">Web Designer</a>
        <a href="#">Wordpress Developer</a>
      </>
    ),
  },
  {
    id: 3,
    category: "Top Skills in US",
    skillLeft: (
      <>
        <a href="#">Accountants in US</a>
        <a href="#">CAD Designers in US</a>
        <a href="#">Curriculum Developer i</a>
        <a href="#">Vue.js in US</a>
        <a href="#">HR consulting in US</a>
        <a href="#">Microsoft Power BI in US</a>
        <a href="#">Instructional design in US</a>
        <a href="#">React.js in US</a>
        <a href="#">Videographers in US</a>
        <a href="#">HTML5 Developers in US</a>
        <a href="#">Ghostwriters in US</a>
        <a href="#">Unity 3D Developers in US</a>
        <a href="#">Business Consultants in US</a>
        <a href="#">Coders in US</a>
        <a href="#">Marketing Consultants in US</a>
        <a href="#">Web Developer in US</a>
      </>
    ),
    skillRight: (
      <>
        <a href="#">Accountants Near North Caroli</a>
        <a href="#">Adobe Photoshop Experts </a>
        <a href="#">Digital Marketers in US</a>
        <a href="#">Project Managers in US</a>
        <a href="#">Arduino Programmers in US</a>
        <a href="#">Resume Writer in US</a>
        <a href="#">SEO Expert in US</a>
        <a href="#">AngularJS Devleopers in US</a>
        <a href="#">Software Developer in US</a>
        <a href="#">Software Engineer in US</a>
        <a href="#">Technical Writer in US</a>
        <a href="#">UI Designer in US</a>
        <a href="#">UX Designer in US</a>
        <a href="#">Virtual Assistant in US</a>
        <a href="#">Web Designer in US</a>
        <a href="#">Wordpress Developer in US</a>
      </>
    ),
  },
  {
    id: 4,
    category: "Project Catalog",
    skillLeft: (
      <>
        <a href="#">Resume Writing Servic</a>
        <a href="#">SEO Services</a>
        <a href="#">Translation Services</a>
        <a href="#">Transcription Service</a>
        <a href="#">Virtual Assistant Servic</a>
        <a href="#">Email Marketing Servic</a>
        <a href="#">Instructional design </a>
        <a href="#">React.js </a>
        <a href="#">Videographers </a>
        <a href="#">HTML5 Developers </a>
        <a href="#">Ghostwriters </a>
        <a href="#">Unity 3D Developers </a>
        <a href="#">Business Consultants </a>
        <a href="#">Coders </a>
        <a href="#">Marketing Consultants </a>
        <a href="#">Web Developer </a>
      </>
    ),
    skillRight: (
      <>
        <a href="#">Accountants Near North Caroli</a>
        <a href="#">Adobe Photoshop Experts </a>
        <a href="#">Digital Marketers </a>
        <a href="#">Project Managers </a>
        <a href="#">Arduino Programmers </a>
        <a href="#">Resume Writer </a>
        <a href="#">SEO Expert </a>
        <a href="#">AngularJS Devleopers </a>
        <a href="#">Software Developer </a>
        <a href="#">Software Engineer </a>
        <a href="#">Technical Writer </a>
        <a href="#">UI Designer </a>
        <a href="#">UX Designer </a>
        <a href="#">Virtual Assistant </a>
        <a href="#">Web Designer </a>
        <a href="#">Wordpress Developer </a>
      </>
    ),
  },
];

export const s7b = [
  {
    item: (
      <>
      <div class="section_7_reviews_list_box_1">
        <div class="section_7_reviews_list_item item_1">
          <div class="section_7_reviews_list_item_top">
            <img src={nasdaq} alt="" />
            <h4>
              “Upwork enables us to differentiate
              <br />
              ourselves from our competitors and <br />
              produce content at a higher caliber.”
            </h4>
            <p>Josh Machiz, Chief Digital Officer</p>
          </div>
          <div class="section_7_reviews_list_item_bottom">
            <h5>Results</h5>
            <hr />
            <div class="section_7_reviews_list_item_bottom_results">
              <div>
                <h4>Emmy Winning</h4>
                <p>
                  Facebook Watch
                  <br />
                  program
                </p>
              </div>
              <div>
                <h4>Millions</h4>
                <p>
                  of impressions generated
                  <br />
                  per client per IPO
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </>
    ),
  },
  {
    item: (
      <>
      <div class="section_7_reviews_list_box_1">
        <div class="section_7_reviews_list_item item_2">
          <div class="section_7_reviews_list_item_top">
            <img src={mw} alt="" />
            <h4>
              “One of the advantages of utilizing
              <br />
              freelancers is finding talent with different
              <br />
              skills quickly as our needs change.”
            </h4>
            <p>Carol Taylor, Director of Content Experience</p>
          </div>
          <div class="section_7_reviews_list_item_bottom">
            <h5>Results</h5>
            <hr />
            <div class="section_7_reviews_list_item_bottom_results">
              <div>
                <h4>50% Faster</h4>
                <p>launch of projects</p>
              </div>
              <div>
                <h4>10,000</h4>
                <p>projects completed</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </>
    ),
  },
  {
    item: (
      <><div class="section_7_reviews_list_box_1">
        <div class="section_7_reviews_list_item item_3">
          <div class="section_7_reviews_list_item_top">
            <img src={gdw} alt="" />
            <h4>
              “I don’t think business would have grown
              <br />
              as fast or as well if not for the freelancers’
              <br />
              expertise and ability to adapt.”
            </h4>
            <p>Anthony Massarweh, Program Manager</p>
          </div>

          <div class="section_7_reviews_list_item_bottom">
            <h5>Results</h5>
            <hr />
            <div class="section_7_reviews_list_item_bottom_results">
              <div>
                <h4>72-Hour</h4>
                <p>average turnaround on websites</p>
              </div>
              <div>
                <h4>3x Faster</h4>
                <p>launch of new program</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </>
    ),
  },
  {
    item: (
      <><div class="section_7_reviews_list_box_1">
        <div class="section_7_reviews_list_item item_4">
          <div class="section_7_reviews_list_item_left">
            <img src={lc} alt="" />
          </div>
          <div class="section_7_reviews_list_item_right">
            <h5>And many more</h5>
            <img src={ab2} alt="" />
            <img src={auto} alt="" />
            <img src={bisw} alt="" />
            <img src={coty} alt="" />
            <img src={rancher} alt="" />
          </div>
        </div>
        </div>
      </>
    ),
  },
];
