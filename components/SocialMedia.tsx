import Link from "next/link";
import { FaGithub, FaXTwitter, FaLinkedin } from "react-icons/fa6";

// Define a type for your social media items
type SocialMediaItem = {
  id: number;
  icon: JSX.Element; // Use JSX.Element to represent React elements
  href: string;
};

// Define your array with the correct type
export const socialMedia: SocialMediaItem[] = [
  {
    id: 1,
    icon: <FaGithub />, // JSX element
    href: "https://github.com/thamir0022",
  },
  {
    id: 2,
    icon: <FaXTwitter />, // JSX element
    href: "https://x.com/thamirsiddik",
  },
  {
    id: 3,
    icon: <FaLinkedin />, // JSX element
    href: "https://www.linkedin.com/in/thamirsiddik/",
  },
];

const SocialMedia = () => {
  return (
    <div className="mt-5 lg:mt-0 flex items-center md:gap-3 gap-6">
      {socialMedia.map(({ id, href, icon }) => (
        <div
          key={id}
          className="w-10 h-10 cursor-pointer flex justify-center items-center
            backdrop-filter backdrop-blur-lg 
            saturate-200 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
        >
          <Link href={href} target="_blank">{icon}</Link>
        </div>
      ))}
    </div>
  );
};

export default SocialMedia;
