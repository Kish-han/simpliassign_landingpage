import React from "react";
import Themetoggle from "./theme-toggle";
import { FloatingNav } from "./ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

type Props = {};

const Navbar = (props: Props) => {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="flex justify-between px-4 py-7">
      <div className="">LOGO</div>
      <div className="">
        <FloatingNav navItems={navItems} />
      </div>
      <div className="">
        <Themetoggle />
      </div>
    </div>
  );
};

export default Navbar;
