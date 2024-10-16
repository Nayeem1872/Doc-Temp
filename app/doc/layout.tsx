"use client";
import React, { ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface LayoutProps {
  children: ReactNode;  
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();

  return (
    <div style={{ display: "flex", marginTop: "100px", marginLeft: "200px", marginRight: "200px" }}>
     <aside className="w-64 p-4 border-r border-gray-700">
          <nav className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Getting Started</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/doc" className="text-gray-400 hover:text-white" prefetch={false}>
                    Installation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white" prefetch={false}>
                    Project Structure
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">When to use it</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/doc" className="text-gray-400 hover:text-white" prefetch={false}>
                    Installation
                  </Link>
                </li>
                <li>
                  <Link href="/doc/components/settings" className="text-gray-400 hover:text-white" prefetch={false}>
                    Settings
                  </Link>
                </li>
              </ul>
            </div>
          
            <div>
              <h3 className="text-lg font-semibold">API Reference</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white" prefetch={false}>
                    Components
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white" prefetch={false}>
                    File Conventions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white" prefetch={false}>
                    Functions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white" prefetch={false}>
                    next.config.js Options
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </aside>

      <div style={{ padding: "1rem", flexGrow: 1, overflowY: "auto" }}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
