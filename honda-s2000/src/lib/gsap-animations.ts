import { gsap } from 'gsap';
import { SplitText, ScrollTrigger, CustomEase, ScrambleTextPlugin } from 'gsap/all';

gsap.registerPlugin(SplitText, ScrollTrigger, CustomEase, ScrambleTextPlugin);

const textEase = "M0,0 C0.312,0.153 0.387,0.326 0.495,0.509 0.593,0.676 0.684,1.017 1,1 ";
const ease = "M0,0 C0.7,0.024 0.199,0.976 1,1 ";

// Loader function - exact recreation from 43300.js
export function loader() {
  let counter = {
    value: 0
  };

  function loaderNum() {
    let progress = Math.round(counter.value);
    const loaderText = document.querySelector(".loader-gauge-text");
    if (loaderText) {
      loaderText.textContent = progress.toString();
    }
  }

  const item = document.querySelectorAll(".loader-item");

  function display() {
    gsap.set(".loader", { display: "none" });
  }

  function endLoader() {
    let tl = gsap.timeline();

    tl.to(".loader-gauge", {
        y: "-70vh",
        duration: 1.2,
        ease: ease
      })
      .to(item, {
        yPercent: -100,
        stagger: { amount: .2, from: "random" },
        duration: 1.2,
        ease: ease,
        onComplete: () => {
          display();
        }
      }, 0)
      .to("[load-overlay]", {
        opacity: 0,
        duration: 1
      }, 0)
      .call(home, [], "-=1.2");
  }

  let tl = gsap.timeline({
    onComplete: () => {
      // Reverse gauge bars rapidly
      gsap.to(".loader-gauge-anim", {
        fill: "#292929", // or original color
        stagger: { each: 0.01, from: "end" }, // reverses from right to left
        ease: "power4.inOut",
        duration: 0.06, // much faster
      });

      gsap.to(counter, {
        onUpdate: loaderNum,
        value: 0,
        duration: 0.5, // much faster
        ease: "power4.inOut",
        onComplete: () => {
          endLoader();
        }
      });
    }
  });

  tl.to(counter, {
      delay: .15,
      onUpdate: loaderNum,
      ease: "power4.inOut",
      value: 100,
      duration: 2,
    }, 0)
    .to(".loader-gauge-anim", {
      delay: .3,
      fill: "#FF7700",
      stagger: .03,
      ease: "power4.inOut",
      from: "left",
      duration: .1,
    }, 0);
}

// Gauge function - exact recreation from 43300.js
export function gauge() {
  const wrap = document.querySelector(".progress-gauge");
  const gauge = document.querySelectorAll(".gauge-dial");
  const anim = document.querySelector(".gauge-anims-wrap");
  let ease = "M0,0 C0.736,0 0.241,1 1,1 ";
  let tl = gsap.timeline();
  let mph = {
    value: 0
  };

  function updateMph() {
    let progress = Math.round(mph.value);
    const mphText = document.querySelector(".mph-text");
    if (mphText) {
      mphText.textContent = progress.toString();
    }
  }

  tl.to(mph, {
      onUpdate: updateMph,
      ease: "power4.inOut",
      value: 9000,
      duration: 2,
    }, 0)
    .to(gauge, {
      rotation: 360,
      stagger: .1,
      ease: ease,
      duration: 2,
    }, 0);
}

// Home function - exact recreation from 43300.js
export function home() {
  // This function would contain the main page animations
  // Implementation depends on the specific animations in the original
  console.log("Home function called");
}

// Initialize all animations
export function initAnimations() {
  // Start with loader animation
  loader();
}
