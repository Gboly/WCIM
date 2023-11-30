import { NavLink } from "react-router-dom";
import "./footer.css";
import { forwardRef, useContext, useEffect, useRef, useState } from "react";
import Animated from "../animated/Animated";
import { AnimatePresence, motion } from "framer-motion";
import { spreadOut } from "../../util/variants";
import Brand from "../brand/Brand";
import Icon from "../icon/Icon";
import PlaceIcon from "@mui/icons-material/Place";
import CallIcon from "@mui/icons-material/Call";
import { extendedMissionStatement, learnMorecontent } from "../../util/content";
import Socials from "../socials/Socials";
import { GeneralContext } from "../../App";

const Footer = () => {
  const footerRef = useRef(null);

  return (
    <>
      <footer className="reference-container footer-1" ref={footerRef}>
        <main>
          <div>
            <div>
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
            </div>
            <FooterSection id={"Stay-informed"} name={"subscription-form"}>
              <p>
                Be the first to know about new life-changing programs, urgent
                needs, and more! Sign up to receive important updates right to
                your inbox.
              </p>
              <SubscriptionForm />
              <Socials />
            </FooterSection>
          </div>
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
        </main>
      </footer>
      <footer className="reference-container footer-2">
        <main>
          <p>
            Copyright © {new Date().getFullYear()} by World care international
            ministry
          </p>
        </main>
      </footer>
    </>
  );
};

const SubscriptionForm = () => {
  const nameRef = useRef(null);
  const { initiateMailingList, setInitiateMailingList } =
    useContext(GeneralContext);

  const [userDetails, setUserDetails] = useState({ name: "", email: "" });
  const handleSubmit = (e) => {
    e && e.preventDefault();
  };
  const handleInput = (e) => {
    const { id, value } = e.target;
    setUserDetails({ ...userDetails, [id]: value });
  };

  useEffect(() => {
    if (initiateMailingList) {
      nameRef.current.focus();
      setInitiateMailingList(false);
    }
  }, [initiateMailingList, setInitiateMailingList]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="name"
        placeholder="Your Name"
        value={userDetails.name}
        onInput={handleInput}
        ref={nameRef}
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
  );
};

const FooterSection = ({ children, id, name }) => {
  return (
    <section id={id} name={name}>
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
