"use client"
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

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
    }, []);
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}
