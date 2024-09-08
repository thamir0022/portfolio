import { FaGithub, FaXTwitter, FaLinkedin } from "react-icons/fa6";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
  { name: "Resume", link: "/Thamir_Resume.pdf" },
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
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
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
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
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
  {
    id: 7,
    title: "Unlock My Code",
    description: "",
    className: "md:col-span-6 md:row-span-4",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Horizon - A Modern Banking Web App",
    des: "Horizon your innovative and fun way to manage your finances! 🌟 Connect your bank accounts, track your spending, and transfer funds with ease, all wrapped in a sleek, modern interface.",
    img: "/horizon.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/app.svg"],
    link: "https://github.com/thamir0022/Horizon",
  },
  {
    id: 2,
    title: "Ecommerce Web App",
    des: "Explore a seamless online shopping experience with our Next.js Ecommerce Web App.",
    img: "/ecommerce.png",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/mongodb.svg",
      "/material.svg",
      "/stripe.svg",
    ],
    link: "https://github.com/thamir0022/Nextjs-Ecommerce-Client",
  },
  {
    id: 3,
    title: "Blog Web App",
    des: "This project is a blog web app built with MERN stack. I spiced up the design using Tailwind CSS and made the bundling efficient with Vite.js.",
    img: "/blog.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/ts.svg",
      "/mongodb.svg",
      "/nodejs.svg",
    ],
    link: "https://github.com/thamir0022/Mern-Blog-App",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/thamir0022/Apple-Website-Clone",
  },
];

export const testimonials = [
  {
    quote:
      "Thamir was a fantastic addition to our team at Grapesgenix. His dedication, enthusiasm, and strong technical skills in both frontend and backend development were evident throughout his time with us. Thamir consistently contributed valuable ideas and adapted quickly to new technologies, making a significant impact on our projects. If you're looking for a talented and committed developer, Thamir is the right choice.",
    name: "Gopikrishnan P.G",
    title: "CEO Of Grapesgenix Technical Solutions Pvt Ltd",
  },
  {
    quote:
      "Thamir was a fantastic addition to our team at Grapesgenix. His dedication, enthusiasm, and strong technical skills in both frontend and backend development were evident throughout his time with us. Thamir consistently contributed valuable ideas and adapted quickly to new technologies, making a significant impact on our projects. If you're looking for a talented and committed developer, Thamir is the right choice.",
    name: "Gopikrishnan P.G",
    title: "CEO Of Grapesgenix Technical Solutions Pvt Ltd",
  },
  {
    quote:
      "Thamir was a fantastic addition to our team at Grapesgenix. His dedication, enthusiasm, and strong technical skills in both frontend and backend development were evident throughout his time with us. Thamir consistently contributed valuable ideas and adapted quickly to new technologies, making a significant impact on our projects. If you're looking for a talented and committed developer, Thamir is the right choice.",
    name: "Gopikrishnan P.G",
    title: "CEO Of Grapesgenix Technical Solutions Pvt Ltd",
  },
  {
    quote:
      "Thamir was a fantastic addition to our team at Grapesgenix. His dedication, enthusiasm, and strong technical skills in both frontend and backend development were evident throughout his time with us. Thamir consistently contributed valuable ideas and adapted quickly to new technologies, making a significant impact on our projects. If you're looking for a talented and committed developer, Thamir is the right choice.",
    name: "Gopikrishnan P.G",
    title: "CEO Of Grapesgenix Technical Solutions Pvt Ltd",
  },
  {
    quote:
      "Thamir was a fantastic addition to our team at Grapesgenix. His dedication, enthusiasm, and strong technical skills in both frontend and backend development were evident throughout his time with us. Thamir consistently contributed valuable ideas and adapted quickly to new technologies, making a significant impact on our projects. If you're looking for a talented and committed developer, Thamir is the right choice.",
    name: "Gopikrishnan P.G",
    title: "CEO Of Grapesgenix Technical Solutions Pvt Ltd",
  },
];

// export const companies = [
//   {
//     id: 1,
//     name: "cloudinary",
//     img: "/cloud.svg",
//     nameImg: "/cloudName.svg",
//   },
//   {
//     id: 2,
//     name: "appwrite",
//     img: "/app.svg",
//     nameImg: "/appName.svg",
//   },
//   {
//     id: 3,
//     name: "HOSTINGER",
//     img: "/host.svg",
//     nameImg: "/hostName.svg",
//   },
//   {
//     id: 4,
//     name: "stream",
//     img: "/s.svg",
//     nameImg: "/streamName.svg",
//   },
//   {
//     id: 5,
//     name: "docker.",
//     img: "/dock.svg",
//     nameImg: "/dockerName.svg",
//   },
// ];

export const workExperience = [
  {
    id: 1,
    title: "MERN Stack Intern",
    desc: "Completed a 4-month internship focusing on both frontend and backend development using the MERN stack. Contributed to multiple projects, demonstrating a strong willingness to learn and adapt to new technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Next.js Developer",
    desc: "Currently working as a Next.js Developer, building scalable and maintainable web applications with modern UI/UX design principles, and enhancing performance and security.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
];
