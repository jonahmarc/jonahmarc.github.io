"use client";

import React from 'react'
import { useRef, useState, useEffect } from 'react';
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";

import NavBar from './NavBar'
import Footer from './Footer'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
      if (!vantaEffect && vantaRef.current) {
          setVantaEffect(
              NET({
                el: vantaRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.0,
                minWidth: 200.0,
                scale: 1.0,
                scaleMobile: 1.0,
                color: 0x7fc7d9, // Line color
                backgroundColor: 0x000000,
                points: 10.0, // Number of points
                maxDistance: 10.0, // Max distance for connections
                spacing: 20.0, // Spacing between nodes
                showDots: true, // Ensure points are shown
                THREE: THREE,
              })
          );
      }

      return () => {
          if (vantaEffect) vantaEffect.destroy();
      };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} className='w-full h-full flex flex-col items-center'>
      <NavBar />
      <main className="flex flex-col flex-grow overflow-y-auto
          w-full lg:w-[1200px]
          px-5 lg:px-0">
            { children }
      </main>
      <Footer />
    </div>
  )
}
