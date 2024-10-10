"use client";
import Navbar from "../../customComponents/navbar";
import { SparklesCore } from "../../components/ui/sparkles";
import { MessengerIcon } from "../../customComponents/MessengerIcon";
import Image from "next/image";
import React, { useState } from "react";
import { LampContainer } from "../../components/ui/lamp";

export default function Hashir() {
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
                <div className="w-screen h-screen flex justify-start items-center">
                    <h1>Saad</h1>
                </div>
            </LampContainer>
        </main>
    );
}