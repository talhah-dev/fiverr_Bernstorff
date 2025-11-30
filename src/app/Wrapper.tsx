"use client"
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import Lenis from 'lenis'

interface Props {
    children: React.ReactNode;
}

export default function Wrapper({ children }: Props) {
    useEffect(() => {
        AOS.init({
            duration: 700,
            once: true,
            easing: "ease-out",
            offset: 80,
        });

        const lenis = new Lenis({
            autoRaf: true,
        });


    }, []);
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}
