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
  faDev,
} from "@fortawesome/free-brands-svg-icons";

const socialMediaLinks = [
  {
    href: "https://www.linkedin.com/company/ieee-computer-society-vit-chennai",
    icon: faLinkedin,
  },
  { href: "https://twitter.com/ieeecsvit", icon: faTwitter },
  { href: "https://instagram.com/compsoc.vitcc/", icon: faInstagram },
  { href: "https://t.me/IEEE_CS_VIT_Chennai", icon: faTelegram },
  { href: "https://discord.gg/6vkY3kcZnE", icon: faDiscord },
  { href: "https://github.com/ComputerSocietyVITC", icon: faGithub },
  {
    href: "https://www.youtube.com/channel/UCOgwDinZGau4rwv3swAe-nQ",
    icon: faYoutube,
  },
  { href: "https://dev.to/ieeecsvitc", icon: faDev },
];

const SocialMediaGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-4 gap-y-4">
      {socialMediaLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center mx-2 justify-center bg-[#0B1E3E] rounded-lg w-12 h-12 hover:bg-blue-500 transition-all duration-300 "
        >
          <FontAwesomeIcon icon={link.icon} size="lg" className="" />
        </a>
      ))}
    </div>
  );
};

export default SocialMediaGrid;
