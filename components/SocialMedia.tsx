import Link from "next/link";
import {
  FaGithub,
  FaXTwitter,
  FaLinkedin,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

// Social media config
type SocialMediaItem = {
  id: number;
  label: string;
  icon: JSX.Element;
  href: string;
};

export const socialMedia: SocialMediaItem[] = [
  {
    id: 1,
    label: "GitHub profile",
    icon: <FaGithub aria-hidden="true" />,
    href: "https://github.com/thamir0022",
  },
  {
    id: 2,
    label: "Twitter (X) profile",
    icon: <FaXTwitter aria-hidden="true" />,
    href: "https://x.com/thamirsiddik",
  },
  {
    id: 3,
    label: "LinkedIn profile",
    icon: <FaLinkedin aria-hidden="true" />,
    href: "https://www.linkedin.com/in/thamirsiddik/",
  },
  {
    id: 4,
    label: "Chat on WhatsApp",
    icon: <FaWhatsapp aria-hidden="true" />,
    href: "https://wa.me/919778078742?text=Hi",
  },
  {
    id: 5,
    label: "Instagram profile",
    icon: <FaInstagram aria-hidden="true" />,
    href: "https://www.instagram.com/thaxxmir",
  },
  {
    id: 6,
    label: "Send email",
    icon: <IoIosMail aria-hidden="true" />,
    href: "mailto:thamirsiddik@gmail.com",
  },
];

const SocialMedia = () => {
  return (
    <nav aria-label="Social media links">
      <ul className="mt-5 lg:mt-0 flex items-center md:gap-3 gap-6">
        {socialMedia.map(({ id, href, icon, label }) => (
          <li key={id}>
            <Link
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 cursor-pointer flex justify-center items-center
                backdrop-filter backdrop-blur-lg 
                saturate-200 bg-opacity-75 bg-black-200 rounded-lg border border-black-300
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              {icon}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SocialMedia;
