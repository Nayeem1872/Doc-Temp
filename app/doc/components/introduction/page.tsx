import WordPullUp from "@/components/magicui/word-pull-up";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import React from "react";

const Intro = () => {
  return (
    <div>
     
     <div className="flex flex-col items-start">
  <WordPullUp className="text-2xl font-bold md:text-4xl" words="Introduction" />
  <Separator my="3" size="4" />
  <p className="text-lg mb-8">
    nIAM brings you cutting-edge identity and access management solutions.
  </p>
</div>
     
    </div>
  );
};

export default Intro;
