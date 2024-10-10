"use client";
import Image from "next/image";
import React, { useState } from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3dCard";
import { AnimatePresence, motion } from "framer-motion";
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
import { MessengerIcon } from "@/customComponents/MessengerIcon";
import { CanvasRevealEffect } from "../components/ui/canvas-reveal-effect";
import Navbar from "@/customComponents/navbar";
import Link from "next/link";

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
  const globeConfig = {
    pointSize: 4,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };
  const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
  const sampleArcs = [
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 1,
      startLat: 28.6139,
      startLng: 77.209,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -1.303396,
      endLng: 36.852443,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: -15.785493,
      startLng: -47.909029,
      endLat: 36.162809,
      endLng: -115.119411,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: -33.8688,
      startLng: 151.2093,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: 21.3099,
      startLng: -157.8581,
      endLat: 40.7128,
      endLng: -74.006,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: 11.986597,
      startLng: 8.571831,
      endLat: -15.595412,
      endLng: -56.05918,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: -34.6037,
      startLng: -58.3816,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 48.8566,
      endLng: -2.3522,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 14.5995,
      startLng: 120.9842,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: -33.8688,
      endLng: 151.2093,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 48.8566,
      endLng: -2.3522,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: -15.432563,
      startLng: 28.315853,
      endLat: 1.094136,
      endLng: -63.34546,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: 37.5665,
      startLng: 126.978,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -15.595412,
      endLng: -56.05918,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: 48.8566,
      startLng: -2.3522,
      endLat: 52.52,
      endLng: 13.405,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: 52.52,
      startLng: 13.405,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: -8.833221,
      startLng: 13.264837,
      endLat: -33.936138,
      endLng: 18.436529,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: 49.2827,
      startLng: -123.1207,
      endLat: 52.3676,
      endLng: 4.9041,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: 40.7128,
      endLng: -74.006,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 9,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 9,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 9,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: -34.6037,
      endLng: -58.3816,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 10,
      startLat: -22.9068,
      startLng: -43.1729,
      endLat: 28.6139,
      endLng: 77.209,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 10,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 31.2304,
      endLng: 121.4737,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 10,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 52.3676,
      endLng: 4.9041,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 11,
      startLat: 41.9028,
      startLng: 12.4964,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 11,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 31.2304,
      endLng: 121.4737,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 11,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 1.3521,
      endLng: 103.8198,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 12,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 37.7749,
      endLng: -122.4194,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 12,
      startLat: 35.6762,
      startLng: 139.6503,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 12,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 13,
      startLat: 52.52,
      startLng: 13.405,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 13,
      startLat: 11.986597,
      startLng: 8.571831,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 13,
      startLat: -22.9068,
      startLng: -43.1729,
      endLat: -34.6037,
      endLng: -58.3816,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 14,
      startLat: -33.936138,
      startLng: 18.436529,
      endLat: 21.395643,
      endLng: 39.883798,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
  ];
  return (
    <main className="relative w-full h-screen bg-slate-950">

      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={100}
        className="w-screen fixed z-[5] h-full"
        particleColor="#26AAFD"
      />

      {/* <MessengerIcon className="fixed lg:pr-32 lg:pb-32 pr-16 pb-16 z-[50]" /> */}

      <Navbar className="top-2" />
      <LampContainer className="z-[6] bg-transparent">
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
        <h2 className="text-blue-500 textGlow text-2xl md:text-6xl font-bold text-center mb-44">
          Services
        </h2>

        <div className="w-full flex flex-wrap justify-evenly items-center mb-44">

          <div className="p-4">
            <BackgroundGradient className="py-10 m-6 sm:m-2 w-auto max-w-[400px] rounded-[22px] p-4 sm:p-10 seesha2 bg-clip-padding">
              <h2 className="text-5xl satisfy font-bold font-pretty w-full text-center mb-16 textGlow2">Web App</h2>
              <div className="w-full flex justify-evenly items-center">
                <MdOutlineWeb className="iconColorPrimary  rounded-3xl px-0 mb-12" size={"6.5rem"} />
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
            <BackgroundGradient className="py-10 m-6 sm:m-2 w-auto max-w-[400px] rounded-[22px] p-4 sm:p-10 seesha3">
              <h2 className="text-5xl satisfy font-bold font-pretty w-full text-center mb-16 textGlow2">Web & Mobile App</h2>
              <div className="w-full flex justify-evenly items-center">
                <MdOutlineWeb className="iconColorPrimary  rounded-3xl px-0 mb-12" size={"6.5rem"} />
                <FaPlus className="iconColorPrimary  rounded-full px-0 mb-8" size={"2.5rem"} />
                <AiOutlineMobile className="iconColorPrimary  rounded-3xl px-0 mb-8" size={"6.5rem"} />
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
            <BackgroundGradient className="py-10 m-6 sm:m-2 w-auto max-w-[400px] rounded-[22px] p-4 sm:p-10 seesha bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-8">
              <h2 className="text-5xl satisfy font-bold font-pretty w-full text-center mb-16 text-[#27a4f7] textGlow2">Mobile App</h2>
              <div className="w-full flex justify-evenly items-center">
                <AiOutlineMobile className="iconColorPrimary  rounded-3xl px-0 mb-8" size={"6.5rem"} />
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

          <h2 className="text-blue-500 textGlow text-2xl md:text-6xl font-bold text-center w-full my-44">
            Project Catalog
          </h2>
          <div className="h-full w-full">
            <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start">
              <Tabs tabs={tabs} />
            </div>
          </div>
        </div>
        <h2 className="text-blue-500 textGlow text-2xl md:text-6xl font-bold text-center w-full my-44">
          Meet the Team!
        </h2>
        <div className="py-20 flex flex-col lg:flex-row items-center justify-center bg-white dark:bg-black w-full gap-4 mx-auto px-8">
          <Link href={"Haseeb"} className="w-[30%] min-w-64">
            <Card title="M Haseeb Afandi" icon={<AceternityIcon />}>
              <CanvasRevealEffect
                animationSpeed={5.1}
                containerClassName="bg-emerald-900"
              />
            </Card>
          </Link>
          <Link href={"Hassan"} className="w-[30%] min-w-64">
            <Card title="Syed Hassan Raza" icon={<AceternityIcon />}>
              <CanvasRevealEffect
                animationSpeed={3}
                containerClassName="bg-black"
                colors={[
                  [236, 72, 153],
                  [232, 121, 249],
                ]}
                dotSize={2}
              />
              {/* Radial gradient for the cute fade */}
              <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
            </Card>
          </Link>
          <Link href={"Hashir"} className="w-[30%] min-w-64">
            <Card title="M Hashir Azhar" icon={<AceternityIcon />}>
              <CanvasRevealEffect
                animationSpeed={3}
                containerClassName="bg-sky-600"
                colors={[[125, 211, 252]]}
              />
            </Card>
          </Link>
          <Link href={"Saad"} className="w-[30%] min-w-64">
            <Card title="M Saad Amir" icon={<AceternityIcon />}>
              <CanvasRevealEffect
                animationSpeed={3}
                containerClassName="bg-sky-600"
                colors={[[125, 211, 252]]}
              />
            </Card>
          </Link>
        </div>
      </Vortex>
    </main>
    // <div>
    //   <SignupFormDemo />
    // </div>
  );

}

// CARD REVEAL STARTS 
const Card = ({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[30rem] relative"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
      </div>
    </div>
  );
};

const AceternityIcon = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white "
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
        style={{ mixBlendMode: "darken" }}
      />
    </svg>
  );
};

const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
// CARD REVEAL ENDS 



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
      src="/LmsFrontPage.png"
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
      <a href="./lms">
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white seesha4 cursor-pointer">
          <p>LMS</p>
          <DummyContent />
        </div>
      </a>
    ),
  },
  {
    title: "Head n Tails",
    value: "head n tails",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white seesha4 cursor-pointer">
        <p>Head n Tails</p>
        <DummyContent />
      </div>
    ),
  },
  {
    title: "Random",
    value: "random",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white seesha4 cursor-pointer">
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