import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface SocialButtonProps {
  href: string;
  imagePath: string;
  altText: string;
  width?: number;
  height?: number;
}

const SocialButton: React.FC<SocialButtonProps> = ({ href, imagePath, altText, width = 24, height = 24 }) => {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
        <div
          className="flex items-center justify-center bg-[#0c3352] rounded-lg"
          style={{ width: 44, height: 44, padding: '2px' }}
        >
        <Image src={imagePath} alt={altText} width={width} height={height} />
        </div>
    </Link>
  );
};

export default SocialButton;
