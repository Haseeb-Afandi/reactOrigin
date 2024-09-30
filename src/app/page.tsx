"use client";
import Image from "next/image";
import React, { useState } from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3dCard";
import { motion } from "framer-motion";
import { LampContainer } from "../components/ui/lamp";
import { Vortex } from "@/components/ui/vortex";
import { SparklesCore } from "@/components/ui/sparkles";
import { HeroParallax } from "@/components/ui/hero-parralex";
import { Tabs } from "@/components/ui/tabs";
import { TypewriterEffect } from "@/components/ui/typewriter";
import { BackgroundGradient } from "@/components/ui/backgroundGradient";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/urtaHuaNavbar"
import { cn } from "@/utils/cn";
import { MdOutlineWeb } from "react-icons/md";
import { AiOutlineMobile } from "react-icons/ai";
import { FaPlus } from "react-icons/fa6";

export default function Home() {
  const words = [
    {
      text: "H3S",
      className: "text-cyan-500 dark:text-blue-500",
    },
    {
      text: " - ",
    },
    {
      text: '"Your',
    },
    {
      text: " Vision,",
    },
    {
      text: " Our",
    },
    {
      text: ' Code"',
    },
  ];
  return (
    <main className="relative w-full h-screen bg-slate-950">
      <Navbar className="top-2" />
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: -100 }}
          transition={{
            delay: 0.1,
            duration: 1,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          <div className="h-[40rem] relative w-screen bg-black bg-opacity-0 flex flex-col items-center justify-center overflow-hidden rounded-md">
            <div className="w-full absolute inset-0 h-screen">
              <SparklesCore
                id="tsparticlesfullpage"
                background="transparent"
                minSize={0.6}
                maxSize={1.4}
                particleDensity={100}
                className="w-screen h-full"
                particleColor="#089CFF"
              />
            </div>
            <CardContainer className="inter-var z-10 -top-20 h-0 bottom-0">
              <CardBody className="bg-transparent bg-opacity-0 relative group/card  dark:bg-transparent w-auto sm:w-[30rem] h-auto rounded-xl p-6">
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src="/H3SLogo.png"
                    height="1000"
                    width="1000"
                    className="h-100 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                  {/* <h1 className="text-cyan-500">
                    H3S
                  </h1> */}
                </CardItem>
              </CardBody>
            </CardContainer>
            <TypewriterEffect words={words} />
          </div>

        </motion.h1>
      </LampContainer>
      <Vortex
        backgroundColor="transparent"
        rangeY={800}
        particleCount={50}
        baseHue={120}
        className="flex items-center flex-col justify-between px-2 md:px-10  py-10 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center mb-44">
          Services
        </h2>

        <div className="w-full flex flex-wrap justify-evenly items-center mb-44">

          <div className="p-4">
            <BackgroundGradient className="py-10 m-6 sm:m-2 w-auto max-w-[400px] rounded-[22px] p-4 sm:p-10 bg-black bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-8">
              <h2 className="text-5xl satisfy font-bold font-pretty w-full text-center mb-16">Web App</h2>
              <div className="w-full flex justify-evenly items-center">
                <MdOutlineWeb className="iconColorPrimary iconGlow rounded-3xl px-0 mb-12" size={"6.5rem"} />
              </div>
              <p className="text-white text-center text-sm md:text-base text-pretty rounded-sm">
                At H3S, we specialize in delivering top-notch software solutions tailored to meet diverse business needs.
                Our key services encompass the development of cutting-edge web applications, robust management systems, and comprehensive ERP software.
                We excel in creating dynamic e-commerce applications that enhance online shopping experiences and cross-platform mobile apps that ensure seamless performance across various devices.
                With a focus on innovation and quality, H3S is your trusted partner for all your software development needs.
              </p>
              <div className="w-full flex justify-center items-center gap-4 mt-6">
                <button className="px-4 py-2 mt-12 mb-6 bg-[#089CFF] hover:bg-[#45b5ff] transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
                  Find out more
                </button>
              </div>


            </BackgroundGradient>
          </div>
          <div className="p-4">
            <BackgroundGradient className="py-10 m-6 sm:m-2 w-auto max-w-[400px] rounded-[22px] p-4 sm:p-10 bg-black bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-8">
              <h2 className="text-5xl satisfy font-bold font-pretty w-full text-center mb-16">Web & Mobile App</h2>
              <div className="w-full flex justify-evenly items-center">
                <MdOutlineWeb className="iconColorPrimary iconGlow rounded-3xl px-0 mb-12" size={"6.5rem"} />
                <FaPlus className="iconColorPrimary iconGlow rounded-full px-0 mb-8" size={"2.5rem"} />
                <AiOutlineMobile className="iconColorPrimary iconGlow rounded-3xl px-0 mb-8" size={"6.5rem"} />
              </div>
              <p className="text-white text-center text-sm md:text-base text-pretty rounded-sm">
                At H3S, we specialize in delivering top-notch software solutions tailored to meet diverse business needs.
                Our key services encompass the development of cutting-edge web applications, robust management systems, and comprehensive ERP software.
                We excel in creating dynamic e-commerce applications that enhance online shopping experiences and cross-platform mobile apps that ensure seamless performance across various devices.
                With a focus on innovation and quality, H3S is your trusted partner for all your software development needs.
              </p>
              <div className="w-full flex justify-center items-center gap-4 mt-6">
                <button className="px-4 py-2 mt-12 mb-6 bg-[#089CFF] hover:bg-[#45b5ff] transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
                  Find out more
                </button>
              </div>


            </BackgroundGradient>
          </div>
          <div className="p-4">
            <BackgroundGradient className="py-10 m-6 sm:m-2 w-auto max-w-[400px] rounded-[22px] p-4 sm:p-10 bg-black bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-8">
              <h2 className="text-5xl satisfy font-bold font-pretty w-full text-center mb-16">Mobile App</h2>
              <div className="w-full flex justify-evenly items-center">
                <AiOutlineMobile className="iconColorPrimary iconGlow rounded-3xl px-0 mb-8" size={"6.5rem"} />
              </div>
              <p className="text-white text-center text-sm md:text-base text-pretty rounded-sm">
                At H3S, we specialize in delivering top-notch software solutions tailored to meet diverse business needs.
                Our key services encompass the development of cutting-edge web applications, robust management systems, and comprehensive ERP software.
                We excel in creating dynamic e-commerce applications that enhance online shopping experiences and cross-platform mobile apps that ensure seamless performance across various devices.
                With a focus on innovation and quality, H3S is your trusted partner for all your software development needs.
              </p>
              <div className="w-full flex justify-center items-center gap-4 mt-6">
                <button className="px-4 py-2 mt-12 mb-6 bg-[#089CFF] hover:bg-[#45b5ff] transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
                  Find out more
                </button>
              </div>


            </BackgroundGradient>
          </div>

          <h2 className="text-white text-2xl md:text-6xl font-bold text-center w-full my-44">
            Project Catalog
          </h2>
          <div className="h-full w-full bg-slate-950">
            <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start">
              <Tabs tabs={tabs} />
            </div>
          </div>
        </div>
      </Vortex>


    </main>
    // <div>
    //   <SignupFormDemo />
    // </div>
  );

}
function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Algochurn"
              href="https://algochurn.com"
              src="/HslogoCropped.jpg"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Tailwind Master Kit"
              href="https://tailwindmasterkit.com"
              src="/HslogoCropped.jpg"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Moonbeam"
              href="https://gomoonbeam.com"
              src="/HslogoCropped.jpg"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              href="https://userogue.com"
              src="/HslogoCropped.jpg"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

