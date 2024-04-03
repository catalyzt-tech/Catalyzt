"use client";

import type {IconProps} from "@iconify/react";

import React from "react";
import {Link, Spacer} from "@nextui-org/react";
import {Icon} from "@iconify/react";

import Image from 'next/image';

type SocialIconProps = Omit<IconProps, "icon">;

const navLinks = [
  {
    name: "Home",
    href: "#",
  },
  {
    name: "Product",
    href: "#",
  },
  {
    name: "About",
    href: "#",
  },
  {
    name: "Contact Us",
    href: "#",
  },
];

const socialItems = [
  {
    name: "Twitter",
    href: "https://twitter.com/catalyzt_tech",
    icon: (props: SocialIconProps) => <Icon {...props} icon="fontisto:twitter" />,
  },
  {
    name: "GitHub",
    href: "https://github.com/catalyzt-team",
    icon: (props: SocialIconProps) => <Icon {...props} icon="fontisto:github" />,
  }
];

export default function Footer() {
  return (
    <footer className="flex w-full flex-col">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-6 py-12 lg:px-8">
        <div className="flex items-center justify-center">
          <Image src="assets/brand/catalyzt-banner.svg" alt="logo" height={44} width={120} />
        </div>
        <Spacer y={4} />
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              isExternal
              className="text-default-500"
              href={item.href}
              size="sm"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <Spacer y={6} />
        <div className="flex justify-center gap-x-4">
          {socialItems.map((item) => (
            <Link key={item.name} isExternal className="text-default-400" href={item.href}>
              <span className="sr-only">{item.name}</span>
              <item.icon aria-hidden="true" className="w-5" />
            </Link>
          ))}
        </div>
        <Spacer y={4} />
        <p className="mt-1 text-center text-small text-default-400">
          &copy; 2024 Catalyzt. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
