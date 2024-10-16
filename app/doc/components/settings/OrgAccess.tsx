import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import BlurFade from "@/components/ui/blur-fade";
import { FaEnvelope, FaBell, FaKey, FaClock } from "react-icons/fa";
import React, { useState } from "react";
import { EmailProviderSettingsData, orgRole } from "./settingsData";

const OrgAccess = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="p-8 rounded-lg">
      <h2 className="text-3xl font-bold mb-6">Organization ROLE(With access)</h2>
      <p className="text-gray-400 mb-8">
        The Organization ROLE Settings allow to configure and automate With access
      </p>
      <div className="flex items-start">
      <ul className="list-none space-y-6 text-gray-500 flex-1">
          {orgRole.map((setting, index) => (
            <li className="flex items-center" key={index}>
              <setting.icon className={`${setting.color} mr-3 `} />
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
                  src="/orglist.png"
                  alt="Organization Setup"
                  className="w-[400px] h-auto cursor-pointer rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                  onClick={() => setOpen(true)}
                />
              </DialogTrigger>
              <DialogContent className="w-full max-w-[90vw] md:max-w-[1200px] p-4 bg-gray-800 rounded-lg">
                <img
                  src="/orglist.png"
                  alt="Organization Setup"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </DialogContent>
            </Dialog>
          </BlurFade>
        </div>

       
      </div>
    </div>
  );
};

export default OrgAccess;