const products = [
  {
    title: "",
    link: "",
    thumbnail:
      "/HslogoCropped.jpg",
  },
  {
    title: "",
    link: "",
    thumbnail:
      "/H3SLogo.png",
  },
  {
    title: "",
    link: "",
    thumbnail:
      "/HslogoCropped.jpg",
  },
  {
    title: "",
    link: "",
    thumbnail:
      "/next.svg",
  },
  {
    title: "",
    link: "",
    thumbnail:
      "/HslogoCropped.jpg",
  },
  {
    title: "",
    link: "",
    thumbnail:
      "/H3SLogo.png",
  },
  {
    title: "",
    link: "",
    thumbnail:
      "/HslogoCropped.jpg",
  },
  {
    title: "",
    link: "",
    thumbnail:
      "/next.svg",
  },
  {
    title: "",
    link: "",
    thumbnail:
      "/HslogoCropped.jpg",
  },
  {
    title: "",
    link: "",
    thumbnail:
      "/H3SLogo.png",
  },
  {
    title: "",
    link: "",
    thumbnail:
      "/HslogoCropped.jpg",
  },
  {
    title: "",
    link: "",
    thumbnail:
      "/next.svg",
  },
  {
    title: "",
    link: "",
    thumbnail:
      "/HslogoCropped.jpg",
  },
  {
    title: "",
    link: "",
    thumbnail:
      "/H3SLogo.png",
  },

];

const DummyContent = () => {
  return (
    <Image
      src="/HslogoCropped.jpg"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};

const tabs = [
  {
    title: "LMS",
    value: "lms",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-cyan-500 to-blue-500">
        <p>LMS</p>
        <DummyContent />
      </div>
    ),
  },
  {
    title: "Head n Tails",
    value: "head n tails",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-cyan-500 to-blue-5000">
        <p>Head n Tails</p>
        <DummyContent />
      </div>
    ),
  },
  {
    title: "Random",
    value: "random",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-cyan-500 to-blue-5000">
        <p>Random tab</p>
        <DummyContent />
      </div>
    ),
  },
];

{/* <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div> */}
{/* <Meteors number={20} /> */ }