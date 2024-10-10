"use client";
import Navbar from "../../customComponents/navbar";
import { SparklesCore } from "../../components/ui/sparkles";
import { MessengerIcon } from "../../customComponents/MessengerIcon";
import Image from "next/image";
import React, { useState } from "react";
import { LampContainer } from "../../components/ui/lamp";

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
                <div className="w-screen h-screen flex justify-start">
                    <div className="p-6 pt-24 m-6 mt-36 md:p-16 md:pt-28 md:m-16 w-full grid justify-items-center md:justify-items-center grid-cols-1 md:grid-cols-2 rounded-lg">
                        <div className="w-[20%] min-w-56 h-44 rounded-lg bg-[rgba(0, 0, 0, 0.89)]"></div>
                        <div className="w-[80%] min-w-56 h-24 bg-white"></div>
                    </div>
                </div>
            </LampContainer>
        </main>
    );
}