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
        body: "Spiritual well-being is integral to holistic growth. Your support allows us to spread hope and faith, bringing comfort to those in despair. Join us in sharing the transformative power of love, compassion, and faith within communities.",
      },
      {
        icon: water,
        desc: "Clean water",
        url: "/what-we-do/clean-water",
        body: "Access to clean water is a global crisis, affecting millions. Contaminated water causes diseases, posing severe health risks. Your contribution empowers us to provide clean water sources, ensuring healthier communities and brighter futures.",
      },
      {
        icon: book,
        desc: "Education",
        url: "/what-we-do/education",
        body: "Limited access to education perpetuates poverty and inequality. By supporting our educational initiatives, you empower underprivileged children, breaking the cycle of poverty and opening doors to a brighter, more equitable future.",
      },
      {
        icon: health,
        desc: "Health care",
        url: "/what-we-do/health",
        body: "Inadequate health care perpetuates a cycle of preventable illnesses and suffering. Your support enables us to offer medical services to those in need, ensuring a healthier community. Together, we can combat illness, improve well-being, and save lives.",
      },
      {
        icon: orphanage,
        desc: "Orphanage",
        url: "/what-we-do/orphanage",
        body: "Orphans face emotional and physical challenges without stable homes. Your contribution will help in supporting orphanages, providing love, care, and opportunities for a better future. Help us create a nurturing environment for these children.",
      },
      {
        icon: money,
        desc: "Financing",
        url: "/what-we-do/financing",
        body: "Financial instability hinders personal and community growth. Your contribution empowers us to provide financial support, fostering economic independence. Together, we can uplift individuals and communities, breaking the chains of poverty.",
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

export const doingsContent = navOptions.find(
  (option) => option.desc === "What we do"
).content;
