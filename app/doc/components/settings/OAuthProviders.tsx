import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import BlurFade from "@/components/ui/blur-fade";
import { useState } from "react";
import { FaGoogle, FaMicrosoft, FaUserShield, FaKey } from "react-icons/fa"; // FontAwesome Icons
import { oauthProvidersData } from "./settingsData";

const OAuthProvider = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="p-8 rounded-lg">
      <h2 className="text-3xl font-bold  mb-6">OAuth Provider</h2>
      <p className="text-gray-400 mb-8">
        Configure and automate your organization OAuth settings for seamless authentication.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ul className="list-none space-y-6 text-gray-500 flex-1">
          {oauthProvidersData.map((provider, index) => (
            <li key={index} className="flex items-center">
              <provider.icon className={`${provider.color} mt-1 mr-3`} />
              <div>
                <h3 className="text-lg font-semibold">{provider.title}</h3>
                {provider.description.map((desc, idx) => (
                  <p key={idx}>
                    <strong>{desc.label}</strong> {desc.content}
                  </p>
                ))}
              </div>
            </li>
          ))}
        </ul>

        {/* Right: Image with Modal */}
        <div className="flex-shrink-0">
          <BlurFade delay={0.25} inView>
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <img
                  src="/loginProvider.png"
                  alt="Organization Setup"
                  className="w-[400px] h-auto cursor-pointer rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                  onClick={() => setOpen(true)}
                />
              </DialogTrigger>
              <DialogContent className="w-full max-w-[90vw] md:max-w-[1200px] p-4 bg-gray-800 rounded-lg">
                <img
                  src="/loginProvider.png"
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

export default OAuthProvider;
