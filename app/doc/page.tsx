"use client"
import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import * as Collapsible from "@radix-ui/react-collapsible";
import { ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";
import Intro from "./components/introduction/page";

const Sidebar = () => {
  const router = useRouter();
  return (
   <>
   <Intro/>
   </>
  );
};

export default Sidebar;
