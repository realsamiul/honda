const fs = require('fs');
const path = require('path');

// Read the complete body HTML
const bodyPath = path.join(__dirname, 'complete-body.html');
const bodyContent = fs.readFileSync(bodyPath, 'utf8');

// Convert HTML to JSX
let jsxContent = bodyContent
  // Convert class to className
  .replace(/class=/g, 'className=')
  // Convert self-closing tags
  .replace(/<br>/g, '<br />')
  .replace(/<hr>/g, '<hr />')
  .replace(/<img([^>]*)>/g, '<img$1 />')
  // Convert load-overlay attribute
  .replace(/load-overlay=""/g, 'load-overlay=""')
  // Convert clip-path to clipPath
  .replace(/clip-path=/g, 'clipPath=')
  // Escape quotes in dangerouslySetInnerHTML
  .replace(/"/g, '\\"')
  .replace(/'/g, "\\'");

// Create the React component
const reactComponent = `'use client'

import { useEffect } from 'react'
import { initAnimations } from '@/lib/gsap-animations'

export default function Home() {
  useEffect(() => {
    // Load external scripts exactly as in original
    const load2k = (src: string) => {
      const script = document.createElement("script");
      script.setAttribute("src", src);
      script.setAttribute("type", "module");
      document.body.appendChild(script);
      script.addEventListener("load", () => {
        console.log("Slater loaded 2k.js: https://slater.app/16118.js 🤙");
      });
      script.addEventListener("error", (e) => {
        console.log("Error loading file", e);
      });
    };

    const src = window.location.host.includes("webflow.io") 
      ? "https://slater.app/16118.js" 
      : "/js/16118.js";
    load2k(src);

    // Load other external scripts
    const scripts = [
      "https://cdn.jsdelivr.net/gh/studio-freight/lenis@1.0.23/bundled/lenis.min.js",
      "https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.13.0/lottie.min.js",
      "https://cdn.jsdelivr.net/npm/grained@0.0.2/grained.min.js"
    ];

    scripts.forEach(src => {
      const script = document.createElement("script");
      script.src = src;
      document.body.appendChild(script);
    });

    // Initialize grained effect
    const initGrained = () => {
      if (typeof (window as any).grained !== 'undefined') {
        const options = {
          animate: true,
          patternWidth: 200,
          patternHeight: 200,
          grainOpacity: .28,
          grainDensity: 1.4,
          grainWidth: .5,
          grainHeight: .5
        };
        (window as any).grained("#grain", options);
      }
    };

    // Wait for grained to load
    setTimeout(initGrained, 1000);

    // GSAP animations
    if (typeof (window as any).gsap !== 'undefined') {
      (window as any).gsap.to(".loader-gauge", {
        opacity: 1,
        ease: "power3.inOut",
        duration: .5,
        delay: .2,
      });

      (window as any).gsap.set("[load-overlay]", {
        opacity: .5
      });

      // Initialize custom animations
      initAnimations();
    }
  }, []);

  return (
    <div dangerouslySetInnerHTML={{ __html: \`${jsxContent}\` }} />
  )
}`;

// Write the complete React component
fs.writeFileSync(
  path.join(__dirname, 'src', 'app', 'page-complete.tsx'),
  reactComponent
);

console.log('Complete React component created!');
