"use client";
import Navbar from "../../customComponents/navbar";
import { SparklesCore } from "../../components/ui/sparkles";
import { MessengerIcon } from "../../customComponents/MessengerIcon";
import Image from "next/image";
import React, { useState } from "react";
import { LampContainer } from "../../components/ui/lamp";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3dCard";
import { TypewriterEffect } from "@/components/ui/typewriter";
import { FaAws, FaCss3Alt, FaDocker, FaHtml5, FaLinux, FaPhp, FaReact } from "react-icons/fa6";
import { TbBrandLaravel } from "react-icons/tb";
import { VscTerminalLinux } from "react-icons/vsc";
import { SiDotnet, SiFlutter, SiMysql, SiTailwindcss } from "react-icons/si";
import { IoLogoFirebase, IoLogoJavascript } from "react-icons/io5";
import { AiOutlineLinux } from "react-icons/ai";

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
    return (
        <main className="relative w-full h-screen bg-slate-950 -z-10">

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
                <div className="z-20 p-6 py-6 md:pt-6 m-6 mt-12 md:m-0 w-screen grid justify-items-center content-start md:justify-items-center items-center grid-cols-1 md:grid-cols-5 md:gap-3 rounded-lg bg-black">
                    <div className="z-20 w-full min-w-56 h-44 md:col-span-1 flex justify-center md:justify-end items-center rounded-xl bg-[#00040E]">
                        <Image src={"/Haseeb.jpg"} alt="Profile Image" width="1000" height="1000" className="w-28 h-28 md:mr-24 rounded-xl"></Image>
                    </div>
                    <div className="z-20 md:col-span-4 md:p-4 pt-0 md:pt-0 rounded-xl w-full h-full flex justify-start items-center  bg-[#00040E]">
                        <h2 className="text-2xl md:text-6xl font-bold text-center md:text-left w-auto">
                            <TypewriterEffect words={nameFull} className="md:pt-4"></TypewriterEffect>
                        </h2>
                    </div>
                </div>

                <div className="z-20 md:p-6 w-screen bg-black">
                    <div className="z-20 w-full p-6 md:p-0 md:px-24 h-full min-w-56 md:mt-0 rounded-xl text-pretty text-center md:text-left text-white items-center bg-[#00040E]">
                        At H3S, we specialize in delivering top-notch software solutions tailored to meet diverse business needs.
                        Our key services encompass the development of cutting-edge web applications, robust management systems, and comprehensive ERP software.
                        We excel in creating dynamic e-commerce applications that enhance online shopping experiences and cross-platform mobile apps that ensure seamless performance across various devices.
                        With a focus on innovation and quality, H3S is your trusted partner for all your software development needs.
                    </div>
                </div>
            </div>
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
                    <AiOutlineLinux className="w-[50px] h-[50px] m-4 rounded-full text-[#26AAFD]" />
                </div>
            </div>
        </main >
    );
}

