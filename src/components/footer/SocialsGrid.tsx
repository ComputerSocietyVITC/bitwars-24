import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTwitter,
  faInstagram,
  faTelegram,
  faDiscord,
  faGithub,
  faYoutube,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const socialMediaLinks = [
  { href: "https://linkedin.com", icon: faLinkedin },
  { href: "https://twitter.com", icon: faTwitter },
  { href: "https://instagram.com", icon: faInstagram },
  { href: "https://telegram.com", icon: faTelegram },
  { href: "https://discord.com", icon: faDiscord },
  { href: "https://github.com", icon: faGithub },
  { href: "https://youtube.com", icon: faYoutube },
  { href: "https://medium.com", icon: faMedium },
];

const SocialMediaGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-y-4 md:grid-cols-4">
      {socialMediaLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center mx-4 justify-center bg-[#0B1E3E] rounded-lg w-12 h-12 hover:bg-blue-500 transition-all duration-300 "
        >
          <FontAwesomeIcon icon={link.icon} size="lg" className=""/>
        </a>
      ))}
    </div>
  );
};

export default SocialMediaGrid;
