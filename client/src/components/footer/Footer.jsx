import { NavLink } from "react-router-dom";
import "./footer.css";
import { forwardRef, useRef, useState } from "react";
import Animated from "../animated/Animated";
import { AnimatePresence, motion } from "framer-motion";
import { spreadOut } from "../../util/variants";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import gmail from "../../assets/gmail.png";
import Brand from "../brand/Brand";
import Icon from "../icon/Icon";
import PlaceIcon from "@mui/icons-material/Place";
import CallIcon from "@mui/icons-material/Call";

const extendedMissionStatement = [
  "Operation Blessing is a nonprofit, humanitarian organization dedicated to partnering with YOU to demonstrate God’s love by alleviating human suffering in the U.S. and around the world.",
  "For more than 40 years, your love has shown through OB as together we’ve provided hunger relief, medical care, clean water, and disaster relief to millions around the world.",
  "Through compassionate, efficient, and locally-focused programs we are able to target the specific needs of those we serve and provide a gateway for our partners to truly be the hands and feet of Jesus for those who are suffering and in need.",
];
const learnMorecontent = ["Give Now", "About Us", "Contact Us"];
const socials = [
  {
    name: "facebook",
    src: facebook,
    url: "https://web.facebook.com/myworldcare208",
  },
  { name: "instagram", src: instagram, url: "" },
  { name: "gmail", src: gmail, url: "mailto:worldcareinc@gmail.com" },
];

const Footer = () => {
  const [userDetails, setUserDetails] = useState({ name: "", email: "" });
  const footerRef = useRef(null);

  const handleSubmit = (e) => {
    e && e.preventDefault();
  };
  const handleInput = (e) => {
    const { id, value } = e.target;
    setUserDetails({ ...userDetails, [id]: value });
  };

  return (
    <>
      <footer className="footer-1" ref={footerRef}>
        <main>
          <FooterSection id={"Our-Mission"}>
            {extendedMissionStatement.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </FooterSection>
          <FooterSection id={"Learn-more"}>
            {learnMorecontent.map((item, index) => (
              <LearnMoreOption key={index} item={item} ref={footerRef} />
            ))}
          </FooterSection>
          <FooterSection id={"Stay-informed"}>
            <p>
              Be the first to know about new life-changing programs, urgent
              needs, and more! Sign up to receive important updates right to
              your inbox.
            </p>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                value={userDetails.name}
                onInput={handleInput}
              />
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                value={userDetails.email}
                onInput={handleInput}
              />
              <button type="submit">KEEP ME INFORMED</button>
            </form>
            <div>
              {socials.map(({ name, src, url }) => (
                <a key={name} href={url} target="_blank" rel="noreferrer">
                  <img src={src} alt={`${name} icon`} />
                </a>
              ))}
            </div>
          </FooterSection>
        </main>
        <div>
          <Brand />
          <div>
            <Icon value={PlaceIcon} size={1.2} />
            <span>Springfield, IL, United States, Illinois</span>
          </div>
          <div>
            <Icon value={CallIcon} size={1.2} />
            <a href="tel:+1 518-986-1836">+1 518-986-1836</a>
          </div>
        </div>
      </footer>
      <footer className="footer-2">
        <p>
          Copyright © {new Date().getFullYear()} by World care international
          ministry
        </p>
      </footer>
    </>
  );
};

const FooterSection = ({ children, id }) => {
  return (
    <section id={id}>
      <header>{id.replace(/-/g, " ")}</header>
      {children}
    </section>
  );
};

const LearnMoreOptionWithRef = ({ item }, ref) => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => setIsHovering(true);
  const handleMouseOut = () => setIsHovering(false);

  return (
    <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <NavLink>
        {item}
        <AnimatePresence>
          {isHovering && (
            <Animated
              element={motion.div}
              className={"active-bar"}
              ref={ref}
              variants={spreadOut()}
            />
          )}
        </AnimatePresence>
      </NavLink>
    </div>
  );
};
const LearnMoreOption = forwardRef(LearnMoreOptionWithRef);

export default Footer;
