
import React from 'react';
import SocialButton from '../buttons/SocialButton';

const socialMediaLinks = [
  { href: 'https://linkedin.com', imagePath: '/linkedin.png', altText: 'LinkedIn' },
  { href: 'https://twitter.com', imagePath: '/twitter.png', altText: 'Twitter' },
  { href: 'https://instagram.com', imagePath: '/instagram.png', altText: 'Instagram' },
  { href: 'https://telegram.com', imagePath: '/telegram.png', altText: 'Telegram' },
  { href: 'https://discord.com', imagePath: '/discord.png', altText: 'Discord' },
  { href: 'https://github.com', imagePath: '/github.png', altText: 'Github', width: 40, height: 40 },
  { href: 'https://youtube.com', imagePath: '/youtube.png', altText: 'Youtube', width: 40, height: 40 },
  { href: 'https://medium.com', imagePath: '/medium.png', altText: 'Medium' },
];

const SocialMediaGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {socialMediaLinks.map((link, index) => (
        <SocialButton
          key={index}
          href={link.href}
          imagePath={link.imagePath}
          altText={link.altText}
          width={link.width ? link.width : 24}
          height={link.height ? link.width : 24}
        />
      ))}
    </div>
  );
};

export default SocialMediaGrid;
