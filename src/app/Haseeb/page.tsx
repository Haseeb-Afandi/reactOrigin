"use client";
import Navbar from "../../customComponents/navbar";
import { SparklesCore } from "../../components/ui/sparkles";
import { MessengerIcon } from "../../customComponents/MessengerIcon";
import Image from "next/image";
import React, { useState } from "react";
import { LampContainer } from "../../components/ui/lamp";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3dCard";
import { TypewriterEffect } from "@/components/ui/typewriter";
import { FaAws, FaCss3Alt, FaDocker, FaGithub, FaHtml5, FaLinkedin, FaLinkedinIn, FaLinux, FaPhp, FaReact, FaUnity } from "react-icons/fa6";
import { TbBrandLaravel } from "react-icons/tb";
import { VscTerminalLinux } from "react-icons/vsc";
import { SiDotnet, SiFlutter, SiMysql, SiTailwindcss } from "react-icons/si";
import { IoLogoFirebase, IoLogoJavascript } from "react-icons/io5";
import { AiOutlineLinux } from "react-icons/ai";
import { Tabs } from "@/components/ui/tabs";
import { GlareCard } from "@/components/ui/glare-card";
import { Button } from "@/components/ui/moving-border";
import Link from "next/link";

export default function Haseeb() {
    const nameFull = [
        {
            text: "Muhammad",
        },
        {
            text: "Haseeb",
        },
        {
            text: 'Afandi',
            className: "text-cyan-500 dark:text-blue-500",
        },
    ];
    const work = [
        {
            text: "Full",
            className: "text-cyan-500 dark:text-blue-500",
        },
        {
            text: "-",
            className: "text-cyan-500 dark:text-blue-500",
        },
        {
            text: "Stack",
            className: "text-cyan-500 dark:text-blue-500",
        },
        {
            text: 'Developer',
        },
    ];
    return (
        <main className="relative w-full h-screen bg-slate-950 z-0">

            <SparklesCore
                id="tsparticlesfullpage"
                background="transparent"
                minSize={0.6}
                maxSize={1.4}
                particleDensity={100}
                className="w-screen fixed h-full z-10"
                particleColor="#26AAFD"
            />

            {/* <MessengerIcon className="fixed lg:pr-32 lg:pb-32 pr-16 pb-16 z-[50]" /> */}

            <div className="w-full md:pt-24 md:px-12 flex flex-wrap justify-start items-start z-20">
                <div className="z-20 p-6 py-6 md:py-6 m-6 mt-12 md:m-0 w-screen grid justify-items-center content-start md:justify-items-center items-center grid-cols-1 md:grid-cols-5 md:gap-3 rounded-lg bg-black">
                    <div className="z-20 w-full min-w-56 h-44 md:col-span-1 flex justify-center md:justify-end items-center rounded-xl bg-[#00040E]">
                        <Image src={"/Haseeb.jpg"} alt="Profile Image" width="1000" height="1000" className="w-28 h-28 md:mr-24 rounded-xl"></Image>
                    </div>
                    <div className="z-20 md:col-span-4 md:p-4 pt-0 md:pt-0 rounded-xl w-full h-full flex justify-start md:justify-center items-center bg-[#00040E]">
                        <h2 className="text-2xl md:text-6xl font-bold text-center md:text-left w-auto">
                            <TypewriterEffect words={nameFull} className="md:pt-4"></TypewriterEffect>
                            <span className="text-base"><TypewriterEffect words={work} className="md:pt-4"></TypewriterEffect></span>
                        </h2>
                    </div>
                </div>
                <div className="z-30 relative md:px-6 w-screen bg-black">
                    <div className="z-30 w-full relative p-6 md:px-24 h-full min-w-56 md:mt-0 rounded-xl flex flex-wrap text-pretty text-center md:text-left text-white justify-center items-center">
                        <Link className="z-30 relative cursor-pointer" href={"https://github.com/Haseeb-Afandi"}>
                            <FaGithub className="z-30 w-[30px] h-[30px] mx-4 rounded-full text-[#26AAFD]" />
                        </Link>
                        <Link href={"https://www.linkedin.com/in/m-haseeb-afandi"}>
                            <FaLinkedin className="w-[30px] h-[30px] mx-4 rounded-full text-[#26AAFD]" />
                        </Link>
                    </div>
                </div>
                <div className="z-20 md:p-6 w-screen bg-black">
                    <div className="z-20 w-full p-6 md:py-12 md:px-24 h-full min-w-56 md:mt-0 rounded-xl text-pretty text-center md:text-left text-white items-center bg-[#00040E]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, illo magni nesciunt non autem rerum maiores explicabo perspiciatis deleniti hic reiciendis amet iusto, voluptas maxime aspernatur eaque quasi ullam quaerat!
                    </div>
                </div>
            </div>
            <h2 className="text-blue-500 textGlow text-2xl md:text-6xl font-bold text-center md:my-24">
                Skills
            </h2>
            <div className="z-20 relative p-6 md:p-12 my-6 md:m-12 mr-4 ml-4 min-w-72 rounded-x bg-black">
                <div className="z-20 flex flex-wrap w-full justify-center bg-[#00040E]">
                    <FaPhp className="w-[50px] h-[50px] m-4 rounded-full text-[#26AAFD]" />
                    <TbBrandLaravel className="w-[50px] h-[50px] m-4 rounded-full text-[#26AAFD]" />
                    <SiFlutter className="w-[50px] h-[50px] m-4 rounded-full text-[#26AAFD]" />
                    <IoLogoFirebase className="w-[50px] h-[50px] m-4 rounded-full text-[#26AAFD]" />
                    <SiMysql className="w-[50px] h-[50px] m-4 rounded-full text-[#26AAFD]" />
                    <FaReact className="w-[50px] h-[50px] m-4 rounded-full text-[#26AAFD]" />
                    <FaHtml5 className="w-[50px] h-[50px] m-4 rounded-full text-[#26AAFD]" />
                    <FaCss3Alt className="w-[50px] h-[50px] m-4 rounded-full text-[#26AAFD]" />
                    <SiTailwindcss className="w-[50px] h-[50px] m-4 rounded-full text-[#26AAFD]" />
                    <IoLogoJavascript className="w-[50px] h-[50px] m-4 rounded-full text-[#26AAFD]" />
                    <SiDotnet className="w-[50px] h-[50px] m-4 rounded-full text-[#26AAFD]" />
                    <FaDocker className="w-[50px] h-[50px] m-4 rounded-full text-[#26AAFD]" />
                    <FaAws className="w-[50px] h-[50px] m-4 rounded-full text-[#26AAFD]" />
                    <FaUnity className="w-[50px] h-[50px] m-4 rounded-full text-[#26AAFD]" />
                </div>
            </div>
            <h2 className="text-blue-500 textGlow text-2xl md:text-6xl font-bold text-center mt-12 md:my-24">
                Projects
            </h2>
            <div className="z-20 mt-12 md:mt-0 h-full w-full">
                <div className="z-20 h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start">
                    <Tabs tabs={tabs} />
                </div>
            </div>
            <h2 className="text-blue-500 textGlow text-2xl md:text-6xl font-bold text-center mt-12 md:my-24">
                Experience
            </h2>
            <div className="z-20 relative p-6 md:p-12 my-6 md:m-12 mr-4 ml-4 min-w-72 rounded-x portfolioSeesha flex justify-center">
                <div className="z-20 flex flex-col w-full md:w-2/5">
                    <div className="border-l-2 border-solid border-[#22628E] flex justify-center items-center relative">
                        <Button
                            borderRadius="0rem"
                            className="w-full bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                            containerClassName="w-44 h-12 md:h-24 md:w-72 my-12 md:my-24"
                        >
                            <p className="text-center text-base md:text-xl text-[#26AAFD] textGlow">Php - Internee</p>
                        </Button>

                        <div className="z-30 absolute -left-2 md:-left-4">
                            <div className="p-[1px] md:p-[2px] bg-[#26AAFD] rounded-full">
                                <div className="w-3 h-3 md:w-6 md:h-6 border-2 border-solid border-black rounded-full bg-[#26AAFD]"></div>
                            </div>
                        </div>
                    </div>
                    <div className="border-l-2 border-solid border-[#22628E] flex justify-center items-center relative">
                        <Button
                            borderRadius="0rem"
                            className="w-full bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                            containerClassName="w-44 h-12 md:h-24 md:w-72 my-12 md:my-24"
                        >
                            <p className="text-center text-base md:text-xl text-[#26AAFD] textGlow">Jr. Php Developer</p>
                        </Button>

                        <div className="z-30 absolute -left-2 md:-left-4">
                            <div className="p-[1px] md:p-[2px] bg-[#26AAFD] rounded-full">
                                <div className="w-3 h-3 md:w-6 md:h-6 border-2 border-solid border-black rounded-full bg-[#26AAFD]"></div>
                            </div>
                        </div>
                    </div>
                    <div className="border-l-2 border-solid border-[#22628E] flex justify-center items-center relative">
                        <Button
                            borderRadius="0rem"
                            className="w-full bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                            containerClassName="w-44 h-12 md:h-24 md:w-72 my-12 md:my-24"
                        >
                            <p className="text-center text-base md:text-xl text-[#26AAFD] textGlow">Freelancer</p>
                        </Button>

                        <div className="z-30 absolute -left-2 md:-left-4">
                            <div className="p-[1px] md:p-[2px] bg-[#26AAFD] rounded-full">
                                <div className="w-3 h-3 md:w-6 md:h-6 border-2 border-solid border-black rounded-full bg-[#26AAFD]"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main >
    );
}

