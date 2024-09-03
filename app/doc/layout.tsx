"use client";
import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import * as Collapsible from "@radix-ui/react-collapsible";
import { ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <div style={{ display: "flex", marginTop: "100px", marginLeft: "200px", marginRight: "200px" }}>
      <NavigationMenu.Root style={{ padding: "1rem", width: "250px" }}>
        <NavigationMenu.List>
          <Collapsible.Root>
            <Collapsible.Trigger asChild>
              <NavigationMenu.Item style={{ cursor: "pointer", paddingBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", cursor: "pointer" }}>
                  Get Started
                  <ChevronDown />
                </div>
              </NavigationMenu.Item>
            </Collapsible.Trigger>
            <Collapsible.Content>
              <NavigationMenu.Item
                style={{ paddingLeft: "1rem", paddingBottom: "1rem", cursor: "pointer" }}
                onClick={() => router.push("/doc/components/introduction")}
              >
                Introduction
              </NavigationMenu.Item>
              <NavigationMenu.Item style={{ paddingLeft: "1rem", paddingBottom: "1rem", cursor: "pointer" }}>
                <a href="#screenshots">Screenshots</a>
              </NavigationMenu.Item>
              {/* Other Navigation Items */}
            </Collapsible.Content>
          </Collapsible.Root>

          {/* Other Collapsible Items for Knowledge Base, Resource, API */}
        </NavigationMenu.List>
      </NavigationMenu.Root>

      <div style={{ padding: "1rem", flexGrow: 1, overflowY: "auto" }}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
