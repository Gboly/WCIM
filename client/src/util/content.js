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
import boreholeAponmu from "../assets/borehole-aponmu.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import gmail from "../assets/gmail.png";

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
        url: "/get-involved/giving",
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

const aponmuBoreholeStory =
  "In the heart of Ondo State, Nigeria, lies the resilient community of Aponmu. For years, the lack of access to clean water had been an enduring challenge, casting a shadow over the daily lives of its residents. Women and children traversed long distances, bearing the burden of water containers, their daily routines dictated by the relentless pursuit of this basic necessity. p The community's plea for relief echoed far and wide, reaching the ears of our charity organization. Determined to make a lasting impact, we embarked on a mission to bring clean water to Aponmu. The solution came in the form of a borehole—a source of hope that would transform the lives of the community forever. p As the borehole was drilled and water began to flow, a wave of anticipation and joy swept through Aponmu. No longer bound by the arduous trek for water, families now had a reliable and sustainable source right at their doorstep. The burden on women and children lightened, replaced by the simple joy of turning a tap and witnessing the life-giving liquid flow freely. p Beyond quenching their physical thirst, the borehole became a symbol of empowerment. With newfound time and energy, community members redirected their focus towards education and economic activities. Children spent more time in classrooms, and families engaged in initiatives to improve their economic well-being. p The borehole didn't just provide water; it irrigated the fields of opportunity, nurturing a sense of community and resilience. Aponmu transformed from a village burdened by water scarcity to a thriving hub where the ripples of change reached every corner. p This story is a testament to the impact a simple borehole can have on a community's life. Through collective efforts and unwavering determination, we turned the tide for Aponmu, bringing an abundance of clean water and fostering a brighter, more promising future for all.";

export const storyContent = [
  {
    id: 1,
    imgSrc: boreholeAponmu,
    desc: "Quenching the Thirst: A Borehole Brings Hope to Aponmu Community",
    body: aponmuBoreholeStory,
    category: "clean water",
    url: "/stories/clean-water/aponmu-borehole",
    keywords: ["water", "clean water", "borehole", "nigeria"],
  },
  {
    id: 2,
    imgSrc: boreholeAponmu,
    desc: "Quenching the Thirst: A Borehole Brings Hope to Aponmu Community",
    body: aponmuBoreholeStory,
    category: "clean water",
    url: "/stories/clean-water/aponmu-borehole",
    keywords: ["water", "clean water", "borehole", "nigeria"],
  },
  {
    id: 3,
    imgSrc: boreholeAponmu,
    desc: "Quenching the Thirst: A Borehole Brings Hope to Aponmu Community",
    body: aponmuBoreholeStory,
    category: "clean water",
    url: "/stories/clean-water/aponmu-borehole",
    keywords: ["water", "clean water", "borehole", "nigeria"],
  },
];

export const socials = [
  {
    name: "facebook",
    src: facebook,
    url: "https://web.facebook.com/myworldcare208",
  },
  { name: "instagram", src: instagram, url: "" },
  { name: "gmail", src: gmail, url: "mailto:worldcareinc@gmail.com" },
];

export const extendedMissionStatement = [
  "World Care International Ministry collaborates with individuals like you to express God’s love globally, alleviating human suffering through hunger relief, medical care, clean water access, and education.",
  " Our efficient, compassionate approach tailors programs to local needs, enabling partners to embody Jesus’ teachings and provide tangible support to those facing adversity.",
  "Together, we create a world where collective compassion lessens the impact of human suffering. Join us in making a positive difference for those in need.",
];

export const learnMorecontent = ["Give Now", "About Us", "Contact Us"];
