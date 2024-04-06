'use client'

import type { NavbarProps } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Link,
  Button,
} from '@nextui-org/react'
export const menuItems = ['Home', 'Product', 'About']
export default function Navibar(props: NavbarProps) {
  return (
    <Navbar
      {...props}
      classNames={{
        base: 'py-4 backdrop-filter-none bg-transparent',
        wrapper: 'px-0 w-full justify-center bg-transparent',
        item: 'hidden md:flex',
      }}
      height="54px"
    >
      <NavbarContent
        className="gap-4 rounded-full border-small border-default-200/20 bg-background/60 px-2 shadow-medium backdrop-blur-md backdrop-saturate-150 dark:bg-default-100/50"
        justify="center"
      >
        {/* Toggle */}
        <NavbarMenuToggle className="ml-2 text-default-400 md:hidden" />

        {/* Logo */}
        <NavbarBrand className="mr-2 w-[40vw] md:w-auto md:max-w-fit">
          <div className="rounded-full bg-foreground text-background">
            {/* icon */}
            <Image
              src="assets/brand/catalyzt.svg"
              alt="logo"
              width={40}
              height={40}
            />
          </div>
          {/* <span className="ml-2 font-medium md:hidden">ACME</span> */}
        </NavbarBrand>

        {/* Items */}
        <NavbarItem className="hidden md:flex" isActive>
          <Link className="text-default-500" href="#" size="sm">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-default-500" href="#" size="sm">
            Product
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-default-500" href="#" size="sm">
            About
          </Link>
        </NavbarItem>
        <NavbarItem className="ml-2 !flex">
          <a href="#contact-us">
            <Button radius="full" variant="flat">
              Contact Us
            </Button>
          </a>
        </NavbarItem>
      </NavbarContent>

      {/* Menu */}
      <NavbarMenu
        className="top-[calc(var(--navbar-height)/2)] mx-auto mt-16 max-h-[22vh] max-w-[80vw] rounded-large border-small border-default-200/20 bg-background/60 py-6 shadow-medium backdrop-blur-md backdrop-saturate-150 dark:bg-default-100/50"
        motionProps={{
          initial: { opacity: 0, y: -20 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -20 },
          transition: {
            ease: 'easeInOut',
            duration: 0.2,
          },
        }}
      >
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full text-default-500" href="#" size="md">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
