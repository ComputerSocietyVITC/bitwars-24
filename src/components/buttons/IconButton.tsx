import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface IconButtonProps {
    href: string;
    src: string;
    alt: string;
    width?: number;
    height?: number;
}

const IconButton: React.FC<IconButtonProps> = ({ href, src, alt, width, height }) => {
    return (
        <>
        <Link href={href}>
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                className="relative"
            />
        </Link>
        </>
    );
};

export default IconButton;
