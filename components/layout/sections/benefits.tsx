import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import {
  BellIcon,
  CalendarIcon,
  GlobeIcon,
  LightningBoltIcon,
} from "@radix-ui/react-icons";

const features = [
  {
    Icon: LightningBoltIcon,
    name: "Light Weight",
    description: "Search through all your files in one place.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "col-span-1 row-span-1", // Set to span one column and row
  },
  {
    Icon: GlobeIcon,
    name: "Multi Language",
    description: "Supports 100+ languages and counting.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "col-span-1 row-span-1", // Set to span one column and row
  },
  {
    Icon: CalendarIcon,
    name: "Calendar",
    description: "Use the calendar to filter your files by date.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "col-span-1 row-span-1", // Set to span one column and row
  },
  {
    Icon: BellIcon,
    name: "Notifications",
    description:
      "Get notified when someone shares a file or mentions you in a comment.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "col-span-1 row-span-1", // Set to span one column and row
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider">Benefits</h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Shortcut to Success
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
            ducimus reprehenderit architecto rerum similique facere odit
            deleniti necessitatibus quo quae.
          </p>
        </div>

        {/* Grid Layout */}
        <BentoGrid className="grid grid-cols-2 gap-6 hover:text-[#6ed8c8]">
          {/* Row 1 */}
          <BentoCard key={features[0].name} {...features[0]} />
          <BentoCard key={features[1].name} {...features[1]} />

          {/* Row 2 */}
          <BentoCard key={features[2].name} {...features[2]}  />
          <BentoCard key={features[3].name} {...features[3]} />
        </BentoGrid>
      </div>
    </section>
  );
};
