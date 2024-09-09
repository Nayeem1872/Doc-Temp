"use client";
import { BorderBeam } from "@/components/magicui/border-beam";
import SparklesText from "@/components/magicui/sparkles-text";
import WordPullUp from "@/components/magicui/word-pull-up";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

export const HeroSection = () => {

  const router = useRouter()

const redirect = ()=>{
 router.push("/doc")
}

  const { theme } = useTheme();
  return (
    <section className="container w-full">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
        <div className="text-center space-y-8">
          <Badge variant="outline" className="text-sm py-2">
            <span className="mr-2 text-primary">
              <Badge>New</Badge>
            </span>
            <span> Design is out now! </span>
          </Badge>

          <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold">
            <WordPullUp className="text-4xl font-bold tracking-[-0.02em] text-black dark:text-white md:text-7xl md:leading-[5rem]" words="Experience the best" />
            <h1>

              <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                IAM
              </span>
              solution with
              <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">

               nIAM
              </span>

            </h1>
          </div>

          <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
          Everything you need to make your life easy to manage employee and partner access to business system and applications
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button className="w-5/6 md:w-1/4 font-bold group/arrow" onClick={redirect}>
              Get Started
              <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
            </Button>

            <Button
              asChild
              variant="secondary"
              className="w-5/6 md:w-1/4 font-bold"
            >
              <Link
                href="https://github.com/nobruf/shadcn-landing-page.git"
                target="_blank"
              >
                Github respository
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative group mt-14">
          <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/50 rounded-full blur-3xl"></div>

          {/* Ensure BorderBeam is visible and on top */}
          <BorderBeam className="relative z-20" />

          <ReactCompareSlider
            itemOne={
              <ReactCompareSliderImage
                src="/hero.png"
                srcSet="/hero.png"
                alt="Image one"
              />
            }
            itemTwo={
              <ReactCompareSliderImage
                src="/herodark.png"
                srcSet="/herodark.png"
                alt="Image two"
              />
            }
          />
          <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};
