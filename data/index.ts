import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-3 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },

  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Gadtech - Ecommerce for Gadgets",
    des: "Gadtech is an e-commerce platform designed for Gadget enthusiasts, offering a seamless shopping experience.",
    img: "/cf.png",
    iconLists: ["/re.svg", "/tail.svg", "/redux.png"],
    link: "https://github.com/muhammedsouban/Gadtech.Store",
  },
  {
    id: 2,
    title: "DestinyEuro - Study Abroad",
    des: "DestinyEuro is a study abroad platform with a sleek and user-friendly UI, designed to make the process of exploring and applying to international universities effortless.",
    img: "/de.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/cloud.png"],
    link: "https://destinyeuro.com/",
  },
  // {
  //   id: 3,
  //   title: "Light Charity - A Blood Bank Charity ",
  //   des: "A REAL Software-as-a-Service app for blood banks having features like nearby hospital search,blood bank inventory,donor adding feature and many more. .",
  //   img: "/lc.png",
  //   iconLists: [
  //     "/re.svg",
  //     "/tail.svg",
  //     "/node.png",
  //     "/mongo.png",
  //     "/maps.png",
  //     "/cloud.png",
  //   ],
  //   link: "https://light-charity-v3.onrender.com/",
  // },
  // {
  //   id: 4,
  //   title: "Authentication kit(on going..)",
  //   des: " this Kit is a robust and scalable authentication solution for Next.js applications, providing secure user registration, login, and session management,two factor authentication with customizable providers and role-based access control ",
  //   img: "/kit.png",
  //   iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "auth.png"],
  //   link: "https://github.com/muhammedsouban",
  // },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Souban was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Souban's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Souban is the ideal partner.",
    name: "Mrinal Dawn",
    title: "Founder of Destiny Euro",
  },
  {
    quote:
      "Working with Souban was a delight! His professionalism, swift responses, and commitment to excellence shone through every aspect of our collaboration. Souban's passion for innovative solutions is truly remarkable. If you're looking to transform your online presence and amplify your brand, Souban is the perfect collaborator.",
    name: "Guru Sandhu",
    title: "Director of Light Charity ",
  },
  {
    quote:
      "Collaborating with Souban was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Souban's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Souban is the ideal partner.",
    name: "Mrinal Dawn",
    title: "Founder of Destiny Euro",
  },
  {
    quote:
      "Working with Souban was a delight! His professionalism, swift responses, and commitment to excellence shone through every aspect of our collaboration. Souban's passion for innovative solutions is truly remarkable. If you're looking to transform your online presence and amplify your brand, Souban is the perfect collaborator.",
    name: "Guru Sandhu",
    title: "Director of Light Charity ",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Developer",
    desc: "Assisted in the development of a web-based platform using Next.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Full Stack Developer",
    desc: "Assisted in the development of a web-based platform using React.js and Node.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/muhammedsouban",
  },
  {
    id: 2,
    img: "/X_logo.svg",
    link: "https://x.com/Soubanbi",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/muhammed-souban/",
  },
];
