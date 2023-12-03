import AnimatedPage from "../../components/animated/AnimatedPage";
import "./contact-us.css";
import wcimMovement from "../../assets/wcim-action.jpg";
import Article from "../../components/article/Article";
import Icon from "../../components/icon/Icon";
import { NavLink } from "react-router-dom";
import { contactDetails } from "../../util/content";

const ContactUs = () => {
  return (
    <AnimatedPage className="contact-us">
      <section className="contact-banner">
        <Article
          header={"Get In Touch"}
          body={
            "Want to get in touch? We'd love to hear from you. Here is how you can reach us..."
          }
        />
        <img src={wcimMovement} alt="" />
      </section>
      <section className="contact-cards">
        <div>
          {contactDetails.map(({ id, icon, desc, value, url }) => (
            <NavLink
              key={id}
              to={url}
              className="contact-card"
              target={id === "facebook" ? "_blank" : ""}
            >
              <div>
                <Icon size={2} value={icon} />
                <p>{desc}</p>
              </div>
              <p id={id}>{value}</p>
            </NavLink>
          ))}
        </div>
      </section>
    </AnimatedPage>
  );
};

export default ContactUs;
