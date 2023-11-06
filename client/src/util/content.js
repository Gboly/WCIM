import money from "../assets/money.png";
import evangelism from "../assets/evangelism.png";
import water from "../assets/water.png";
import book from "../assets/book.png";
import health from "../assets/health.png";
import orphanage from "../assets/orphanage.png";
import donate from "../assets/donate.png";
import giving from "../assets/giving.png";
import mailing from "../assets/mailing.png";
import volunteer from "../assets/volunteer.png";
import about from "../assets/about.png";
import team from "../assets/team.png";
import contact from "../assets/contact.png";

export const navOptions = [
  {
    desc: "What we do",
    content: [
      {
        icon: evangelism,
        desc: "Evangelism",
        url: "/what-we-do/evangelism",
      },
      {
        icon: water,
        desc: "Clean water",
        url: "/what-we-do/clean-water",
      },
      {
        icon: book,
        desc: "Education",
        url: "/what-we-do/education",
      },
      {
        icon: health,
        desc: "Health",
        url: "/what-we-do/health",
      },
      {
        icon: orphanage,
        desc: "Orphanage",
        url: "/what-we-do/orphanage",
      },
      {
        icon: money,
        desc: "Financing",
        url: "/what-we-do/financing",
      },
    ],
    columnType: "triple-column",
  },
  {
    desc: "Get involved",
    content: [
      {
        icon: donate,
        desc: "Donate today",
        url: "/get-involved/donate",
      },
      {
        icon: giving,
        desc: "Giving catalog",
        url: "/get-involved/clean-water",
      },
      {
        icon: mailing,
        desc: "Mailing list",
        url: "/get-involved/mailing",
      },
      {
        icon: volunteer,
        desc: "Volunteer",
        url: "/get-involved/volunteer",
      },
    ],
    columnType: "double-column",
  },
  {
    desc: "Who we are",
    content: [
      {
        icon: about,
        desc: "About us",
        url: "/who-we-are/about-us",
      },
      {
        icon: team,
        desc: "Our team",
        url: "/who-we-are/team",
      },
      {
        icon: contact,
        desc: "Contact us",
        url: "/who-we-are/contact-us",
      },
    ],
    columnType: "single-column",
  },
];
