import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import BlurFade from "@/components/ui/blur-fade";
import {
  FaSyncAlt,
  FaServer,
  FaUser,
  FaLock,
  FaFolderOpen,
  FaExclamationTriangle,
  FaToggleOn,
  FaCalendarCheck,
  FaClock,
} from "react-icons/fa";
import { useState } from "react";
import { syncSettingsData, transferProtocols } from "./settingsData";

const DataSynchronization = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex-1 p-8 space-y-8 flex flex-col items-start">
     <h2 className="text-3xl font-bold mb-6">
        User Data Synchronization Config
        </h2>

      <section className="flex flex-col md:flex-row items-start">
        <div className="flex-shrink-0 mr-6">
          <BlurFade delay={0.25} inView>
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <img
                  src="/dataSync.png"
                  alt="Organization Setup"
                  className="w-[400px] h-auto cursor-pointer rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                  onClick={() => setOpen(true)}
                />
              </DialogTrigger>
              <DialogContent className="w-full max-w-[90vw] md:max-w-[1200px] p-4 bg-gray-800 rounded-lg">
                <img
                  src="/dataSync.png"
                  alt="Organization Setup"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </DialogContent>
            </Dialog>
          </BlurFade>
        </div>

        <ul className="list-none space-y-6 text-gray-500 flex-1">
          {syncSettingsData.map((item) => (
            <li key={item.id} className="flex items-center">
              <item.icon className={`${item.color} mr-2 text-md`} />
              <div>
                <h2 className="text-xl font-semibold">{item.title}</h2>
                {item.description.map((desc, idx) => (
                  <p key={idx}>
                    <strong>{desc.label}</strong> {desc.content}
                  </p>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <h2 className="text-xl font-semibold mt-8">Types of Resources</h2>
      <section className="space-y-6">
      <ul className="list-none space-y-6 text-gray-500 flex-1">
          {transferProtocols.map((item) => (
            <li key={item.id} className="flex items-center">
              <item.icon className={`${item.color} mr-2 text-md`} />
              <div>
                <h2 className="text-xl font-semibold">{item.title}</h2>
                {item.description.map((desc, idx) => (
                  <p key={idx}>
                    <strong>{desc.label}</strong> {desc.content}
                  </p>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default DataSynchronization;
