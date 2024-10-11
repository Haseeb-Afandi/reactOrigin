"use client";
import Navbar from "../../customComponents/navbar";
import { SparklesCore } from "../../components/ui/sparkles";
import { MessengerIcon } from "../../customComponents/MessengerIcon";
import Image from "next/image";
import React, { useState } from "react";
import { LampContainer } from "../../components/ui/lamp";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3dCard";

export default function Haseeb() {
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

            <MessengerIcon className="fixed lg:pr-32 lg:pb-32 pr-16 pb-16 z-[50]" />

            <Navbar className="top-2" />
            <LampContainer className="z-[6] bg-transparent">
                <div className="w-screen flex justify-start">
                    <div className="p-6 pt-24 m-6 mt-36 md:p-16 md:pt-28 md:m-16 w-full grid justify-items-center content-start md:justify-items-center grid-cols-1 md:grid-cols-2 rounded-lg">
                        <div className="w-1/4 min-w-56 h-44 bg-black rounded-xl">
                            <Image src={"/Haseeb.jpg"} alt="Profile Image" width="1000" height="1000" className="w-full h-full rounded-xl"></Image>
                        </div>
                        <div className="w-3/4 min-w-56 mt-16 md:mt-0  portfolioSeesha rounded-xl text-pretty text-center">
                            At H3S, we specialize in delivering top-notch software solutions tailored to meet diverse business needs.
                            Our key services encompass the development of cutting-edge web applications, robust management systems, and comprehensive ERP software.
                            We excel in creating dynamic e-commerce applications that enhance online shopping experiences and cross-platform mobile apps that ensure seamless performance across various devices.
                            With a focus on innovation and quality, H3S is your trusted partner for all your software development needs.
                        </div>
                    </div>
                </div>
                <div className="m-16 w-full portfolioSeesha rounded-xl">
                    <h2 className="text-blue-500 textGlow text-2xl md:text-6xl font-bold text-center w-full">
                    </h2>
                    <div className="p-12 flex flex-wrap w-full">
                        <CardContainer className="inter-var z-10 w-24 h-24 rounded-full py-0">
                            <CardBody className="bg-transparent bg-opacity-0 relative group/card  dark:bg-transparent w-auto sm:w-[30rem] h-auto rounded-xl">
                                <CardItem translateZ="100" className="w-full">
                                    <Image
                                        src="/H3SCropped.png"
                                        height="1000"
                                        width="1000"
                                        className="h-full w-full object-cover rounded-full group-hover/card:shadow-xl"
                                        alt="thumbnail"
                                    />
                                </CardItem>
                            </CardBody>
                        </CardContainer><CardContainer className="inter-var z-10 bottom-0  w-24 h-24">
                            <CardBody className="bg-transparent bg-opacity-0 relative group/card  dark:bg-transparent w-auto sm:w-[30rem] h-auto rounded-xl p-6">
                                <CardItem translateZ="100" className="w-full">
                                    <Image
                                        src="/H3SCropped.png"
                                        height="1000"
                                        width="1000"
                                        className="h-100 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                        alt="thumbnail"
                                    />
                                </CardItem>
                            </CardBody>
                        </CardContainer>
                    </div>
                </div>
            </LampContainer>
        </main>
    );
}