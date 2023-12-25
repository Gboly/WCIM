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
import cleanWaterVideo from "../assets/clean-water-vid.mp4";
import educationVideo from "../assets/education-vid.mp4";
import evangelismPoster from "../assets/wcim-evangelism3.jpg";
import boreholeOsolo from "../assets/wcim-water.jpeg";
import eduPoster from "../assets/wcim-edu2.jpg";
import scholarship from "../assets/wcim-scholarship.jpeg";
import healthPoster from "../assets/wcim-health4.jpg";
import orphanPoster from "../assets/wcim-orphan.jpg";
import financingPoster from "../assets/wcim-financing.jpg";
import {
  aponmuBoreholeStory,
  medicalCheckUpStory,
  orphanageVisitStory,
  osoloBoreholeStory,
  scholarshipStory,
  supportGroupGratitudeStory,
  testimonyStory,
} from "./story";
import feedPoster from "../assets/wcim-donations.jpg";
import monthlySupport from "../assets/wcim-monthly.jpeg";
import waterGiftPoster from "../assets/wcim-water-gift.jpg";
import healPoster from "../assets/wcim-healPoster.jpg";
import scholarshipPoster from "../assets/wcim-scholarship2.jpg";
import orphanGiftPoster from "../assets/wcim-orphan2.jpg";
import CallIcon from "@mui/icons-material/Call";
import PlaceIcon from "@mui/icons-material/Place";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import osoloOfOsolo from "../assets/wcim-osolo.jpg";
import orphanageVisitPoster from "../assets/wcim-orphanage.jpg";
import evangelismStoryPoster from "../assets/wcim-evangelism4.jpg";
import schoolAmenitiesPoster from "../assets/wcim-school-amenities.jpg";
import hash from "../assets/hash.png";

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
        url: "/get-involved/volunteering",
      },
    ],
    columnType: "double-column",
  },
  {
    desc: "News & Stories",
    content: [
      {
        icon: hash,
        desc: "All stories",
        category: "show all",
      },
      {
        icon: hash,
        desc: "By Category",
        category: "health",
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

export const sectionLinks = ["Mailing list", "Donate today"];

export const sectionNames = {
  ["Mailing list"]: "subscription-form",
  ["Donate today"]: "donate-section",
};

export const doingsContent = navOptions.find(
  (option) => option.desc === "What we do"
).content;

export const storyCategories = [
  "show all",
  "health",
  "evangelism",
  "education",
  "orphanage",
  "clean-water",
  "financing",
];
export const storyContent = [
  {
    id: 2,
    imgSrc: scholarship,
    name: "ife-scholarship",
    desc: "Igniting dreams: scholarships illuminate paths to success",
    body: scholarshipStory,
    category: "education",
    url: "/stories/education/ife-scholarship",
    keywords: [
      "education",
      "scholarship",
      "school",
      "nigeria",
      "africa",
      "ife",
    ],
  },
  {
    id: 3,
    imgSrc: boreholeAponmu,
    name: "aponmu-borehole",
    desc: "Quenching the Thirst: A Borehole Brings Hope to Aponmu Community",
    body: aponmuBoreholeStory,
    category: "clean-water",
    url: "/stories/clean-water/aponmu-borehole",
    keywords: [
      "water",
      "clean water",
      "borehole",
      "nigeria",
      "africa",
      "aponmu",
    ],
  },
  {
    id: 4,
    imgSrc: orphanageVisitPoster,
    name: "ondo-orphanage",
    desc: "A Day of Joyful Giving at Ondo State Chidren's Home",
    body: orphanageVisitStory,
    category: "orphanage",
    url: "/stories/orphanage/ondo-orphanage",
    keywords: [
      "orphanage",
      "orphan",
      "nigeria",
      "africa",
      "ondo",
      "children",
      "kids",
    ],
  },
  {
    id: 1,
    name: "osolo-borehole",
    imgSrc: boreholeOsolo,
    desc: "A borehole of promise for osolo community in akure",
    body: osoloBoreholeStory,
    category: "clean-water",
    url: "/stories/clean-water/osolo-borehole",
    keywords: [
      "water",
      "clean water",
      "borehole",
      "nigeria",
      "africa",
      "osolo",
    ],
  },
  {
    id: 5,
    name: "church-thanksgiving",
    imgSrc: evangelismStoryPoster,
    desc: "Harmony of Hearts: WCIM Share Testimonies and Seek Divine Fortitude",
    body: testimonyStory,
    category: "evangelism",
    url: "/stories/evangelism/church-thanksgiving",
    keywords: [
      "evangelism",
      "gospel",
      "testimony",
      "nigeria",
      "africa",
      "ondo",
      "church",
    ],
  },
  {
    id: 6,
    name: "donate-support-group",
    imgSrc: financingPoster,
    desc: "A big thank you to our Ondo State Support Group",
    body: supportGroupGratitudeStory,
    category: "financing",
    url: "/stories/financing/donate-support-group",
    keywords: [
      "financing",
      "support group",
      "assistance",
      "nigeria",
      "africa",
      "ondo",
      "support",
    ],
  },
  {
    id: 7,
    name: "medical-checkups",
    imgSrc: healPoster,
    desc: "Preserving Well-Being: WCIM offers free health screening",
    body: medicalCheckUpStory,
    category: "health",
    url: "/stories/health/medical-checkups",
    keywords: [
      "health",
      "check up",
      "medical care",
      "nigeria",
      "africa",
      "ondo",
      "hospital",
    ],
  },
];

// Articles are programmed to be accepted as arrays
const scholarshipTestimonial = [
  `Thanks to World care international ministry, my education has been sorted. They helped with the costs and fueled my dreams. Your support makes a real difference, turning education into a pathway for a better future. I'm truly grateful for the chance you've given me.`,
];
const cleanWaterTestimonial = [
  `As the community leader of Osolo, I want to express our deep gratitude for the borehole water. This essential resource has transformed our daily lives, ensuring access to clean water for everyone.  We are truly thankful for the positive impact you've made by enhancing our well-being.`,
];
const orphanageTestimonial = [
  `Being an orphan isn't easy, but thanks to World Care International Ministry, our home is filled with love, care, and support. Thank you for making a difference in our lives.`,
];
export const testimonials = [
  {
    id: 1,
    imgSrc: scholarshipPoster,
    desc: "Scholarship Beneficiary",
    body: scholarshipTestimonial,
  },
  {
    id: 2,
    imgSrc: osoloOfOsolo,
    desc: "Osolo of Osolo",
    body: cleanWaterTestimonial,
  },
  {
    id: 3,
    imgSrc: orphanGiftPoster,
    desc: "The kids at the orphanage",
    body: orphanageTestimonial,
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
  "World Care International Ministry collaborates with individuals like YOU to express God’s love globally, alleviating human suffering through hunger relief, medical care, clean water access, and education.",
  " Our efficient, compassionate approach tailors programs to local needs, enabling partners to embody Jesus’ teachings and provide tangible support to those facing adversity.",
  "Together, we create a world where collective compassion lessens the impact of human suffering. Join us in making a positive difference for those in need.",
];

export const learnMorecontent = ["Give Now", "About Us", "Contact Us"];

export const doingsPageContent = [
  {
    id: "clean-water",
    title: "Clean water",
    poster: boreholeAponmu,
    icon: water,
    snippet:
      "In many corners of the world, a simple sip of water can pose grave dangers, even proving fatal. Sadly, numerous individuals in underprivileged regions must rely on contaminated streams or ponds, exposing them to waterborne diseases that claim the lives of countless children due to conditions like diarrhea and typhoid. Thanks to YOUR compassion, we are committed to establishing safe water sources, promoting sanitation, and fostering a healthier, brighter tomorrow for those facing these pressing challenges.",
    content: [
      "YOUR invaluable support has been the driving force behind our mission to combat the pressing issue of global water scarcity. In many regions, especially in Nigeria, communities grapple with the profound challenges of limited access to clean water.",
      "The impact of YOUR contributions has been transformative. Together, we've provided sustainable solutions, breaking the cycle of waterborne diseases and unlocking brighter futures. As we've witnessed the profound change in Nigeria, we are fueled by the vision to extend this impact to other nations.",
      "The need is urgent, and YOUR support is the catalyst for change. Join us in our quest to create a world where clean water flows freely, a testament to the power of collective action in addressing one of humanity's most critical challenges. YOUR donation isn't just a drop; it's a ripple of hope shaping a better future for communities worldwide. Together, let's make waves of lasting change.",
    ],
    video: cleanWaterVideo,
  },
  {
    id: "evangelism",
    title: "Evangelism",
    poster: evangelismPoster,
    icon: evangelism,
    snippet:
      "Evangelism addresses the human search for spiritual fulfillment by sharing a transformative message. It builds communities, positively influences society, and provides hope and guidance in challenging times. Beyond individual transformation, evangelism creates a global sense of unity, connecting believers in a shared spiritual journey.",
    content: [
      "YOUR contribution to evangelism serves as a divine beacon, spreading hope through the teachings of Jesus. By generously supporting, YOU enable the creation of educational materials and outreach programs that embody Christian values.",
      "YOUR donations, guided by the spirit of charity, become tangible expressions of Christ's love, reaching diverse communities in their spiritual and material needs. In aligning YOUR support with evangelism, YOU become an agent of transformative change, reflecting the compassion and teachings of Jesus in the world.",
      "Moreover, YOUR support often amplifies philanthropic initiatives embedded within evangelism, such as healthcare missions, educational programs, and community development projects, manifesting the teachings of Jesus in tangible ways. Through these divine efforts, YOU become a vessel of transformation, uplifting lives on both spiritual and practical levels in alignment with the compassionate spirit of Christianity.",
    ],
    video: "",
  },
  {
    id: "education",
    title: "Education",
    poster: eduPoster,
    icon: book,
    snippet:
      "Across the globe, hundreds of thousands of individuals face educational challenges that could be alleviated with proper support. Unfortunately, many of them lack the financial means to access the educational resources and opportunities they desperately need.",
    content: [
      "YOUR generous support is vital in overcoming educational challenges in developing countries, where financial constraints hinder access to quality learning. Scholarships and free education initiatives, fueled by YOUR generosity, aim to bridge this gap and empower aspiring minds.",
      "In Nigeria, YOUR impactful support funds scholarships and free education programs, creating opportunities for numerous students to pursue their educational dreams. These initiatives break the cycle of limited opportunities, providing a lifeline for individuals to escape poverty through knowledge and empowerment.",
      "The success in Nigeria fuels our global commitment. With YOUR support, we aim to replicate transformative education globally, empowering individuals, uplifting communities, and fostering a brighter, educated future.",
    ],
    video: educationVideo,
  },
  {
    id: "health",
    title: "Health care",
    poster: healthPoster,
    icon: health,
    snippet:
      "Globally, hundreds of thousands are afflicted by medical conditions that could be alleviated with proper care. Unfortunately, many lack the financial means to access the medical care they require.",
    content: [
      "YOUR support is crucial in providing medical care to those in need. Although, efforts have been made in Nigeria, we need to do more and also in other parts of the world as global shortage of accessible healthcare persists, leading to profound consequences and preventable deaths.",
      "Worldwide, untreated medical conditions highlight the urgent need for expanded healthcare initiatives. The lack of timely interventions intensifies health challenges, making your support vital in realizing medical care as a fundamental human right for those in crisis.",
      "As we strive to expand these efforts globally, your support becomes instrumental in saving lives, alleviating suffering, and advocating for healthcare accessibility worldwide. The vision is to create a world where no one is left behind due to a lack of medical care, and your support is a powerful force propelling us toward that transformative goal.",
    ],
    video: "",
  },
  {
    id: "orphanage",
    title: "Orphanage",
    poster: orphanPoster,
    icon: orphanage,
    snippet:
      "Across the world, hundreds of thousands of orphans endure challenging circumstances such as inadequate care, limited educational opportunities, and emotional hardship, which could be improved with proper support. Regrettably, many lack the necessary resources to access the care and opportunities they deserve.",
    content: [
      "YOUR support is a lifeline for orphans, providing essential assistance in orphanages. In Nigeria, progress has been made, but a global initiative is crucial. Without robust support, orphans face inadequate care, limited educational opportunities, and emotional challenges. YOUR support is vital in addressing these issues and extending hope for a brighter future.",
      "With YOUR backing, we aim to broaden our impact globally, ensuring orphans worldwide receive the care and opportunities they deserve.",
      "The lack of such support adversely affects orphans, hindering their physical, educational, and emotional well-being. YOUR contribution transcends borders, breaking down financial barriers and offering orphans a chance at a more promising future. Together, we can make a transformative impact, providing these children with the support they need to overcome challenges and fostering a more compassionate global future.",
    ],
    video: "",
  },
  {
    id: "financing",
    title: "Finanacial support",
    poster: financingPoster,
    icon: money,
    snippet:
      "Particularly in developing nations, individuals possess business ideas, inventions, and skills that could transform their lives and communities. However, the lack of financial resources hinders them from turning these aspirations into reality. Your support becomes a catalyst for a change.",
    content: [
      "In many developing regions worldwide, individuals possess untapped potential in business, innovation, and valuable skills. However, financial barriers often hinder the realization of these aspirations. YOUR vital support plays a key role in removing these obstacles by providing essential funds for business ventures, innovative projects, and skill enhancement, empowering individuals to turn their potential into tangible progress and economic independence.",
      "By investing in these individuals, YOUR support becomes a transformative force, not only changing individual destinies but also catalyzing positive shifts within entire communities. The establishment of businesses and realization of inventions create sustainable sources of income, breaking the chains of poverty.",
      "Through YOUR generosity, YOU sow the seeds of self-sufficiency, fostering a ripple effect that uplifts individuals, families, and entire communities towards a brighter and more sustainable future.",
    ],
    video: "",
  },
];

export const giftCategories = [
  {
    id: "support-monthly",
    title: "Support Monthly",
    poster: monthlySupport,
    desc: "Fuel lasting change by becoming a monthly donor. Your consistent support empowers us to address pressing needs, bringing hope, comfort, and joy to those in need. Join our community, ensuring a brighter future for all.",
    category: "",
  },
  {
    id: "feed-the-hungry",
    title: "Feed the Hungry",
    poster: feedPoster,
    desc: "Your support has the transformative ability to break the chains of hunger, providing nourishment and fostering hope. Join us in the mission to eradicate hunger, ensuring a future where no one experiences the pain of an empty.",
    category: "",
  },
  {
    id: "provide-clean-water",
    title: "Provide Clean Water",
    poster: waterGiftPoster,
    desc: "Empower change with the gift of clean water. Your donation fuels our mission, bringing life-sustaining water to communities in need. Join us in quenching the thirst for a healthier, brighter future.",
    category: "clean water",
  },
  {
    id: "educate-a-child",
    title: "Educate a Child",
    poster: scholarshipPoster,
    desc: "Elevate education and diminish illiteracy by sponsoring a child through your support. Your contribution nurtures young minds, paving the way for a brighter future.Sponsor a child today and be a beacon of hope and change.",
    category: "education",
  },
  {
    id: "heal-the-sick",
    title: "Heal the Sick",
    poster: healPoster,
    desc: "Be a healing force. Your donation supports our mission for vital medical care. Contribute to be a lifeline, letting compassion and care prevail for those facing medical challenges. Every contribution matters.",
    category: "medical care",
  },
  {
    id: "empower-orphans-today",
    title: "Empower Orphans Today",
    poster: orphanGiftPoster,
    desc: "Extend a lifeline to orphans in need. Your donation brings hope, care, and a chance for a brighter future. Join us in providing essential support and making a lasting impact in the lives of these resilient children.",
    category: "orphanage",
  },
  {
    id: "empower-evangelism",
    title: "Empower the Evangelism",
    poster: evangelismStoryPoster,
    desc: "Join us in illuminating hearts with the transformative message of hope and love. Your generous contribution empowers World Care International Ministry to spread the word of God through impactful evangelism initiatives.",
    category: "evangelism",
  },
  {
    id: "support-stuggling-families",
    title: "Support Struggling Familes",
    poster: financingPoster,
    desc: "Extend a helping hand to families facing adversity by supporting World Care International Ministry. Join us in creating a harmonious world where every family thrives, supported by the generosity of compassionate hearts like yours.",
    category: "financing",
  },
  {
    id: "support-free-health-check-up",
    title: "Support Free Health Check-up",
    poster: healthPoster,
    desc: "Your donation enables us to conduct free health screenings, ensuring early detection and provision of preventive care for those in need. Your support transforms lives, one health screening at a time.",
    category: "medical care",
  },
  {
    id: "provide-school-amenities",
    title: "Provide School Amenities",
    poster: schoolAmenitiesPoster,
    desc: "Be a catalyst for change by supporting us in providing essential amenities for schools in communities. Your contribution creates an environment where young minds can flourish. We build a foundation for success.",
    category: "education",
  },
];

export const choiceGiftCategories = [
  "show all",
  "medical care",
  "evangelism",
  "education",
  "orphanage",
  "clean water",
  "financing",
];

export const contactDetails = [
  {
    id: "location",
    icon: PlaceIcon,
    desc: "Visit Us",
    value: "Springfield, IL, United States, Illinois.",
    url: "",
  },
  {
    id: "phone",
    icon: CallIcon,
    desc: "Call Us",
    value: "+1 518-986-1836",
    url: "tel:+1 518-986-1836",
  },
  {
    id: "mail",
    icon: EmailIcon,
    desc: "Send us a mail",
    value: "worldcareinc@gmail.com",
    url: "mailto:worldcareinc@gmail.com",
  },
  {
    id: "facebook",
    icon: FacebookIcon,
    desc: "Look us up",
    value: "facebook.com/myworldcare208",
    url: "https://facebook.com/myworldcare208",
  },
];

export const donationSectionImages = [
  financingPoster,
  scholarship,
  scholarshipPoster,
  // orphanGiftPoster,
  orphanPoster,
  boreholeOsolo,
];
