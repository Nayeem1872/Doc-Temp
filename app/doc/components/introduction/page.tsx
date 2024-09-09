import WordPullUp from "@/components/magicui/word-pull-up";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import React from "react";

const Intro = () => {
  return (
    <div>
    <section className="flex-1 p-8 space-y-8 flex flex-col items-start">
      <WordPullUp
        className="text-2xl font-bold md:text-4xl"
        words="Introduction"
      />
      <p className="text-gray-400">Welcome to the Next.js documentation!</p>
      <hr className="border-gray-700" />
      <h2 className="text-2xl font-semibold">What is Next.js?</h2>
      <p className="text-gray-400">
        nIAM brings you cutting-edge identity and access management solutions.
      </p>
      <p className="text-gray-400">
        Under the hood, Next.js also abstracts and automatically configures
        tooling needed for React, like bundling, compiling, and more. This
        allows you to focus on building your application instead of spending
        time with configuration.
      </p>
      <p className="text-gray-400">
        Whether you are an individual developer or part of a larger team,
        Next.js can help you build interactive, dynamic, and fast React
        applications.
      </p>
      <hr className="border-gray-700" />
      <h2 className="text-2xl font-semibold">Main Features</h2>
      <p className="text-gray-400">
        Some of the main Next.js features include:
      </p>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b border-gray-700">Feature</th>
            <th className="px-4 py-2 border-b border-gray-700">
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border-b border-gray-700">Routing</td>
            <td className="px-4 py-2 border-b border-gray-700">
              A file-system based router built on top of Server Components
              that supports layouts, nested routing, loading states, error
              handling, and more.
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b border-gray-700">Data Fetching</td>
            <td className="px-4 py-2 border-b border-gray-700">
              Fetch data on the server or client-side. Supports static
              generation, server-side rendering, and client-side rendering.
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b border-gray-700">Rendering</td>
            <td className="px-4 py-2 border-b border-gray-700">
              Choose between static generation, server-side rendering, and
              client-side rendering.
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
  
  );
};

export default Intro;
