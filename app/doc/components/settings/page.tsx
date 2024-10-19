"use client";
import WordPullUp from "@/components/magicui/word-pull-up";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import BlurFade from "@/components/ui/blur-fade";
import { FaBuilding, FaInfoCircle, FaLock, FaCogs } from "react-icons/fa"; 
import { MdDomainVerification } from "react-icons/md";
import React, { useState } from "react";
import EmailProviderSettings from "./EmailProviderSettings";
import OAuthProvider from "./OAuthProviders";
import DataSynchronization from "./DataSynchronization";
import { organizationSettings } from "./settingsData";
import OrgAccess from "./OrgAccess";

const Settings = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <section className="flex-1 p-8 space-y-8 flex flex-col items-start">
        <WordPullUp
          className="text-2xl font-bold md:text-4xl"
          words="Settings"
        />
        <p className="text-gray-400">
          Welcome to the Organization Settings Documentation!
        </p>
        <hr className="border-gray-700" />
        <div className="p-8 rounded-lg">

        <h2 className="text-3xl font-bold mb-6">Org Info Edit</h2>
        <p className="text-gray-400 mb-8">
          The Org Info Edit feature helps to set up and manage key organization
          settings, including domain management and roles.
        </p>
        <div className="flex items-start">
          <ul className="list-none space-y-6 text-gray-500 flex-1">
          {organizationSettings.map((setting, index) => (
            <li className="flex items-center" key={index}>
              <setting.icon className={`${setting.color} mr-3 text-xl`} />
              <div>
                <strong>{setting.title}</strong>
                <p className="text-sm">{setting.description}</p>
              </div>
            </li>
          ))}
        </ul>

          <div className="flex-shrink-0 ml-6">
            <BlurFade delay={0.25} inView>
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                <img
                  src="/settings.png"
                  alt="Organization Setup"
                  className="w-[400px] h-auto cursor-pointer rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                  onClick={() => setOpen(true)}
                />
              </DialogTrigger>
              <DialogContent className="w-full max-w-[90vw] md:max-w-[1200px] p-4 bg-gray-800 rounded-lg">
                <img
                  src="/settings.png"
                  alt="Organization Setup"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                </DialogContent>
              </Dialog>
            </BlurFade>
          </div>
        </div>

          
        </div>
        <hr className="border-gray-700" />
<EmailProviderSettings/>
<hr className="border-gray-700" />
    <OAuthProvider/>

        <hr className="border-gray-700" />

        <DataSynchronization/>

        <OrgAccess/>
      </section>
    </div>
  );
};

export default Settings;