const DummyContent = () => {
    return (
        <div className="md:h-full md:p-12 md:pt-24 flex flex-wrap justify-center items-center">
            <Image
                src="/LmsFrontPage.png"
                alt="dummy image"
                width="1000"
                height="1000"
                className="h-full md:h-full md:w-[70%] rounded-xl mx-auto"
            />
            <div className="z-20 invisible md:visible md:w-1/4 md:h-72 md:py-6 relative ml-[4%] rounded-xl bg-black">
                <h2 className="text-base text-white">Tech Stack</h2>
                <div className="z-20 flex flex-wrap w-full justify-center bg-[#00040E]">
                    <FaPhp className="w-[30px] h-[30px] md:m-4 rounded-full text-[#26AAFD]" />
                    <SiMysql className="w-[30px] h-[30px] md:m-4 rounded-full text-[#26AAFD]" />
                    <IoLogoJavascript className="w-[30px] h-[30px] md:m-4 rounded-full text-[#26AAFD]" />
                    <FaCss3Alt className="w-[30px] h-[30px] md:m-4 rounded-full text-[#26AAFD]" />
                    <FaHtml5 className="w-[30px] h-[30px] md:m-4 rounded-full text-[#26AAFD]" />
                </div>
                <h2 className="text-base text-white pt-6 bg-[#171B24]">ID: <span className="text-[#26AAFD]">student44</span></h2>
                <h2 className="text-base text-white pb-6 bg-[#171B24]">Pass: <span className="text-[#26AAFD]">Student44365</span></h2>
            </div>
        </div>
    )
};
const tabs = [
    {
        title: "LMS",
        value: "lms",
        content: (
            <a href="./lms">
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-center text-white seesha4 cursor-pointer">
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
            <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl text-center md:text-4xl font-bold text-white seesha4 cursor-pointer">
                <p>Head n Tails</p>
                <DummyContent />
            </div>
        ),
    },
    {
        title: "Random",
        value: "random",
        content: (
            <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl text-center md:text-4xl font-bold text-white seesha4 cursor-pointer">
                <p>Random tab</p>
                <DummyContent />
            </div>
        ),
    },
];


